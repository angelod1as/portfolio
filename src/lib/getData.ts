import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getData<T>({ type }: { type: 'home' | 'projects' }): T {
  const directory = path.join(process.cwd(), 'src', 'content', type)
  // Get file names under /home
  const fileNames = fs.readdirSync(directory)
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const { data } = matterResult
    if (data.date) {
      data.date = data.date.toString()
    }
    const returned = {
      id,
      ...data,
    }
    return returned
  })

  // Sort home by date
  return allData
  // .sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1
  //   } else {
  //     return -1
  //   }
  // })
}

export default getData
