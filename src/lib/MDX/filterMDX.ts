import { MDXReturn } from './compileMDX'

type File = {
  metadata?: {
    draft?: boolean
    createdAt?: number
  }
}

export const filterMDX = <T>(files: File[]) => {
  return files.filter(page => {
    if (page?.metadata?.draft) {
      return false
    }

    if (Date.now() < (page?.metadata?.createdAt ?? 0)) {
      return false
    }

    return true
  }) as Array<MDXReturn<T>>
}
