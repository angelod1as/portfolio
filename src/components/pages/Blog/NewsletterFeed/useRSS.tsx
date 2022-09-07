// import Parser from 'rss-parser'
import { RSSItems } from '#pages/api/substack'
import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<RSSItems, string> = async url =>
  await fetch(url).then(async res => await res.json())

export const useRSS = () => {
  const { data, error } = useSWR('/api/substack', fetcher)

  return {
    feed: data,
    isLoading: !error && !data,
    isError: error,
  }
}
