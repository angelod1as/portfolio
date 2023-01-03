// import Parser from 'rss-parser'
import useSWR, { Fetcher } from 'swr'

export type NotionResponse = {
  error?: string
  questions: Array<{ question: string; createdAt: string }>
}

const fetcher: Fetcher<NotionResponse, string> = async url =>
  await fetch(url).then(async res => await res.json())

export const useGetNotion = () => {
  const { data, error } = useSWR<NotionResponse>('/api/notion/ask', fetcher)

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}
