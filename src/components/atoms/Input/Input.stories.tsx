/* istanbul ignore file */
import { Story, Meta } from '@storybook/react/types-6-0'

import { Input, InputProps } from './index'

export default {
  title: 'Portfolio/Atoms/Input',
  component: Input,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['none', 'email', 'name'],
      },
    },
  },
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Input',
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'email',
  label: 'Input',
}

export const Inverted = Template.bind({})
Inverted.args = {
  icon: 'name',
  label: 'Input',
  inverted: true,
}
