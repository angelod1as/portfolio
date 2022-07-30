import { exec } from 'child_process'

export const openInVSCode = pathAndFileName => {
  exec(`code ${pathAndFileName}`, (error, stdout, stderr) => {
    console.log(stdout)
    if (error !== null) {
      console.log(stderr)
    }
  })
}
