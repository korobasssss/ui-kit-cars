import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './';

const meta = {
  title: 'Loader',
  component: Loader,
  tags: ['autodocs'],
  args: {
},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};