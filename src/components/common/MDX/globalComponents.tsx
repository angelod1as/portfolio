import { FCC } from '#types/types'
import { CTAProps } from '../CTA'
import { ParenthesisProps } from './Parenthesis'

// Strikethrough
const S: FCC = props => <s {...props} />
const CTA: FCC<CTAProps> = props => <CTA {...props} />
const Parenthesis: FCC<ParenthesisProps> = props => <Parenthesis {...props} />

export const globalComponents = () => {
  return {
    CTA,
    S,
    Parenthesis,
  }
}
