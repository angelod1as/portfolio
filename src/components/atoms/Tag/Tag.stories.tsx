/* istanbul ignore file */
import { Meta, Story } from '@storybook/react/types-6-0'
import Tag, { TagProps } from '.'

export default {
  title: 'Portfolio/Atoms/Tag',
  component: Tag,
} as Meta

const Template: Story<TagProps> = args => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  tag: 'test tag',
}
