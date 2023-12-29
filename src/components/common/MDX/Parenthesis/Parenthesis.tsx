import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion'
import styles from './Parenthesis.module.sass'
import { FCC } from '#types/types'
import { useColorContext } from '#components/templates/Providers/ColorProvider'

export type ParenthesisProps = {
  about?: string
}

export const Parenthesis: FCC<ParenthesisProps> = ({ about, children }) => {
  const { colors } = useColorContext()

  return (
    <div className="my-8">
      <Root type="single" collapsible>
        <Item value={`A parenthesis about ${about ?? 'something'}`}>
          <Header asChild>
            <p className="m-0">
              <Trigger className={`text-base font-bold ${colors.textColor}`}>
                &#8645; ({`A parenthesis about ${about ?? 'something'}`})
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
