# Project: Ashley's portfolio site

Static portfolio site (plain HTML and CSS, no build step) hosted on GitHub Pages and served at a custom domain.

## Accounts and addresses
- GitHub username: ashleyastro (an earlier draft wrongly used "ashleystro"; ignore that)
- Repo: https://github.com/ashleyastro/ashleyastro.github.io
- Live URLs: https://gusandbrown.com (primary). https://ashleyastro.github.io and https://www.gusandbrown.com redirect to it.
- LinkedIn: https://www.linkedin.com/in/tashleybrown/ (no query string)
- Domain registrar: Namecheap. gusandbrown.com also handles email.

## Files
- `index.html`: single page with hero, About, Selected work (cards), Experience (timeline), Awards and recognition, Volunteer experience, Contact
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

## Content status
Site copy is aligned with the resumes (Oct 2026). The "Brand Strategy" resume is the source for the summary, hero, and About; dates, titles, and metrics match both versions. Timeline lists each role separately: Porch Group, Astro Pet Health, AWS and Amazon (two roles), Spredfast (two roles), Coca-Cola, and earlier agency and Microsoft roles. Work cards: The Ride Along, AWS startup go-to-market, Day One and About Amazon, Coca-Cola Journey. After Experience come Awards and recognition (five awards) and Volunteer experience (Victory Fund, Saving Great Animals), styled with the `.honors` grid in `style.css`.

## About the owner (for copy decisions)
- Senior marketing and content leader, 15 years of people leadership
- Head of Marketing, Inspection at Porch Group (2023 to present), team of nine, full marketing P&L
- Co-founder and CEO, Astro Pet Health (2021 to 2023)
- Amazon and AWS (2017 to 2021): Head of Startup Digital Marketing at AWS; Head of Owned Content Channels at Amazon (Day One, About Amazon, Out for Delivery, Sustainability at Amazon)
- Spredfast (2014 to 2017): VP Global Communications and Analyst Relations; earlier VP Social Strategy (team of 59, $9M P&L)
- Coca-Cola (2010 to 2014): Global Group Director, Digital Communications (Coca-Cola Journey)
- Site shows EU work authorization (Contact section). Do not publish the phone number.
- Do not mention the job search on the site (owner removed it)
- Targeting VP and Head of Marketing roles at AI and tech-forward companies
- Brand voice: knowledgeable, direct, wry

## Working preferences
- Never use em dashes in code comments, copy, or messages
- Concise, confident, professional tone
- Double check work for errors before presenting it
- Explain GitHub web steps plainly, since the owner often edits through the GitHub website
- After a change, confirm it deployed (Actions tab) and check the live site in a private window
