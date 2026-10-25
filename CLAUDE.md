# Project: Ashley's portfolio site

Static portfolio site (plain HTML and CSS, no build step) hosted on GitHub Pages and served at a custom domain.

## Accounts and addresses
- GitHub username: ashleyastro (an earlier draft wrongly used "ashleystro"; ignore that)
- Repo: https://github.com/ashleyastro/ashleyastro.github.io
- Live URLs: https://gusandbrown.com (primary). https://ashleyastro.github.io and https://www.gusandbrown.com redirect to it.
- LinkedIn: https://www.linkedin.com/in/tashleybrown/ (no query string)
- Domain registrar: Namecheap. gusandbrown.com also handles email.

## Files
- `index.html`: home page with hero, About, Selected work (cards), Experience (timeline), Awards and recognition, Volunteer experience, Good to know, Contact
- `speaking.html`: Speaking page (headshot, intro naming SXSW, Coca-Cola, Target, Walmart; four topic cards under "What Ashley speaks about"; booking call to action). Written in the third person, using the name instead of pronouns.
- Both pages share the same header (About, Work, Experience, Speaking, Contact) and footer (links to every section, Speaking, and the resume). When adding a section or page, update the header and footer on both pages.
- `site.js`: shared script for the footer year and the consent banner, loaded by both pages.
- `style.css`: all styling, with design tokens under `:root`, automatic dark mode via `prefers-color-scheme`, responsive under 640px
- `CNAME`: contains `gusandbrown.com`. Do not delete or edit it.
- `_config.yml`: excludes `CLAUDE.md` from the published site. Keep it, so these notes never go public.
- Google Analytics 4 tag (ID G-H9D0B34XHW) sits immediately after `<head>` in `index.html` and `speaking.html`. Keep it first in the head of every page.
- Consent: Google Consent Mode v2 in that head script. Ads storage denied; analytics on by default for everyone and turned off only when a visitor declines (owner's choice, Oct 2026). Region-specific defaults were tried and dropped because Google's region matching misfired in testing. The choice is saved in localStorage (`ga-consent`). The banner (`#consent`) shows until a choice is made; the footer "Cookie settings" link reopens it. Declining also clears `_ga` cookies.
- `images/`: card thumbnails and `headshot.jpg`. `images/logos/`: award logos (Ad Age, PRWeek, Ragan PR Daily as trimmed SVGs from each publisher's site; PR Daily recolored to black). The Holmes Report (now PRovoke Media) has no logo and shows a text label in the same white chip.
- `Ashley_Brown_Resume.pdf`: public resume, linked from Let's talk. Made from the July 2026 resume with the phone number removed and languages (French Intermediate, Italian Beginner) changed to match the site. To update it, replace this file with a new PDF that also has no phone number.
- `CLAUDE.md`: these notes. Not published.

## Design
- Headlines and header brand: Inter (500, 600). Body: Merriweather (400, 600, 700, italic 400). Loaded from Google Fonts in `index.html`.
- Background `--bg: #FFFFFF`. Text `--text: #1c1b1a`.
- Accent `--accent: #10B981` for button fills and hover borders. Button text uses `--accent-ink: #1c1b1a` because white on #10B981 fails contrast.
- Small green text (eyebrow, card tags, timeline role, link hovers) uses `--accent-text: #047857` for readable contrast.
- Cards use `--card: #F3F4F6` with a transparent border that turns accent on hover.
- Dark mode stays on, with matching dark values for every token.

## DNS and hosting status
Done and verified: A records and `www` CNAME point to GitHub Pages, the custom domain is set, HTTPS is enforced (http redirects to https), and email records were kept.

## Content status
Site copy is aligned with the resumes (Oct 2026). The "Brand Strategy" resume is the source for the summary, hero, and About; dates, titles, and metrics match both versions. Timeline lists each role separately: Porch Group, Astro Pet Health, AWS and Amazon (two roles), Spredfast (two roles), Coca-Cola, and earlier agency and Microsoft roles. Work cards (two rows of four, each with a thumbnail and a green "See more" link, except AWS which has no link): The Ride Along, AWS startup go-to-market, Day One and About Amazon, Coca-Cola Journey (links to the 2012 New York Times story); then Sustainability at Amazon, Palmtech rebrand, Home Inspector Pro rebrand, Inspector Services Group rebrand. Thumbnails are 800x500 JPGs in `images/` (homepage screenshots taken Oct 2026, About Amazon uses its official preview image). AWS and Coca-Cola Journey use colored text tiles because no usable image was available. After Experience come Awards and recognition, Volunteer experience, and Good to know (languages, EU work authorization, lived in France and South Africa, travel to every inhabited continent and all 50 states plus D.C. and Puerto Rico, building model ships and planes). Awards and recognition (five awards) and Volunteer experience (Victory Fund, Saving Great Animals), styled as a two-column list (organization left, title right) with `.honors` in `style.css`. No cards, no bullets.

## About the owner (for copy decisions)
- Senior marketing and content leader, 15 years of people leadership
- Head of Marketing, Inspection at Porch Group (2023 to present), team of nine, full marketing P&L
- Co-founder and CEO, Astro Pet Health (2021 to 2023)
- Amazon and AWS (2017 to 2021): Head of Startup Digital Marketing at AWS; Head of Owned Content Channels at Amazon (Day One, About Amazon, Out for Delivery, Sustainability at Amazon)
- Spredfast (2014 to 2017): VP Global Communications and Analyst Relations; earlier VP Social Strategy (team of 59, $9M P&L)
- Coca-Cola (2010 to 2014): Global Group Director, Digital Communications (Coca-Cola Journey)
- Site shows EU work authorization in the "Good to know" section. Do not publish the phone number.
- Languages on the site (owner's wording): French intermediate, German conversational, Italian beginner.
- Do not mention the job search on the site (owner removed it)
- Targeting VP and Head of Marketing roles at AI and tech-forward companies
- Brand voice: knowledgeable, direct, wry

## Working preferences
- Never use em dashes in code comments, copy, or messages
- Concise, confident, professional tone
- Double check work for errors before presenting it
- Explain GitHub web steps plainly, since the owner often edits through the GitHub website
- After a change, confirm it deployed (Actions tab) and check the live site in a private window
