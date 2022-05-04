import { FC } from 'react'
import { BgColor } from 'src/helpers/colors'
import { CTA, CTAProps } from '../CTA'

type globalComponentsProps = {
  bgColor?: BgColor
}

const S: FC = props => <s {...props} />

export const globalComponents = ({ bgColor }: globalComponentsProps) => {
  return {
    CTA: (props: CTAProps) => <CTA bgColor={bgColor} {...props} />,
    S,
  }
}
