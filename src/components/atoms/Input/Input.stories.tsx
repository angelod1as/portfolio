// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Input, InputProps } from './index'

export default {
  title: 'Portfolio/Input',
  component: Input,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    icon: {
      control: {
        type: 'select',
        options: ['none', 'email', 'name'],
      },
    },
  },
} as Meta

const backgroundColor = '#000000'

const Template: Story<InputProps> = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Input',
  backgroundColor,
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'email',
  label: 'Input',
  backgroundColor,
}

export const Inverted = Template.bind({})
Inverted.args = {
  icon: 'name',
  label: 'Input',
  backgroundColor,
  inverted: true,
}
