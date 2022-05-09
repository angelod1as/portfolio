import { Accordion } from '#components/common/Accordion'
import { useColorContext } from '#components/pages/Providers/ColorProvider'
import { FCC } from '#types/types'

export type ParenthesisProps = {
  about: string
}

export const Parenthesis: FCC<ParenthesisProps> = ({ about, children }) => {
  const { colors } = useColorContext()

  return (
    <div className="my-8">
      <Accordion title={`A parenthesis about ${about}`} colors={colors}>
        {children}
      </Accordion>
    </div>
  )
}
