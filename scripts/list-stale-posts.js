#!/usr/bin/env node
/**
 * Lists blog posts older than 18 months for content refresh prioritization.
 * Outputs date, modified (if any), and age in months.
 * Run: node scripts/list-stale-posts.js
 */
const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "..", "posts");
const STALE_MONTHS = 18;

function parseDate(val) {
  if (!val) return null;
  const d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
}

function monthsAgo(date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
}

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
const posts = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) continue;

  const front = match[1];
  const get = (key) => {
    const m = front.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    return m ? m[1].trim().replace(/^["']|["']$/g, "") : null;
  };

  const dateStr = get("date");
  const modifiedStr = get("modified");
  const date = parseDate(dateStr);
  const modified = parseDate(modifiedStr);
  const slug = file.replace(/\.md$/, "");

  if (!date) continue;

  const ageMonths = monthsAgo(date);
  if (ageMonths >= STALE_MONTHS) {
    posts.push({
      slug,
      date: dateStr,
      modified: modifiedStr || null,
      ageMonths,
    });
  }
}

posts.sort((a, b) => b.ageMonths - a.ageMonths);

console.log(`Posts older than ${STALE_MONTHS} months (${posts.length} total):\n`);
console.log("Slug".padEnd(55) + "Date".padEnd(14) + "Modified".padEnd(14) + "Age");
console.log("-".repeat(90));

for (const p of posts) {
  const mod = p.modified ? p.modified.split("T")[0] : "—";
  const dateShort = (p.date || "").split("T")[0].slice(0, 10);
  console.log(
    p.slug.slice(0, 54).padEnd(55) +
      dateShort.padEnd(14) +
      mod.padEnd(14) +
      `${p.ageMonths}mo`
  );
}
