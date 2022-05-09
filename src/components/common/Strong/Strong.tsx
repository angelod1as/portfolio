import { FCC } from '#types/types'
import { TextColor } from 'src/helpers/colors'

export const Strong: FCC<{ color: TextColor }> = ({ children, color }) => (
  <strong className={color}>{children}</strong>
)
