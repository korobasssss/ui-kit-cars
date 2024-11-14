import type { Meta, StoryObj } from '@storybook/react';

import { Message } from './';

const meta = {
  title: 'Message',
  component: Message,
  tags: ['autodocs'],
  args: {
},
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    type: 'base',
    message: 'Это сообщение'
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Это сообщение об ошибке'
  },
};
