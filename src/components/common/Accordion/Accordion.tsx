import { FCC } from '#types/types'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import styles from './Accordion.module.sass'

type AccordionProps = {
  title: string
}

export const Accordion: FCC<AccordionProps> = ({ children, title }) => {
  return (
    <Root type="single" collapsible>
      <Item value={title}>
        <Header asChild>
          <p className="m-0">
            <Trigger
              className={`text-base font-bold text-highlight px-4 border`}
            >
              {title}
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
