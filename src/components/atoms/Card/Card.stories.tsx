/* istanbul ignore file */
import { Meta, Story } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'
import { NotionProps } from '@functions/fetchNotion/'

export default {
  title: 'Portfolio/Atoms/Card',
  component: Card,
} as Meta

type NotionWoDates = Omit<
  NotionProps,
  'createdTime' | 'lastEditedTime' | 'status'
>

const Template: Story<NotionWoDates> = args => <Card {...args} />

export const Default: { args: CardProps } = Template.bind({})
Default.args = {
  title: 'Card title',
  image:
    'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  quickNote:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et doloremque quis',
  tags: ['coding', 'talking'],
  link: 'http://test.com',
}
