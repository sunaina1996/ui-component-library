import React from 'react';

export interface TableColumn<Row> {
  header: string;
  accessor: keyof Row;
  align?: 'left' | 'center' | 'right';
  render?: (value: Row[keyof Row], row: Row) => React.ReactNode;
}

interface TableProps<Row> {
  columns: TableColumn<Row>[];
  data: Row[];
  zebra?: boolean; 
  rowKey?: (row: Row) => string | number;
}

export const Table = <Row,>({ columns, data, rowKey, zebra }: TableProps<Row>) => {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <table className="w-full text-sm border-collapse">
        
        <thead className="bg-slate-100 border-b">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                className={`px-6 py-3 text-xs font-semibold text-slate-500 uppercase ${
                  col.align === 'center' ? 'text-center' :
                  col.align === 'right' ? 'text-right' : 'text-left'
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

       <tbody>
  {data.map((row, i) => {
    const key = rowKey ? rowKey(row) : i;
    const isEven = i % 2 === 0;
    return (
      <tr
        key={key}
        className={`border-b hover:bg-slate-50 transition-colors ${
          zebra && isEven ? 'bg-slate-50' : ''
        }`}
      >
        {columns.map((col) => {
          const value = row[col.accessor];
          return (
            <td
              key={String(col.accessor)}
              className={`px-6 py-4 ${
                col.align === 'center' ? 'text-center' :
                col.align === 'right' ? 'text-right' : 'text-left'
              }`}
            >
              {col.render ? col.render(value, row) : (value as React.ReactNode)}
            </td>
          );
        })}
      </tr>
    );
  })}
</tbody>

      </table>
    </div>
  );
};