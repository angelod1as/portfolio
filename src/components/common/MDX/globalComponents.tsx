import { FC } from 'react'
import { RandomColors } from 'src/helpers/colors'
import { CTA, CTAProps } from '../CTA'
import { Parenthesis, ParenthesisProps } from './Parenthesis'

type globalComponentsProps = {
  colors: RandomColors
}

const S: FC = props => <s {...props} />

export const globalComponents = ({ colors }: globalComponentsProps) => {
  return {
    CTA: (props: CTAProps) => <CTA {...props} colors={colors} />,
    S,
    Parenthesis: (props: ParenthesisProps) => (
      <Parenthesis {...props} colors={colors} />
    ),
  }
}
