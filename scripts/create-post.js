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
  console.log('7. tourism - Travel experiences, destinations, and adventures');
  console.log('8. none - No specific topic');
  
  const topicChoice = await question('\nSelect topic (1-8, default: 8): ');
  
  const topicMap = {
    '1': 'movies',
    '2': 'books', 
    '3': 'development',
    '4': 'writing',
    '5': 'personal',
    '6': 'reviews',
    '7': 'tourism',
    '8': null
  };
  
  const topic = topicMap[topicChoice] || null;
  
  // Hashtag generation
  console.log('\n🏷️  Hashtag Options:');
  console.log('1. Auto-generate from topic and tags');
  console.log('2. Manual entry');
  console.log('3. Skip hashtags');
  
  const hashtagChoice = await question('\nSelect hashtag option (1-3, default: 1): ');
  
  let hashtags = [];
  
  if (hashtagChoice === '1' || hashtagChoice === '') {
    // Auto-generate hashtags
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];
    
    // Topic-based hashtags
    const topicHashtags = {
      'movies': ['#movies', '#tv', '#entertainment', '#reviews'],
      'books': ['#books', '#reading', '#literature', '#reviews'],
      'development': ['#coding', '#programming', '#tech', '#development'],
      'writing': ['#writing', '#creativity', '#tips', '#process'],
      'personal': ['#personal', '#life', '#thoughts', '#experiences'],
      'reviews': ['#reviews', '#recommendations', '#opinions'],
      'tourism': ['#travel', '#tourism', '#adventures', '#destinations']
    };
    
    if (topic && topicHashtags[topic]) {
      hashtags.push(...topicHashtags[topic]);
    }
    
    // Add hashtags from tags
    tags.forEach(tag => {
      hashtags.push(`#${tag.toLowerCase()}`);
    });
    
    // Add common hashtags
    hashtags.push('#blog', '#thoughts');
    
    // Limit to 8 hashtags
    hashtags = hashtags.slice(0, 8);
    
    console.log(`\n✅ Auto-generated hashtags: ${hashtags.join(' ')}`);
    
  } else if (hashtagChoice === '2') {
    const hashtagsInput = await question('Hashtags (space-separated, e.g., #personal #thoughts #blog): ');
    hashtags = hashtagsInput ? hashtagsInput.split(' ').filter(tag => tag.startsWith('#')) : [];
  }
  
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
${hashtags.length > 0 ? `hashtags: [${hashtags.map(tag => `"${tag}"`).join(', ')}]` : ''}
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
    if (hashtags.length > 0) {
      console.log(`   5. Hashtags added: ${hashtags.join(' ')}`);
    }
  } catch (error) {
    console.error('❌ Error creating post:', error.message);
  }
  
  rl.close();
}

// Run the script
createPost().catch(console.error);
