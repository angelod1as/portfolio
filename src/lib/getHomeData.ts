import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const homeDirectory = path.join(process.cwd(), 'src', 'content', 'home')

export function getHomeData() {
  // Get file names under /home
  const fileNames = fs.readdirSync(homeDirectory)
  const allHomeData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(homeDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the home metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })
  // Sort home by date
  return allHomeData
  // .sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1
  //   } else {
  //     return -1
  //   }
  // })
}

export default getHomeData
