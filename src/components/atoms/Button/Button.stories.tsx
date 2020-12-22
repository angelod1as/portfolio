// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './index'

export default {
  title: 'Portfolio/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    icon: {
      control: {
        type: 'select',
        options: ['none', 'github'],
      },
    },
  },
} as Meta

const backgroundColor = '#000000'

const Template: Story<ButtonProps> = args => <Button {...args} href={'#'} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  backgroundColor,
}

export const Borderless = Template.bind({})
Borderless.args = {
  borderless: true,
  children: 'Button',
  backgroundColor,
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'github',
  children: 'Button',
  backgroundColor,
}

export const Inverted = Template.bind({})
Inverted.args = {
  icon: 'github',
  children: 'Button',
  backgroundColor,
  inverted: true,
}
