import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: { 
    onChange: fn(),  
},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Введите текст'
  },
};

export const PrimaryError: Story = {
  args: {
    error: 'Введи правильно значение емае',
    placeholder: 'Введите текст'
  },
};