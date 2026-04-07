import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Chart, ChartProps } from './Chart';

export default {
  title: 'Components/Chart',
  component: Chart,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['bar', 'line'],
    },
    height: { control: 'number' },
    title: { control: 'text' },
    data: { control: 'object' },
  },
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const BarChart = Template.bind({});
BarChart.args = {
  type: 'bar',
  title: 'Monthly Sales',
  data: [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 55 },
    { label: 'Mar', value: 70 },
    { label: 'Apr', value: 60 },
    { label: 'May', value: 90 },
  ],
  height: 300,
};

export const LineChart = Template.bind({});
LineChart.args = {
  type: 'line',
  title: 'Website Visitors',
  data: [
    { label: 'Jan', value: 20 },
    { label: 'Feb', value: 45 },
    { label: 'Mar', value: 35 },
    { label: 'Apr', value: 50 },
    { label: 'May', value: 65 },
  ],
  height: 300,
};