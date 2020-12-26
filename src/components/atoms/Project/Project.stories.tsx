import { Meta, Story } from '@storybook/react/types-6-0'
import Project, { ProjectProps } from '.'

export default {
  title: 'Portfolio/Projects/Project',
  component: Project,
} as Meta

const Template: Story<ProjectProps> = args => <Project {...args} />

export const Default = Template.bind({})
Default.args = {
  image: 'https://via.placeholder.com/300',
  title: 'Stories from the victims of the Coronavirus',
  lead: 'A memorial telling the stories of many of COVID-19 victims in Brazil',
  date: 'Apr 5, 2020',
  to: '/',
}
