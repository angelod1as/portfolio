import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion'
import styles from './Accordion.module.sass'
import { FCC } from '#types/types'
import { useColorContext } from '#components/templates/Providers/ColorProvider'

type AccordionProps = {
  title: string
}

export const Accordion: FCC<AccordionProps> = ({ children, title }) => {
  const { colors } = useColorContext()

  return (
    <div className={`py-4 border-t-2 border-b-2 ${colors.borderColor}`}>
      <Root type="single" collapsible>
        <Item value={title}>
          <Header asChild>
            <p className="m-0">
              <Trigger className={`text-base font-bold ${colors.textColor}`}>
                &#8645; ({title})
              </Trigger>
            </p>
          </Header>
          <Content className={`pl-6 mt-4 ${styles.transition}`}>
            {children}
          </Content>
        </Item>
      </Root>
    </div>
  )
}
