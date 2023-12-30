import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion'
import styles from './Accordion.module.sass'
import { FCC } from '#types/types'
import { TextColor } from 'src/helpers/colors'

type AccordionProps = {
  title: string
  color: TextColor
}

export const Accordion: FCC<AccordionProps> = ({ children, title, color }) => {
  return (
    <Root type="single" collapsible>
      <Item value={title}>
        <Header asChild>
          <p className="m-0">
            <Trigger
              className={`text-base font-bold ${color} border-0 p-0 italic`}
            >
              &#8645; {title}
            </Trigger>
          </p>
        </Header>
        <Content className={`pl-6 mt-4 ${styles.transition}`}>
          {children}
        </Content>
      </Item>
    </Root>
  )
}
