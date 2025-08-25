# 🚀 Scripted - Astro Blog

A modern, fast, and free blog built with Astro, MDX, and Tailwind CSS. Designed for authors, developers, and content creators who want a professional blog without ongoing costs.

## ✨ Features

- **⚡ Lightning Fast** - Static site generation with Astro
- **📝 MDX Support** - Write content with Markdown + JSX
- **🎨 Modern Design** - Tailwind CSS v4 with custom styling
- **🔍 Instant Search** - Pagefind static search (no server required)
- **💬 Comments** - Giscus integration with GitHub Discussions
- **📊 Analytics** - Cloudflare Web Analytics (privacy-first)
- **📧 Newsletter** - Easy integration with Substack/Buttondown
- **📱 Responsive** - Mobile-first design
- **🎯 SEO Optimized** - Sitemap, RSS feeds, and meta tags
- **💰 Always Free** - Zero ongoing costs

## 🚀 Quick Start

### Prerequisites
- Node.js LTS (v18 or higher)
- npm, yarn, or pnpm
- GitHub account (for comments)
- Cloudflare account (for hosting & analytics)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd scripted

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
scripted/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   ├── content/
│   │   └── blog/          # MDX blog posts
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   └── styles/            # Global styles
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 📝 Writing Content

### Creating a New Post

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
pubDate: 2025-01-15
draft: false
tags: [astro, blog, tutorial]
---
```

3. Write your content in MDX below the frontmatter
4. Use `draft: true` to hide posts from the public index

### MDX Features

- **Markdown** - All standard Markdown syntax
- **JSX Components** - Embed interactive components
- **Code Highlighting** - Automatic syntax highlighting
- **Images** - Optimized image handling
- **Math** - LaTeX math expressions (if configured)

## ⚙️ Configuration

### Site Settings

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: "https://yourdomain.com", // Your production URL
  // ... other config
});
```

### Comments (Giscus)

1. Go to [giscus.app](https://giscus.app)
2. Select your repository
3. Copy the configuration
4. Update `src/components/Giscus.astro`

### Analytics

1. Get your Cloudflare Web Analytics token
2. Uncomment and update the analytics script in `src/layouts/Base.astro`

### Newsletter

Replace the placeholder in `src/pages/newsletter/index.astro` with your provider's embed code.

## 🎨 Customization

### Styling

- **Global Styles**: Edit `src/styles/global.css`
- **Tailwind Config**: Customize in `tailwind.config.js` (if needed)
- **Components**: Modify components in `src/components/`
- **Layouts**: Update `src/layouts/Base.astro`

### Theme

The blog uses a clean, modern design with:
- **Colors**: Slate gray palette with black accents
- **Typography**: System fonts with good readability
- **Spacing**: Consistent 4px grid system
- **Components**: Minimal, focused design

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Node.js version**: 18 (or higher)
4. Deploy!

### Other Platforms

The site is static and can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript, optimized CSS
- **Loading Speed**: < 2 seconds on 3G

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run clean        # Clean build artifacts
```

### Development Workflow

1. **Write**: Create/edit MDX files in `src/content/blog/`
2. **Preview**: Use `npm run dev` for live preview
3. **Build**: Run `npm run build` to generate static files
4. **Deploy**: Push to GitHub for automatic deployment

## 🎯 SEO Features

- **Meta Tags**: Automatic title, description, and Open Graph tags
- **Sitemap**: Auto-generated XML sitemap
- **RSS Feed**: Available at `/rss.xml`
- **Structured Data**: JSON-LD schema markup
- **Social Cards**: Twitter and Open Graph image support
- **Canonical URLs**: Proper canonical link handling

## 💰 Cost Breakdown

### Always Free
- ✅ **Hosting**: Cloudflare Pages (free tier)
- ✅ **Search**: Pagefind (static, no server)
- ✅ **Comments**: Giscus (free on public repos)
- ✅ **Analytics**: Cloudflare Web Analytics
- ✅ **Newsletter**: External free platform embed
- ✅ **Custom Domain**: Optional (free subdomain included)

### External Costs (Optional)
- 💡 **Custom Domain**: ~$10-15/year
- 💡 **Book Sales**: Gumroad/Lemon Squeezy fees
- 💡 **Newsletter**: Paid tiers for advanced features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) - The web framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Pagefind](https://pagefind.app) - Static search
- [Giscus](https://giscus.app) - Comments system
- [Cloudflare](https://cloudflare.com) - Hosting and analytics

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/scripted/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/scripted/discussions)
- **Email**: your-email@example.com

---

Built with ❤️ using [Astro](https://astro.build)
