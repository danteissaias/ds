import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';

import { Checkbox, Dropdown, IconButton, Table } from '@/components';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

interface RowAction {
  label: string;
  icon?: React.ElementType;
  type?: 'default' | 'danger';
  onHandle: () => void | Promise<void>;
}

export interface TableAutoProps<T>
  extends React.HTMLAttributes<HTMLDivElement> {
  selection?: boolean;
  rowActions?: (row: T) => RowAction[];
  data: T[];
  columns: ColumnDef<T, any>[];
}

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    checkbox?: boolean;
  }
}

export function Auto<T>({
  data,
  columns,
  selection,
  rowActions,
  ...props
}: TableAutoProps<T>) {
  const columnDefs = React.useMemo(() => {
    const columnDefs: ColumnDef<T, any>[] = [];

    if (selection) {
      columnDefs.push({
        id: 'select',
        meta: { checkbox: true },
        header: ({ table }) => {
          return (
            <Checkbox
              checked={
                table.getIsSomeRowsSelected()
                  ? 'indeterminate'
                  : table.getIsAllRowsSelected()
              }
              onCheckedChange={(checked) =>
                checked === 'indeterminate'
                  ? table.toggleAllRowsSelected(true)
                  : table.toggleAllRowsSelected(checked)
              }
            />
          );
        },
        cell: ({ row }) => {
          return (
            <Checkbox
              checked={
                row.getIsSomeSelected() ? 'indeterminate' : row.getIsSelected()
              }
              disabled={!row.getCanSelect()}
              onCheckedChange={(checked) =>
                checked === 'indeterminate'
                  ? row.toggleSelected(true)
                  : row.toggleSelected(checked)
              }
            />
          );
        },
      });
    }

    columnDefs.push(...columns);

    if (rowActions) {
      columnDefs.push({
        id: 'actions',
        meta: { checkbox: true },
        cell: ({ row }) => {
          return (
            <Dropdown.Root>
              <Dropdown.Trigger asChild>
                <IconButton variant="ghost" size="1">
                  <DotsHorizontalIcon />
                </IconButton>
              </Dropdown.Trigger>
              <Dropdown.Portal>
                <Dropdown.Content style={{ minWidth: 220 }}>
                  {rowActions(row.original).map((action, i) => (
                    <Dropdown.Item
                      key={i}
                      onClick={() => action.onHandle()}
                      type={action.type}
                    >
                      {action.icon && <action.icon />}
                      {action.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Content>
              </Dropdown.Portal>
            </Dropdown.Root>
          );
        },
      });
    }

    return columnDefs;
  }, [columns, rowActions, selection]);

  const table = useReactTable({
    data,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table.Root {...props}>
      <Table.Head>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.Cell
                key={header.id}
                checkbox={header.column.columnDef.meta?.checkbox}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Head>

      <Table.Body>
        {table.getRowModel().rows.map((row) => (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Cell
                key={cell.id}
                checkbox={cell.column.columnDef.meta?.checkbox}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
