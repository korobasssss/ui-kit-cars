import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs'],
  args: {

},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const images: string[] = [
  'https://99px.ru/sstorage/53/2011/09/tmb_20294_4027.jpg',
  'https://99px.ru/sstorage/53/2012/06/mid_42945_5332.jpg',
  'https://99px.ru/sstorage/53/2012/07/mid_45027_6303.jpg',
];

export const Primary: Story = {
  args: {
    images: images
  },
};