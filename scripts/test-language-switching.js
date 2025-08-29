#!/usr/bin/env node

import { execSync } from 'child_process';

const BASE_URL = 'http://localhost:4321';

// Test cases for language switching behavior
const languageSwitchingTests = [
  {
    from: '/en/blog/',
    expectedTo: '/es/blog/',
    name: 'English Blog → Spanish Blog (should stay on blog)'
  },
  {
    from: '/es/blog/',
    expectedTo: '/en/blog/',
    name: 'Spanish Blog → English Blog (should stay on blog)'
  },
  {
    from: '/en/topics/',
    expectedTo: '/es/topics/',
    name: 'English Topics → Spanish Topics (should stay on topics)'
  },
  {
    from: '/es/topics/',
    expectedTo: '/en/topics/',
    name: 'Spanish Topics → English Topics (should stay on topics)'
  },
  {
    from: '/en/newsletter/',
    expectedTo: '/es/newsletter/',
    name: 'English Newsletter → Spanish Newsletter (should stay on newsletter)'
  },
  {
    from: '/es/newsletter/',
    expectedTo: '/en/newsletter/',
    name: 'Spanish Newsletter → English Newsletter (should stay on newsletter)'
  },
  {
    from: '/',
    expectedTo: '/es/',
    name: 'Root → Spanish Homepage (should go to Spanish homepage)'
  },
  {
    from: '/en/',
    expectedTo: '/es/',
    name: 'English Homepage → Spanish Homepage (should go to Spanish homepage)'
  },
  {
    from: '/es/',
    expectedTo: '/',
    name: 'Spanish Homepage → Root (should go to root)'
  }
];

function testLanguageSwitching() {
  console.log('🌍 Testing Language Switching Behavior...\n');
  
  let passed = 0;
  let total = languageSwitchingTests.length;
  
  languageSwitchingTests.forEach(test => {
    try {
      const html = execSync(`curl -s "${BASE_URL}${test.from}"`, { encoding: 'utf8' });
      
      // Look for the language switcher link that should point to the expected URL
      const hasExpectedLink = html.includes(`href="${test.expectedTo}"`);
      
      if (hasExpectedLink) {
        console.log(`  ✅ ${test.name}`);
        passed++;
      } else {
        console.log(`  ❌ ${test.name}`);
        console.log(`     Expected: ${test.expectedTo}`);
        console.log(`     Found links: ${html.match(/href="[^"]*"/g)?.filter(h => h.includes('en') || h.includes('es')).slice(0, 3).join(', ') || 'None'}`);
      }
    } catch (error) {
      console.log(`  ❌ ${test.name} - ERROR: ${error.message}`);
    }
  });
  
  console.log(`\n📊 Language Switching Results: ${passed}/${total} passed`);
  
  if (passed === total) {
    console.log('🎉 All language switching tests passed! Behavior is now consistent and user-friendly!');
  } else {
    console.log('⚠️  Some language switching tests failed. Check the output above.');
  }
}

testLanguageSwitching();
