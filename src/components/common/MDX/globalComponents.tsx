import { FCC } from '#types/types'
import { CTA, CTAProps } from '../CTA'
import { Parenthesis, ParenthesisProps } from './Parenthesis'

// Strikethrough
const S: FCC = props => <s {...props} />
const CTAComponent: FCC<CTAProps> = props => <CTA {...props} />
const ParenthesisComponent: FCC<ParenthesisProps> = props => (
  <Parenthesis {...props} />
)

export const globalComponents = () => {
  return {
    S,
    CTA: CTAComponent,
    Parenthesis: ParenthesisComponent,
  }
}
