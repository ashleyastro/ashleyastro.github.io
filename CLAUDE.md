# Project: Ashley's portfolio site

Static portfolio site (plain HTML and CSS, no build step) hosted on GitHub Pages and served at a custom domain.

## Accounts and addresses
- GitHub username: ashleyastro (an earlier draft wrongly used "ashleystro"; ignore that)
- Repo: https://github.com/ashleyastro/ashleyastro.github.io
- Live URLs: https://gusandbrown.com (primary). https://ashleyastro.github.io and https://www.gusandbrown.com redirect to it.
- LinkedIn: https://www.linkedin.com/in/tashleybrown/ (no query string)
- Domain registrar: Namecheap. gusandbrown.com also handles email.

## Files
- `index.html`: single page with hero, About, Selected work (cards), Experience (timeline), Contact
- `style.css`: all styling, with design tokens under `:root`, automatic dark mode via `prefers-color-scheme`, responsive under 640px
- `CNAME`: contains `gusandbrown.com`. Do not delete or edit it.
- `_config.yml`: excludes `CLAUDE.md` from the published site. Keep it, so these notes never go public.
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

## Pending edits
Done: contact links, real email (`ashley@gusandbrown.com`), full name in header, title, and footer.

Still open:
1. Fill real dates and exact titles in the Experience timeline (currently "Present" and "Earlier").
2. Add measurable results to the Selected work cards.

## About the owner (for copy decisions)
- Senior marketing and content leader, 15 years of people leadership
- Runs marketing for the Inspection business at Porch Group and built that team
- Previously Amazon (owned content and channels: About Amazon, Day One blog ecosystem, company email program), Spredfast (VP of Communications, org of nearly 60), and Coca-Cola
- Targeting VP and Head of Marketing roles at AI and tech-forward companies
- Brand voice: knowledgeable, direct, wry

## Working preferences
- Never use em dashes in code comments, copy, or messages
- Concise, confident, professional tone
- Double check work for errors before presenting it
- Explain GitHub web steps plainly, since the owner often edits through the GitHub website
- After a change, confirm it deployed (Actions tab) and check the live site in a private window
