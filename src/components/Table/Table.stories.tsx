import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, TableColumn } from './Table';

interface User {
  name: string;
  email: string;
  role: string;
}

const columns: TableColumn<User>[] = [
  {
    header: 'Name',
    accessor: 'name',
  },
  {
    header: 'Email',
    accessor: 'email',
  },
  {
    header: 'Role',
    accessor: 'role',
    render: (value) => (
      <span className="px-2 py-1 bg-slate-200 rounded text-xs">
        {value as string}
      </span>
    ),
  },
];


const data: User[] = [
  { name: 'John Doe', email: 'john@test.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@test.com', role: 'User' },
];


const UserTable = (props: any) => <Table<User> {...props} />;


const meta: Meta<typeof UserTable> = {
  title: 'Components/Table',
  component: UserTable,
  tags: ['autodocs'],

  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Reusable generic table component for dashboard UI with support for custom render, zebra rows and empty state.',
      },
    },
  },


  argTypes: {
    columns: {
      control: 'object',
      description: 'Column configuration for table',
    },
    data: {
      control: 'object',
      description: 'Data rows',
    },
    zebra: {
      control: 'boolean',
      description: 'Enable zebra striping',
    },
    className: {
      control: 'text',
      description: 'Custom wrapper class',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message when no data',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
    data,
    zebra: true,
    emptyMessage: 'No data available',
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No users found',
  },
};

export const ManyRows: Story = {
  args: {
    columns,
    data: [...data, ...data, ...data],
  },
};

export const NoZebra: Story = {
  args: {
    columns,
    data,
    zebra: false,
  },
};