import { FC, ReactNode } from 'react'
import { TextColor } from 'src/helpers/colors'

export const Strong: FC<{ children: ReactNode; color: TextColor }> = ({
  children,
  color,
}) => <strong className={color}>{children}</strong>
