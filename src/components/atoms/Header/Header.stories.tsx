import { Story, Meta } from '@storybook/react/types-6-0'

import { Header, HeaderProps } from './index'

export default {
  title: 'Portfolio/Header',
  component: Header,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta

const backgroundColor = '#000000'

const Template: Story<HeaderProps> = args => <Header {...args} />

export const WithExcerpt = Template.bind({})
WithExcerpt.args = {
  backgroundColor,
  title: 'stuff',
  excerpt:
    "I'm a journalist, designer and developer, worked in award-winning publications at Folha de S.Paulo as a front-end developer and assisting in project management. I have substantial experience with displaying information in a concise and easy to understand way...",
}

export const WithoutExcerpt = Template.bind({})
WithoutExcerpt.args = {
  backgroundColor,
  title: 'stuff',
}

export const WithoutIDo = Template.bind({})
WithoutIDo.args = {
  backgroundColor,
  title: 'prizes',
  hasIDo: false,
}

export const Slim = Template.bind({})
Slim.args = {
  backgroundColor,
  title: 'stuff',
  slim: true,
}
