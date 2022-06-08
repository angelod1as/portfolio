type File = {
  metadata?: {
    draft?: boolean
    publishAt?: number
  }
}

export const filterMDX = <T>(files: File[]) => {
  return files.filter(page => {
    if (page?.metadata?.draft) {
      return false
    }

    if (page?.metadata?.publishAt && Date.now() < page?.metadata?.publishAt) {
      return false
    }

    return true
  }) as T[]
}
