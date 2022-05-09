import { Accordion } from '#components/common/Accordion'
import { FCC } from '#types/types'

export type ParenthesisProps = {
  about: string
}

export const Parenthesis: FCC<ParenthesisProps> = ({ about, children }) => {
  return (
    <div className="my-8">
      <Accordion title={`A parenthesis about ${about}`}>{children}</Accordion>
    </div>
  )
}
