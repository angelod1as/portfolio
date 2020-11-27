import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import parseMarkdown from './parseMarkdown'

interface getDataProps {
  type: 'home' | 'projects'
  fullContent?: boolean
}

export function getData({ type, fullContent }: getDataProps): any {
  const directory = path.join(process.cwd(), 'src', 'content', type)
  // Get file names under /home
  const fileNames = fs.readdirSync(directory)
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const { data, content } = matterResult
    if (data.date) {
      data.date = data.date.toString()
    }

    let returned: {
      [key: string]: any
    }

    if (fullContent) {
      const parsedContent = parseMarkdown(content)
      returned = {
        id,
        ...data,
        content: parsedContent.text,
        excerpt: parsedContent.excerpt,
      }
    } else {
      returned = {
        id,
        ...data,
      }
    }

    return returned
  })
  return allData
}

export default getData
