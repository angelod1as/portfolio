import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { simpleGit } from 'simple-git'
import { exec } from 'child_process'

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

export const getToday = () => {
  const addZero = number =>
    number < 10 ? '0' + number.toString() : number.toString()

  const dateObj = new Date()
  const month = addZero(dateObj.getUTCMonth() + 1)
  const day = addZero(dateObj.getUTCDate().toString())
  const year = dateObj.getUTCFullYear().toString()

  return [year, month, day]
}

export const gitNewBranch = async (type, fileName) => {
  console.log('Creating branch and commiting...')
  await simpleGit()
    .checkout('main')
    .checkoutLocalBranch(`${type}/${fileName}`)
    .add('./*')
    .commit('Add starter MDX')
}

export const openInVSCode = pathAndFileName => {
  exec(`code ${pathAndFileName}`, (error, stdout, stderr) => {
    console.log(stdout)
    if (error !== null) {
      console.log(stderr)
    }
  })
}
