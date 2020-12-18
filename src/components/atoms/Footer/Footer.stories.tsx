import { Story, Meta } from '@storybook/react/types-6-0'

import { Footer, FooterProps } from './index'

export default {
  title: 'Portfolio/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta

const backgroundColor = '#000000'

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor,
  blogPosts: [
    {
      title: 'Stories from the victims of the Coronavirus',
      lead:
        'A memorial telling the stories of many of COVID-19 victims in Brazil',
      date: 'Apr 5, 2020',
    },
    {
      title: 'Stories from the victims of the Coronavirus',
      lead:
        'A memorial telling the stories of many of COVID-19 victims in Brazil',
      date: 'Apr 5, 2020',
    },
    {
      title: 'Stories from the victims of the Coronavirus',
      lead:
        'A memorial telling the stories of many of COVID-19 victims in Brazil',
      date: 'Apr 5, 2020',
    },
  ],
  newsletter: true,
  social: [
    {
      telegram: 'telegram',
    },
  ],
}
