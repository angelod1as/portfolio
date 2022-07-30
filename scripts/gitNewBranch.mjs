import { simpleGit } from 'simple-git'

export const gitNewBranch = async (type, fileName) => {
  console.log('Creating branch and commiting...')
  await simpleGit()
    .checkout('main')
    .checkoutLocalBranch(`${type}/${fileName}`)
    .add('./*')
    .commit('Add starter MDX')
}
