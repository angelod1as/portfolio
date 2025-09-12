import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion'
import styles from './Parenthesis.module.sass'
import { FCC } from '#types/types'

export type ParenthesisProps = {
  about?: string
}

export const Parenthesis: FCC<ParenthesisProps> = ({ about, children }) => {
  return (
    <div className="my-8">
      <Root type="single" collapsible>
        <Item value={`A parenthesis about ${about ?? 'something'}`}>
          <Header asChild>
            <p className="m-0">
              <Trigger className="text-base font-bold text-highlight">
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
