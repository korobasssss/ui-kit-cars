import type { Meta, StoryObj } from '@storybook/react';

import { LoaderSpin } from '.';

const meta = {
  title: 'LoaderSpin',
  component: LoaderSpin,
  tags: ['autodocs'],
  args: {
},
} satisfies Meta<typeof LoaderSpin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};