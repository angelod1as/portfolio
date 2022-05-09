import { FCC } from '#types/types'
import { CTAProps } from '../CTA'
import { Parenthesis, ParenthesisProps } from './Parenthesis'

// Strikethrough
const S: FCC = props => <s {...props} />
const CTA: FCC<CTAProps> = props => <CTA {...props} />
const ParenthesisComponent: FCC<ParenthesisProps> = props => (
  <Parenthesis {...props} />
)

export const globalComponents = () => {
  return {
    CTA,
    S,
    Parenthesis: ParenthesisComponent,
  }
}
