# Astro Blog Starter (MDX + Tailwind + Pagefind + RSS)

Zero-cost stack:
- **Hosting**: Cloudflare Pages (free)
- **Search**: Pagefind (static, free)
- **Analytics**: Cloudflare Web Analytics (free)
- **Comments**: giscus (free, uses GitHub Discussions)
- **Newsletter**: embed Substack/Buttondown/etc. (free tiers)

## Quickstart

```bash
# 1) Install deps
npm i

# 2) Run dev
npm run dev

# 3) Build & generate search index
npm run build
# (postbuild runs `pagefind --source dist`)

# 4) Deploy: Connect repo to Cloudflare Pages.
#    Build command: npm run build
#    Output dir: dist
```

### Configure
- Update `site` in `astro.config.mjs` (needed for sitemap & RSS).
- Replace analytics token in `Base.astro` (Cloudflare Web Analytics).
- Configure giscus at `src/components/Giscus.astro`.
- Replace `example.com` in `public/robots.txt`.
- Edit styles in `src/styles/global.css`.

### Content
Create posts in `src/content/blog/*.mdx` with frontmatter:
```yaml
---
title: My post
description: Optional summary
pubDate: 2025-08-20
draft: false
tags: [astro, book]
---
```

Happy shipping!
