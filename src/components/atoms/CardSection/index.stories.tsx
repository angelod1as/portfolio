/* istanbul ignore file */
import { Meta, Story } from '@storybook/react/types-6-0'
import CardSection, { CardSectionProps } from '.'

export default {
  title: 'Portfolio/Atoms/CardSection',
  component: CardSection,
} as Meta

const Template: Story<CardSectionProps> = (args: CardSectionProps) => (
  <CardSection {...args} />
)

export const Default: { args: CardSectionProps } = Template.bind({})
Default.args = {
  items: [
    {
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
    {
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
    {
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
    {
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
  ],
  title: 'To do',
}
