import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import yaml from "js-yaml";

// Function to convert markdown tables to HTML
function convertMarkdownTablesToHtml(content) {
  // Regex to match markdown tables
  const tableRegex = /(\|[^\n]*\|[^\n]*\n\|[\s\-:|]*\|[^\n]*\n(\|[^\n]*\|[^\n]*\n)*)/g;
  
  return content.replace(tableRegex, (match) => {
    const lines = match.trim().split('\n');
    if (lines.length < 2) return match;
    
    // Parse header and separator
    const headerRow = lines[0];
    const separatorRow = lines[1];
    const dataRows = lines.slice(2);
    
    // Parse header
    const headers = headerRow.split('|').slice(1, -1).map(h => h.trim());
    
    // Parse data rows
    const rows = dataRows.map(row => {
      return row.split('|').slice(1, -1).map(cell => cell.trim());
    });
    
    // Build HTML table
    let htmlTable = '<table>\n<thead>\n<tr>\n';
    headers.forEach(header => {
      htmlTable += `<th>${header}</th>\n`;
    });
    htmlTable += '</tr>\n</thead>\n<tbody>\n';
    
    rows.forEach(row => {
      htmlTable += '<tr>\n';
      row.forEach(cell => {
        htmlTable += `<td>${cell}</td>\n`;
      });
      htmlTable += '</tr>\n';
    });
    
    htmlTable += '</tbody>\n</table>';
    return htmlTable;
  });
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(size = 0, tags = "") {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    // Combine the data with the slug
    return {
      slug,
      ...matterResult.data,
    };
  });

  if (size <= 0) {
    size = allPostsData.length;
  }
  // Sort posts by date
  return allPostsData
    .sort((a, b) => {
      if (a.date.toString() < b.date.toString()) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, size);
}

export function getFilteredPostsData(size = 0, tags = "") {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = [];

  const filteredData = fileNames.filter((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section

    const matterResult = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
      },
    });

    if (tags) {
      if (matterResult.data.hasOwnProperty("tags")) {
        if (matterResult.data.tags.indexOf(tags) > -1) {
          allPostsData.push({
            slug,
            ...matterResult.data,
          });
        }
      }
    }

    // Combine the data with the slug
  });

  if (size <= 0) {
    size = allPostsData.length;
  }

  // Sort posts by date
  return filteredData
    .sort((a, b) => {
      if (a.date.toString() < b.date.toString()) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, size);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  var matterResultContent = matter(fileContents);

  const matterResult = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
    },
  });
  // Use gray-matter to parse the post metadata section

  //matterResult.data.date = matterResult.data.date.toString();
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResultContent.content);
  let contentHtml = processedContent.toString();
  
  // Convert markdown tables to HTML
  contentHtml = convertMarkdownTablesToHtml(contentHtml);

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
