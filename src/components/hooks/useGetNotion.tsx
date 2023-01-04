// import Parser from 'rss-parser'
import useSWR, { Fetcher } from 'swr'

export type ApiResponse<T> = T & {
  error?: string
}

export const useGetNotion = <T,>(path: string) => {
  const fetcher: Fetcher<ApiResponse<T>, string> = async url =>
    await fetch(url).then(async res => await res.json())

  const { data, error } = useSWR<ApiResponse<T>>(`/api/notion/${path}`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}
