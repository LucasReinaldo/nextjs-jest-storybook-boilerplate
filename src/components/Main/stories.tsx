import { Meta, Story } from '@storybook/react';
import Main from '.';

export default {
  title: 'Pages/Main',
  component: Main,
} as Meta;

export const Basic: Story = args => <Main {...args} />;

Basic.args = {
  title: 'NextJS',
  description: 'Boilerplate',
};
