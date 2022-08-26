import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

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
    const matterResult = matter(fileContents);

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
    const matterResult = matter(fileContents);
    console.log(matterResult);
    console.log(tags);
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

  // Use gray-matter to parse the post metadata section
  var matterResult = matter(fileContents);
  //matterResult.data.date = matterResult.data.date.toString();
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
