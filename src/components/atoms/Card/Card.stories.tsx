/* istanbul ignore file */
import { Meta, Story } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Portfolio/Atoms/Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = args => <Card {...args} />

export const Default: { args: CardProps } = Template.bind({})
Default.args = {
  item: {
    pt: {
      title: 'Card title',
      note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vel veniam ipsam placeat quasi atque',
    },
    en: {
      title: 'Card title',
      note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vel veniam ipsam placeat quasi atque',
    },
    image:
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    tags: ['coding', 'talking'],
    link: 'http://test.com',
  },
}
