import { Link } from '#components/common/Links'

export type AuthorProps = {
  who?: string
  what?: string
  where?: string
}

export const Author = ({ what, where, who }: AuthorProps) => {
  return (
    <p className="mt-4 text-xs font-bold">
      {what} - {who}
      {where && (
        <>
          {' '}
          - <Link href={where}>source</Link>
        </>
      )}
    </p>
  )
}
