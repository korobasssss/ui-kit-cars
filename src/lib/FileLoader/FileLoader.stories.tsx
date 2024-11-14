import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { FileLoader } from '.';

const meta = {
  title: 'FileLoader',
  component: FileLoader,
  tags: ['autodocs'],
  args: { 
},
} satisfies Meta<typeof FileLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleChange: fn(),
  },
};