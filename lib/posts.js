import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { glob } from 'glob'

const postsDirectory = path.join(process.cwd(), '_posts')

function sanitizeId(id) {
  return id.replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-');
}

export function getSortedPostsData() {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`)
  const allPostsData = fileNames.map(fileName => {
    const id = sanitizeId(path.basename(fileName).replace(/\.md$/, ''))
    const fileContents = fs.readFileSync(fileName, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })
  const allPostsDataWithDate = allPostsData.filter(post => post.date)

  return allPostsDataWithDate.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`)
  const ids = fileNames.map(fileName => {
    const id = sanitizeId(path.basename(fileName).replace(/\.md$/, ''));
    return {
      params: {
        id
      }
    }
  })
  return ids;
}

export async function getPostData(id) {
  const fileNames = glob.sync(`${postsDirectory}/**/*.md`)
  const fileName = fileNames.find(fileName => {
    const currentId = sanitizeId(path.basename(fileName).replace(/\.md$/, ''));
    return currentId === id;
  });
  const fileContents = fs.readFileSync(fileName, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}