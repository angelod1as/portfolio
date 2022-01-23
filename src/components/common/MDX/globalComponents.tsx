import { BgColor } from 'src/helpers/colors'
import { CTA, CTAProps } from '../CTA'

type globalComponentsProps = {
  bgColor?: BgColor
}

export const globalComponents = ({ bgColor }: globalComponentsProps) => {
  return {
    CTA: (props: CTAProps) => <CTA bgColor={bgColor} {...props} />,
  }
}
