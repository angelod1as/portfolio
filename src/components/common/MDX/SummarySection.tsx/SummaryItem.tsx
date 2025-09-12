import { MDX } from '../MDX'

type SummaryItemProps = {
  prefix: string
  content: string | null | undefined
  isParagraph?: boolean
  ongoing?: boolean | null
}

export const SummaryItem = ({
  prefix,
  content,
  isParagraph,
  ongoing,
}: SummaryItemProps) => {
  if (!content) return null

  return (
    <>
      <b className="alternates text-highlight">{prefix}</b>
      <div>
        {isParagraph ? (
          <p>{ongoing ? `Since ${content}` : content}</p>
        ) : (
          <MDX
            mdx={{ compiledSource: content, scope: {}, frontmatter: {} }}
            type="clean"
          />
        )}
      </div>
    </>
  )
}
