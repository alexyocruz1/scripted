#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function validateSitemap() {
  console.log('🔍 Validating Sitemap...\n');
  
  // Check if sitemap files exist
  const distPath = path.join(__dirname, '..', 'dist');
  const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');
  const sitemap0Path = path.join(distPath, 'sitemap-0.xml');
  const robotsPath = path.join(distPath, 'robots.txt');
  
  console.log('📁 Checking file existence:');
  console.log(`   sitemap-index.xml: ${fs.existsSync(sitemapIndexPath) ? '✅' : '❌'}`);
  console.log(`   sitemap-0.xml: ${fs.existsSync(sitemap0Path) ? '✅' : '❌'}`);
  console.log(`   robots.txt: ${fs.existsSync(robotsPath) ? '✅' : '❌'}`);
  
  // Check robots.txt content
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    console.log('\n📄 robots.txt content:');
    console.log(robotsContent);
    
    if (robotsContent.includes('Sitemap:')) {
      console.log('✅ Sitemap directive found in robots.txt');
    } else {
      console.log('❌ Sitemap directive missing from robots.txt');
    }
  }
  
  // Check sitemap content
  if (fs.existsSync(sitemapIndexPath)) {
    const sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
    console.log('\n📄 sitemap-index.xml content:');
    console.log(sitemapIndexContent);
    
    // Basic XML validation
    if (sitemapIndexContent.includes('<?xml') && sitemapIndexContent.includes('sitemapindex')) {
      console.log('✅ sitemap-index.xml has valid XML structure');
    } else {
      console.log('❌ sitemap-index.xml has invalid XML structure');
    }
  }
  
  if (fs.existsSync(sitemap0Path)) {
    const sitemap0Content = fs.readFileSync(sitemap0Path, 'utf8');
    console.log('\n📄 sitemap-0.xml content (first 500 chars):');
    console.log(sitemap0Content.substring(0, 500) + '...');
    
    // Count URLs
    const urlCount = (sitemap0Content.match(/<url>/g) || []).length;
    console.log(`✅ sitemap-0.xml contains ${urlCount} URLs`);
    
    if (urlCount > 50000) {
      console.log('⚠️  Warning: More than 50,000 URLs (Google limit)');
    }
  }
  
  console.log('\n🔗 URLs to test:');
  console.log('   https://scripted.qzz.io/sitemap.xml');
  console.log('   https://scripted.qzz.io/sitemap-index.xml');
  console.log('   https://scripted.qzz.io/robots.txt');
  
  console.log('\n💡 Next steps:');
  console.log('   1. Build the site: npm run build');
  console.log('   2. Deploy to Cloudflare Pages');
  console.log('   3. Test URLs in browser');
  console.log('   4. Submit to Google Search Console');
}

validateSitemap();
