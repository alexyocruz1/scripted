# 🛠️ Scripts Directory

This directory contains helpful scripts for managing your Scripted blog.

## 📝 create-post.js

An interactive CLI tool to create new blog posts with proper frontmatter.

### Usage

```bash
npm run new-post
```

### What it does

1. **Prompts for post details**:
   - Title
   - Description
   - Author
   - Tags (comma-separated)
   - Series
   - Featured status
   - Reading time

2. **Generates proper frontmatter** with today's date

3. **Creates the file** in `src/content/blog/` with kebab-case filename

4. **Provides next steps** including preview URL

### Example Output

```
📝 Create New Blog Post

Post title: My Awesome Post
Description (optional): A great post about awesome things
Author (optional): Anonymous
Tags (comma-separated, optional): astro, tutorial, awesome
Series (optional): Awesome Series
Featured post? (y/n, default: n): y
Reading time in minutes (optional): 8

✅ Post created successfully!
📁 File: /path/to/src/content/blog/my-awesome-post.mdx
🌐 Preview: http://localhost:4321/blog/my-awesome-post/

💡 Next steps:
   1. Edit the file to add your content
   2. Save to see live preview
   3. Set draft: true if not ready to publish
```

## 🔧 Adding More Scripts

To add more scripts:

1. Create your script in this directory
2. Add a script command to `package.json`
3. Update this README with usage instructions

## 💡 Tips

- The script automatically generates a slug from your title
- All optional fields can be skipped by pressing Enter
- The generated file includes a basic content structure
- You can always edit the frontmatter manually after creation
