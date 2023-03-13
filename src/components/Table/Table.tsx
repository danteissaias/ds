import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import cn from 'clsx';
import * as React from 'react';

import { Checkbox, Menu, ScrollArea } from '@/components';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, forwardedRef) => (
  <div ref={forwardedRef} className={cn(className, 'TableRoot')} {...props}>
    <ScrollArea.Root>
      <ScrollArea.Viewport className="TableRootScroll">
        <table className="TableRootTable">{children}</table>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" />
      <ScrollArea.Scrollbar orientation="horizontal" />
    </ScrollArea.Root>
  </div>
));

const Head = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <thead ref={forwardedRef} className={cn(className, 'TableHead')} {...props} />
));

const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, forwardedRef) => (
  <tr ref={forwardedRef} className={cn(className, 'TableRow')} {...props} />
));

interface TableCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  checkbox?: boolean;
}

const Cell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, checkbox, ...props }, forwardedRef) => (
    <td
      ref={forwardedRef}
      className={cn(className, 'TableCell', { checkbox })}
      {...props}
    />
  )
);

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tbody ref={forwardedRef} className={cn(className, 'TableBody')} {...props} />
));

interface RowAction {
  label: string;
  icon?: React.ElementType;
  type?: 'default' | 'danger';
  onHandle: () => void | Promise<void>;
}

export interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  selectable?: boolean;
  rowActions?: (row: T) => RowAction[];
  data: T[];
  columns: ColumnDef<T, any>[];
}

export function Table<T>({
  data,
  columns,
  selectable,
  rowActions,
  ...props
}: TableProps<T>) {
  const columnDefs = React.useMemo(() => {
    const columnDefs: ColumnDef<T, any>[] = [];

    if (selectable) {
      columnDefs.push({
        id: 'select',
        size: 40,
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
        size: 40,
        cell: ({ row }) => {
          return (
            <Menu.Root>
              <Menu.IconButton
                style={{ float: 'right' }}
                variant="ghost"
                size="1"
              >
                <DotsHorizontalIcon />
              </Menu.IconButton>

              <Menu.Content style={{ minWidth: 220 }}>
                {rowActions(row.original).map((action, i) => (
                  <Menu.Item
                    key={i}
                    onClick={() => action.onHandle()}
                    type={action.type}
                  >
                    {action.icon && <action.icon />}
                    {action.label}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Root>
          );
        },
      });
    }

    return columnDefs;
  }, [columns, rowActions, selectable]);

  const table = useReactTable({
    data,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Root {...props}>
      <Head>
        {table.getHeaderGroups().map((headerGroup) => (
          <Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Cell key={header.id} style={{ minWidth: header.getSize() }}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Cell>
            ))}
          </Row>
        ))}
      </Head>

      <Body>
        {table.getRowModel().rows.map((row) => (
          <Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Cell key={cell.id} style={{ minWidth: cell.column.getSize() }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Cell>
            ))}
          </Row>
        ))}
      </Body>
    </Root>
  );
}
