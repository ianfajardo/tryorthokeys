import fs from 'fs';
import path from 'path';
import { getSortedPostsData } from '../lib/posts';

function toIsoDate(value, fallback) {
  if (!value) return fallback;

  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? fallback : date.toISOString();
}

function getLastModified(relativePath, fallback) {
  try {
    const fullPath = path.join(process.cwd(), relativePath);
    return fs.statSync(fullPath).mtime.toISOString();
  } catch (error) {
    return fallback;
  }
}

function generateSiteMap(posts) {
  const baseUrl = 'https://www.tryorthokeys.com';
  const generatedAt = new Date().toISOString();

  // Static pages (all important routes included for full sitemap coverage)
  const staticPages = [
    { page: '', source: 'pages/index.js' },
    { page: '/keyboards', source: 'pages/keyboards.js' },
    { page: '/keycaps', source: 'pages/keycaps.js' },
    { page: '/deals', source: 'pages/deals.js' },
    { page: '/configure', source: 'pages/configure.js' },
    { page: '/olkb', source: 'pages/olkb.js' },
    { page: '/id75', source: 'pages/id75.js' },
    { page: '/split', source: 'pages/split.js' },
    { page: '/kinesis', source: 'pages/kinesis.js' },
    { page: '/niu40', source: 'pages/niu40.js' },
    { page: '/koolertron', source: 'pages/koolertron.js' },
    { page: '/gizmo-engineering-gk6', source: 'pages/gizmo-engineering-gk6.js' },
    { page: '/kbdcraft', source: 'pages/kbdcraft.js' },
    { page: '/ymdk-air40', source: 'pages/ymdk-air40.js' },
    { page: '/mechdiy-59', source: 'pages/mechdiy-59.js' },
    { page: '/worklouder', source: 'pages/worklouder.js' },
    { page: '/jj40', source: 'pages/jj40.js' },
    { page: '/kprepublic-bm40', source: 'pages/kprepublic-bm40.js' },
    { page: '/kprepublic-cstc40', source: 'pages/kprepublic-cstc40.js' },
    { page: '/kprepublic-dna59', source: 'pages/kprepublic-dna59.js' },
    { page: '/ultimate-guide-to-ortholinear-keyboards', source: 'pages/ultimate-guide-to-ortholinear-keyboards.js' },
    { page: '/posts', source: 'pages/posts/index.js' },
    { page: '/links', source: 'pages/links.js' },
    { page: '/policies', source: 'pages/policies.js' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map(({ page, source }) => {
         const priority = page === '' ? '1.0' : page === '/keyboards' || page === '/posts' ? '0.9' : '0.8';
         const changefreq = page === '' ? 'daily' : page === '/posts' ? 'weekly' : 'monthly';
         return `
       <url>
           <loc>${baseUrl}${page}</loc>
           <lastmod>${getLastModified(source, generatedAt)}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
       </url>`;
       })
       .join('')}
     ${posts
       .filter(({ noindex }) => !noindex)
       .map(({ slug, date, modified }) => {
         const lastmod = toIsoDate(modified || date, generatedAt);
         return `
       <url>
           <loc>${baseUrl}/posts/${slug}</loc>
           <lastmod>${lastmod}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>`;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Get all posts with slug and date for correct lastmod
  const posts = getSortedPostsData();

  // Generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // Write the XML to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
