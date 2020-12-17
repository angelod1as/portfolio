import { Story, Meta } from '@storybook/react/types-6-0'

import { Back, BackProps } from './index'

export default {
  title: 'Portfolio/Atoms/Back',
  component: Back,
  argTypes: {
    inverted: {
      type: 'boolean',
    },
  },
} as Meta

const backgroundColor = '#000000'

const Template: Story<BackProps> = args => <Back {...args} />

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor,
}
