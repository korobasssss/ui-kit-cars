import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: { 
    onClick: fn(),  
},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    children: 'Я кнопка'
  },
};

export const PrimaryDanger: Story = {
  args: {
    theme: 'danger',
    children: 'Я опасная кнопка'
  },
};

export const PrimaryDisabled: Story = {
  args: {
    theme: 'primary',
    children: 'Я кнопка',
    disabled: true
  },
};

export const PrimaryNone: Story = {
  args: {
    theme: 'none',
    children: 'Я кнопка',
  },
};