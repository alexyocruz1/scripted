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

🌍 Select language:
1. English (en)
2. Spanish (es)

✅ Language: English

Post title: My Awesome Post
Description (optional): A great post about awesome things
Tags (comma-separated, optional): astro, tutorial, awesome
Series (optional): Awesome Series
Featured post? (y/n, default: n): y
Reading time in minutes (optional): 8

🎭 Random author assigned: a Scripted Wizard 🧙‍♂️

✅ Post created successfully!
📁 File: /path/to/src/content/blog/en-my-awesome-post.mdx
🌐 Preview: http://localhost:4321/en/blog/en-my-awesome-post/

💡 Next steps:
   1. Edit the file to add your content
   2. Save to see live preview
   3. Set draft: true if not ready to publish
   4. View topic page: http://localhost:4321/en/topics/awesome/
   5. Hashtags added: #awesome #astro #tutorial #blog #thoughts
   6. Language: English
```

## 🔧 Adding More Scripts

To add more scripts:

1. Create your script in this directory
2. Add a script command to `package.json`
3. Update this README with usage instructions

## 🌍 Language Switching & Post Mappings

### Post Slug Mappings

When you create posts in both languages, you need to add them to the slug mapping system in `src/i18n/config.ts`. This enables proper language switching between corresponding posts.

#### How to Add Mappings

1. **Create your posts** in both languages using `npm run new-post`
2. **Note the generated filenames** (e.g., `en-my-post.mdx` and `es-mi-post.mdx`)
3. **Add to the mapping** in `src/i18n/config.ts`:

```typescript
export const postSlugMappings: Record<string, Record<string, string>> = {
  'en-welcome': { es: 'es-bienvenido' },
  'es-bienvenido': { en: 'en-welcome' },
  // Add your new mappings here:
  'en-my-post': { es: 'es-mi-post' },
  'es-mi-post': { en: 'en-my-post' },
};
```

#### Mapping Format

- **English to Spanish**: `'en-slug': { es: 'es-slug' }`
- **Spanish to English**: `'es-slug': { en: 'en-slug' }`

#### Benefits

- ✅ **No more 404 errors** when switching languages on blog posts
- ✅ **Seamless navigation** between language versions
- ✅ **Fallback to blog index** if no mapping exists
- ✅ **Automatic language detection** and routing

### Example Workflow

1. Create English post: `npm run new-post` → `en-movie-review.mdx`
2. Create Spanish post: `npm run new-post` → `es-resena-pelicula.mdx`
3. Add mapping:
   ```typescript
   'en-movie-review': { es: 'es-resena-pelicula' },
   'es-resena-pelicula': { en: 'en-movie-review' },
   ```
4. Users can now switch languages seamlessly on both posts!

## 💡 Tips

- The script automatically generates a slug from your title
- All optional fields can be skipped by pressing Enter
- The generated file includes a basic content structure
- You can always edit the frontmatter manually after creation
- **Always add post mappings** when creating bilingual content
- **Test language switching** after adding new mappings
