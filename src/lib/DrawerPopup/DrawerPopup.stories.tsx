import type { Meta, StoryObj } from '@storybook/react';

import { DrawerPopup } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'DrawerPopup',
  component: DrawerPopup,
  tags: ['autodocs'],
  args: {

},
} satisfies Meta<typeof DrawerPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Это внутренности попапа',
    title: 'Заголовок',
    isOpen: true,
    setIsOpen: fn()
  },
};