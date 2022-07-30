import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export const getFilename = () => {
  const [, , type, fileName] = process.argv

  if (!['blog', 'projects'].includes(type)) {
    throw new Error('Invalid type: should be "blog" or "projects"')
  }

  if (!fileName) {
    throw new Error('You need to pass a filename')
  }

  const __dirname = dirname(fileURLToPath(import.meta.url))
  const contentFolder = join(__dirname, '../', 'content', type)

  return { fileName, type, contentFolder }
}
