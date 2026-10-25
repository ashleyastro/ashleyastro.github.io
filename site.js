document.getElementById('year').textContent = new Date().getFullYear();

(function () {
  var banner = document.getElementById('consent');
  function saved() { try { return localStorage.getItem('ga-consent'); } catch (e) { return null; } }
  function choose(value) {
    try { localStorage.setItem('ga-consent', value); } catch (e) {}
    gtag('consent', 'update', { analytics_storage: value });
    if (value === 'denied') {
      // Remove any analytics cookies already set
      document.cookie.split(';').forEach(function (c) {
        var name = c.split('=')[0].trim();
        if (name.indexOf('_ga') === 0) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.' + location.hostname;
        }
      });
    }
    banner.hidden = true;
  }
  if (!saved()) banner.hidden = false;
  document.getElementById('consent-accept').addEventListener('click', function () { choose('granted'); });
  document.getElementById('consent-decline').addEventListener('click', function () { choose('denied'); });
  document.getElementById('consent-settings').addEventListener('click', function () {
    banner.hidden = false;
    document.getElementById('consent-accept').focus();
  });
})();
