import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableColumn } from './Table';
import '@testing-library/jest-dom';

interface User {
  name: string;
}

const columns: TableColumn<User>[] = [
  { header: 'Name', accessor: 'name' },
];

const data: User[] = [{ name: 'John' }];

describe('Table Component', () => {
  it('renders table data', () => {
    render(<Table<User> columns={columns} data={data} />);
    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<Table<User> columns={columns} data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('applies zebra class when enabled', () => {
    render(<Table<User> columns={columns} data={data} zebra />);
    const row = screen.getByText('John').closest('tr');
    expect(row).toHaveClass('bg-slate-50');
  });
});