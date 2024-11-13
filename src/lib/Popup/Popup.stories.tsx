import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from './';
import { fn } from '@storybook/test';

const meta = {
  title: 'Popup',
  component: Popup,
  tags: ['autodocs'],
  args: {

},
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Это внутренности попапа',
    isModalOpen: true,
    handleClose: fn()
  },
};