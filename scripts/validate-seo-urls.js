#!/usr/bin/env node
/**
 * SEO URL validation script for tryorthokeys.com
 * Validates that all canonical URLs use https://www.tryorthokeys.com
 * Run: node scripts/validate-seo-urls.js
 */
const fs = require('fs');
const path = require('path');

const CANONICAL_BASE = 'https://www.tryorthokeys.com';
const NON_CANONICAL_PATTERNS = [
  /https?:\/\/tryorthokeys\.com(?![a-z0-9.-]*www)/g,  // non-www
  /https:\/\/tryorthokeys\.com\//g,
  /http:\/\/www\.tryorthokeys\.com/g,
  /http:\/\/tryorthokeys\.com/g,
];

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.json', '.txt', '.toml'];
const IGNORE_DIRS = ['node_modules', '.next', '.git', 'scripts', 'out'];

function getAllFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!IGNORE_DIRS.includes(e.name)) getAllFiles(full, files);
    } else if (EXTENSIONS.some((ext) => e.name.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

function checkFile(filePath, root) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];
  const relPath = path.relative(root, filePath);

  lines.forEach((line, i) => {
    if (line.includes('tryorthokeys.com') && !line.includes(CANONICAL_BASE)) {
      // netlify.toml: "from" redirect patterns are intentionally non-canonical (source URLs to redirect)
      if (relPath === 'netlify.toml' && (line.includes('from =') || line.includes('from='))) {
        return;
      }
      if (line.match(/https?:\/\/tryorthokeys\.com(?!\.)/) && !line.includes('www.')) {
        issues.push({ line: i + 1, text: line.trim(), rule: 'non-www URL' });
      }
      if (line.includes('http://') && line.includes('tryorthokeys.com') && !relPath.includes('netlify')) {
        issues.push({ line: i + 1, text: line.trim(), rule: 'http (use https)' });
      }
    }
  });

  return issues;
}

const root = path.join(__dirname, '..');
const files = getAllFiles(root);
let hasErrors = false;

console.log('SEO URL validation - canonical base:', CANONICAL_BASE);
console.log('Checking', files.length, 'files...\n');

files.forEach((f) => {
  const rel = path.relative(root, f);
  const issues = checkFile(f, root);
  if (issues.length) {
    hasErrors = true;
    console.log(`\x1b[31m${rel}\x1b[0m`);
    issues.forEach(({ line, text, rule }) => {
      console.log(`  L${line} [${rule}]: ${text.substring(0, 80)}${text.length > 80 ? '...' : ''}`);
    });
  }
});

if (!hasErrors) {
  console.log('\n\x1b[32m✓ All URLs use canonical base\x1b[0m');
} else {
  console.log('\n\x1b[31m✗ Found non-canonical URLs\x1b[0m');
  process.exit(1);
}
