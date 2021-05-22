/* istanbul ignore file */
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './index'

export default {
  title: 'Portfolio/Atoms/Button',
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['none', 'github'],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} href={'#'} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}

export const Borderless = Template.bind({})
Borderless.args = {
  borderless: true,
  children: 'Button',
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'github',
  children: 'Button',
}

export const Inverted = Template.bind({})
Inverted.args = {
  icon: 'github',
  children: 'Button',
  inverted: true,
}
