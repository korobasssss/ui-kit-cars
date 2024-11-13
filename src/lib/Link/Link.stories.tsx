import { Meta, StoryFn } from '@storybook/react';
import { ILink, Link } from './';
import { MemoryRouter } from 'react-router-dom';

const meta = {
    title: 'Link',
    component: Link,
    tags: ['autodocs'],
    args: {},
  } satisfies Meta<typeof Link>;
  
  export default meta;

const Template: StoryFn<ILink> = (args: ILink) => (
    <MemoryRouter>
        <Link {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
    url: '/example',
    children: 'Click me',
};