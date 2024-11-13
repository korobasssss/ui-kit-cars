import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonIcon } from './';

const meta = {
  title: 'ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  args: { 
    onClick: fn(),  
},
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '*иконка*',
    alt: 'фото иконки'
  },
};