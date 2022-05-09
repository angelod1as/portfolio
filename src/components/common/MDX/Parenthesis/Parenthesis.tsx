import { Accordion } from '#components/common/Accordion'
import { FC } from 'react'
import { RandomColors } from 'src/helpers/colors'

export type ParenthesisProps = {
  about: string
  colors: RandomColors
}

export const Parenthesis: FC<ParenthesisProps> = ({
  about,
  children,
  colors,
}) => {
  return (
    <div className="my-8">
      <Accordion title={`A parenthesis about ${about}`} colors={colors}>
        {children}
      </Accordion>
    </div>
  )
}
