#!/usr/bin/env node

import { execSync } from 'child_process';

const BASE_URL = 'http://localhost:4321';

// Define all possible routes to test
const routes = [
  // Root and language-specific homepages
  { path: '/', name: 'Root Homepage (English)' },
  { path: '/en/', name: 'English Homepage' },
  { path: '/es/', name: 'Spanish Homepage' },
  
  // Blog routes
  { path: '/blog/', name: 'Root Blog Index (Redirect)' },
  { path: '/en/blog/', name: 'English Blog Index' },
  { path: '/es/blog/', name: 'Spanish Blog Index' },
  
  // Individual blog posts
  { path: '/blog/en-welcome/', name: 'Root English Post (Redirect)' },
  { path: '/blog/es-bienvenido/', name: 'Root Spanish Post (Redirect)' },
  { path: '/en/blog/en-welcome/', name: 'English Post' },
  { path: '/es/blog/es-bienvenido/', name: 'Spanish Post' },
  
  // Topics routes
  { path: '/topics/', name: 'Topics Index' },
  { path: '/en/topics/', name: 'English Topics Index' },
  { path: '/es/topics/', name: 'Spanish Topics Index' },
  { path: '/topics/personal/', name: 'Personal Topic' },
  { path: '/topics/movies/', name: 'Movies Topic' },
  { path: '/topics/books/', name: 'Books Topic' },
  { path: '/topics/development/', name: 'Development Topic' },
  { path: '/topics/writing/', name: 'Writing Topic' },
  { path: '/topics/reviews/', name: 'Reviews Topic' },
  { path: '/topics/tourism/', name: 'Tourism Topic' },
  
  // Newsletter routes
  { path: '/newsletter/', name: 'Newsletter Page' },
  { path: '/en/newsletter/', name: 'English Newsletter Page' },
  { path: '/es/newsletter/', name: 'Spanish Newsletter Page' },
  
  // RSS and sitemap
  { path: '/rss.xml', name: 'RSS Feed' },
  { path: '/sitemap.xml', name: 'Sitemap' },
  { path: '/sitemap-index.xml', name: 'Sitemap Index' },
];

// Routes that should return 404 (invalid routes)
const invalidRoutes = [
  { path: '/en/rss.xml', name: 'English RSS (Should 404)' },
  { path: '/es/rss.xml', name: 'Spanish RSS (Should 404)' },
  { path: '/en/blog/es-bienvenido/', name: 'English URL with Spanish slug (Should 404)' },
  { path: '/es/blog/en-welcome/', name: 'Spanish URL with English slug (Should 404)' },
  { path: '/blog/nonexistent-post/', name: 'Non-existent post (Should 404)' },
  { path: '/en/blog/nonexistent-post/', name: 'Non-existent English post (Should 404)' },
  { path: '/es/blog/nonexistent-post/', name: 'Non-existent Spanish post (Should 404)' },
];

function testRoute(path, expectedStatus = 200) {
  try {
    const result = execSync(`curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${path}"`, { encoding: 'utf8' });
    const status = parseInt(result.trim());
    const success = status === expectedStatus;
    
    return {
      path,
      status,
      expectedStatus,
      success,
      message: success ? '✅ PASS' : `❌ FAIL (Expected ${expectedStatus}, got ${status})`
    };
  } catch (error) {
    return {
      path,
      status: 'ERROR',
      expectedStatus,
      success: false,
      message: '❌ ERROR (Connection failed)'
    };
  }
}

function testLanguageSwitching() {
  console.log('\n🌍 Testing Language Switching...');
  
  const languageSwitchingTests = [
    {
      from: '/es/blog/es-bienvenido/',
      to: '/en/blog/en-welcome/',
      name: 'Spanish Post → English Post'
    },
    {
      from: '/en/blog/en-welcome/',
      to: '/es/blog/es-bienvenido/',
      name: 'English Post → Spanish Post'
    }
  ];
  
  languageSwitchingTests.forEach(test => {
    try {
      // Test that the "from" URL exists
      const fromStatus = execSync(`curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${test.from}"`, { encoding: 'utf8' });
      const toStatus = execSync(`curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${test.to}"`, { encoding: 'utf8' });
      
      const fromSuccess = parseInt(fromStatus.trim()) === 200;
      const toSuccess = parseInt(toStatus.trim()) === 200;
      
      console.log(`  ${test.name}: ${fromSuccess && toSuccess ? '✅ PASS' : '❌ FAIL'}`);
      if (!fromSuccess) console.log(`    - From URL (${test.from}) returned ${fromStatus.trim()}`);
      if (!toSuccess) console.log(`    - To URL (${test.to}) returned ${toStatus.trim()}`);
    } catch (error) {
      console.log(`  ${test.name}: ❌ ERROR (Connection failed)`);
    }
  });
}

function testNavigationLinks() {
  console.log('\n🧭 Testing Navigation Links...');
  
  const navigationTests = [
    {
      page: '/es/blog/es-bienvenido/',
      expectedLinks: ['/es/blog/', '/es/topics/', '/es/newsletter/', '/rss.xml'],
      name: 'Spanish Post Navigation'
    },
    {
      page: '/en/blog/en-welcome/',
      expectedLinks: ['/en/blog/', '/en/topics/', '/en/newsletter/', '/rss.xml'],
      name: 'English Post Navigation'
    }
  ];
  
  navigationTests.forEach(test => {
    try {
      const html = execSync(`curl -s "${BASE_URL}${test.page}"`, { encoding: 'utf8' });
      const missingLinks = test.expectedLinks.filter(link => !html.includes(`href="${link}"`));
      
      if (missingLinks.length === 0) {
        console.log(`  ${test.name}: ✅ PASS`);
      } else {
        console.log(`  ${test.name}: ❌ FAIL`);
        console.log(`    - Missing links: ${missingLinks.join(', ')}`);
      }
    } catch (error) {
      console.log(`  ${test.name}: ❌ ERROR (Connection failed)`);
    }
  });
}

function main() {
  console.log('🚀 Starting Comprehensive Route Testing...\n');
  
  // Test valid routes
  console.log('✅ Testing Valid Routes:');
  let validPassed = 0;
  let validTotal = routes.length;
  
  routes.forEach(route => {
    const result = testRoute(route.path);
    console.log(`  ${route.name}: ${result.message}`);
    if (result.success) validPassed++;
  });
  
  // Test invalid routes (should return 404)
  console.log('\n❌ Testing Invalid Routes (Should 404):');
  let invalidPassed = 0;
  let invalidTotal = invalidRoutes.length;
  
  invalidRoutes.forEach(route => {
    const result = testRoute(route.path, 404);
    console.log(`  ${route.name}: ${result.message}`);
    if (result.success) invalidPassed++;
  });
  
  // Test language switching
  testLanguageSwitching();
  
  // Test navigation links
  testNavigationLinks();
  
  // Summary
  console.log('\n📊 Test Summary:');
  console.log(`  Valid Routes: ${validPassed}/${validTotal} passed`);
  console.log(`  Invalid Routes: ${invalidPassed}/${invalidTotal} correctly return 404`);
  console.log(`  Total Success Rate: ${((validPassed + invalidPassed) / (validTotal + invalidTotal) * 100).toFixed(1)}%`);
  
  if (validPassed === validTotal && invalidPassed === invalidTotal) {
    console.log('\n🎉 All tests passed! Your routing is working perfectly!');
  } else {
    console.log('\n⚠️  Some tests failed. Check the output above for details.');
  }
}

// Run the tests
main();
