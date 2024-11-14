import { Meta, StoryFn } from '@storybook/react';
import { ISelect, Select } from './';
import { useState } from 'react';

export default {
    title: 'Select',
    component: Select,
} as Meta;

const Template: StoryFn<ISelect<number, string>> = (args: ISelect<number, string>) => {
    const [selected, setSelected] = useState<number | undefined>(1);
    return (
        <Select 
            {...args} 
            value={selected} 
            onChange={(value) => setSelected(value)} 
            options={
                [
                    {value: 1, label: 'это 1'}, 
                    {value: 2, label: 'это 2'}, 
                    {value: 3, label: 'это 3'},
                    {value: 4, label: 'это 4'},
                ]
            } 
        />
    )
};



export const Default = Template.bind({});
Default.args = {
    placeholder: 'Это плейсхолдер',
};

export const DefaultMultiply = Template.bind({});
DefaultMultiply.args = {
    placeholder: 'Это плейсхолдер',
    multiply: 'multiple'
};

export const DefaultMultiplyError = Template.bind({});
DefaultMultiply.args = {
    placeholder: 'Это плейсхолдер',
    multiply: 'multiple',
    error: 'Ошибка!'
};