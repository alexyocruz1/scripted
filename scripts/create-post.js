#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function createPost() {
  console.log('📝 Create New Blog Post\n');
  
  // Get post details
  const title = await question('Post title: ');
  const description = await question('Description (optional): ');
  const author = await question('Author (optional): ');
  const tagsInput = await question('Tags (comma-separated, optional): ');
  const series = await question('Series (optional): ');
  const featured = await question('Featured post? (y/n, default: n): ');
  const readingTime = await question('Reading time in minutes (optional): ');
  
  // Topic selection
  console.log('\n📂 Available topics:');
  console.log('1. movies - Movie reviews, TV show thoughts, and entertainment');
  console.log('2. books - Book reviews, reading thoughts, and literature');
  console.log('3. development - Coding, programming, and technical stuff');
  console.log('4. writing - Writing process, tips, and creative thoughts');
  console.log('5. personal - Personal thoughts, experiences, and life');
  console.log('6. reviews - General reviews and recommendations');
  console.log('7. none - No specific topic');
  
  const topicChoice = await question('\nSelect topic (1-7, default: 7): ');
  
  const topicMap = {
    '1': 'movies',
    '2': 'books', 
    '3': 'development',
    '4': 'writing',
    '5': 'personal',
    '6': 'reviews',
    '7': null
  };
  
  const topic = topicMap[topicChoice] || null;
  
  // Process inputs
  const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];
  const isFeatured = featured.toLowerCase() === 'y' || featured.toLowerCase() === 'yes';
  const readingTimeNum = readingTime ? parseInt(readingTime) : null;
  
  // Generate filename
  const filename = slugify(title) + '.mdx';
  const filepath = path.join(__dirname, '..', 'src', 'content', 'blog', filename);
  
  // Generate frontmatter
  const today = new Date().toISOString().split('T')[0];
  
  const frontmatter = `---
title: "${title}"
${description ? `description: "${description}"` : ''}
pubDate: ${today}
draft: false
${tags.length > 0 ? `tags: [${tags.map(tag => `"${tag}"`).join(', ')}]` : ''}
${topic ? `topic: "${topic}"` : ''}
${author ? `author: "${author}"` : ''}
${isFeatured ? 'featured: true' : ''}
${series ? `series: "${series}"` : ''}
${readingTimeNum ? `readingTime: ${readingTimeNum}` : ''}
---

# ${title}

${description ? description : 'Your content here...'}

## Introduction

Start your post here...

## Main Content

Add your main content sections here...

## Conclusion

Wrap up your post here...

---

*Happy writing! 🚀*
`;
  
  // Write file
  try {
    fs.writeFileSync(filepath, frontmatter);
    console.log(`\n✅ Post created successfully!`);
    console.log(`📁 File: ${filepath}`);
    console.log(`🌐 Preview: http://localhost:4321/blog/${slugify(title)}/`);
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Edit the file to add your content`);
    console.log(`   2. Save to see live preview`);
    console.log(`   3. Set draft: true if not ready to publish`);
    if (topic) {
      console.log(`   4. View topic page: http://localhost:4321/topics/${topic}/`);
    }
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
  }
  
  rl.close();
}

// Run the script
createPost().catch(console.error);
