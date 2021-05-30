/* istanbul ignore file */
import { Meta, Story } from '@storybook/react/types-6-0'
import CardSection, { CardSectionProps } from '.'
import { NotionProps } from '@functions/fetchNotion/'

export default {
  title: 'Portfolio/Atoms/CardSection',
  component: CardSection,
} as Meta

type NotionWoDates = Omit<
  NotionProps,
  'createdTime' | 'lastEditedTime' | 'status'
>

const Template: Story<NotionWoDates> = (args: CardSectionProps) => (
  <CardSection {...args} />
)

export const Default: { args: CardSectionProps } = Template.bind({})
Default.args = {
  items: [
    {
      title: 'Card title',
      image:
        'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quickNote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et doloremque quis',
      tags: ['coding', 'talking'],
      link: 'http://test.com',
    },
    {
      title: 'Card title',
      image:
        'https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quickNote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et doloremque quis',
      tags: ['coding', 'talking'],
      link: 'http://test.com',
    },
    {
      title: 'Card title',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quickNote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et doloremque quis',
      tags: ['coding', 'talking'],
      link: 'http://test.com',
    },
    {
      title: 'Card title',
      image:
        'https://images.unsplash.com/photo-1526920929362-5b26677c148c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quickNote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, et doloremque quis',
      tags: ['coding', 'talking'],
      link: 'http://test.com',
    },
  ],
  title: 'To do',
}
