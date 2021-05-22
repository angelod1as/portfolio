/* istanbul ignore file */
import { Story, Meta } from '@storybook/react/types-6-0'

import { Header, HeaderProps } from './index'

export default {
  title: 'Portfolio/Header',
  component: Header,
  argTypes: {},
} as Meta

const Template: Story<HeaderProps> = args => (
  <Header {...args} type="not-undefined" />
)

export const WithExcerpt = Template.bind({})
WithExcerpt.args = {
  title: 'stuff',
  excerpt:
    "I'm a journalist, designer and developer, worked in award-winning publications at Folha de S.Paulo as a front-end developer and assisting in project management. I have substantial experience with displaying information in a concise and easy to understand way...",
}

export const WithoutExcerpt = Template.bind({})
WithoutExcerpt.args = {
  title: 'stuff',
}

export const WithoutIDo = Template.bind({})
WithoutIDo.args = {
  title: 'prizes',
  hasIDo: false,
}

export const Slim = Template.bind({})
Slim.args = {
  title: 'stuff',
  slim: true,
}
