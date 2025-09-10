import { getAllPostIds } from '../lib/posts';

function generateSiteMap(posts) {
  const baseUrl = 'https://tryorthokeys.com';
  
  // Static pages
  const staticPages = [
    '',
    '/keyboards',
    '/keycaps',
    '/deals',
    '/configure',
    '/olkb',
    '/id75',
    '/split',
    '/kinesis',
    '/niu40',
    '/koolertron',
    '/gizmo-engineering-gk6',
    '/kbdcraft',
    '/ymdk-air40',
    '/mechdiy-59',
    '/ultimate-guide-to-ortholinear-keyboards',
    '/posts'
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map((page) => {
         const priority = page === '' ? '1.0' : page === '/keyboards' || page === '/posts' ? '0.9' : '0.8';
         const changefreq = page === '' ? 'daily' : page === '/posts' ? 'weekly' : 'monthly';
         return `
       <url>
           <loc>${baseUrl}${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
       </url>`;
       })
       .join('')}
     ${posts
       .map(({ slug, date }) => {
         return `
       <url>
           <loc>${baseUrl}/posts/${slug}</loc>
           <lastmod>${date ? (date instanceof Date ? date.toISOString() : new Date(date).toISOString()) : new Date().toISOString()}</lastmod>
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
  // Get all posts
  const posts = getAllPostIds();
  
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
