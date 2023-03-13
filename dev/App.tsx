import '../src/index.css';

import {
  ArchiveIcon,
  CheckIcon,
  CounterClockwiseClockIcon,
  DotsHorizontalIcon,
  EnvelopeClosedIcon,
  Pencil1Icon,
  ReloadIcon,
  TrashIcon,
} from '@radix-ui/react-icons';

import {
  Badge,
  Button,
  Checkbox,
  Dialog,
  Menu,
  IconButton,
  ScrollArea,
  Table,
} from '../src';
import { ColumnDef } from '@tanstack/react-table';

interface User {
  name: string;
  email: string;
  createdAt: string;
  type: 'subuser' | 'customer';
  customerId?: string;
}

const columns: ColumnDef<User, any>[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'createdAt', header: 'Created at' },
  {
    accessorKey: 'type',
    header: 'Tags',
    cell: ({ renderValue }) => <Badge>{renderValue()}</Badge>,
  },
];

const data: User[] = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
    createdAt: '13:21 3/2/2023',
    type: 'subuser',
  },
  {
    name: 'Dante Issaias',
    email: 'dante@issaias.com',
    createdAt: '16:27 9/2/2023',
    type: 'customer',
  },
  {
    name: 'Robert Roe',
    email: 'robert@roe.com',
    createdAt: '18:15 1/2/2023',
    type: 'customer',
  },
];

function Example() {
  return (
    <div className="display-flex fd-column gap-16">
      <div className="display-flex jc-space-between" style={{ maxWidth: 800 }}>
        <div className="display-flex gap-4 ai-center">
          <IconButton size="1">
            <ReloadIcon />
          </IconButton>
          <Button size="1">Add record</Button>
        </div>
        <div className="display-flex gap-4 ai-center">
          <Button type="danger" size="1">
            Delete 3 records
          </Button>
        </div>
      </div>

      <Table
        style={{ maxWidth: 800 }}
        data={data}
        columns={columns}
        selectable
        rowActions={(row) => [
          {
            label: 'Send password recovery',
            icon: EnvelopeClosedIcon,
            onHandle: () => console.log('Send password recovery', row.email),
          },
          {
            label: 'View payment history',
            icon: CounterClockwiseClockIcon,
            onHandle: () => console.log('View payment history', row.email),
          },
          {
            label: 'Delete record',
            type: 'danger',
            icon: TrashIcon,
            onHandle: () => console.log('Delete', row.email),
          },
        ]}
      />
    </div>
  );
}

export default function App() {
  return (
    <main>
      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Button</h3>
        <div className="display-flex gap-8">
          <Button size="1">Small</Button>
          <Button>Medium</Button>
        </div>

        <div className="display-flex gap-8">
          <Button>Default</Button>
          <Button type="danger">Danger</Button>
          <Button type="success">Success</Button>
        </div>

        <div className="display-flex gap-8">
          <Button variant="ghost">Default</Button>
          <Button variant="ghost" type="danger">
            Danger
          </Button>
          <Button variant="ghost" type="success">
            Success
          </Button>
        </div>

        <div className="display-flex gap-8">
          <Button disabled size="1">
            Small
          </Button>
          <Button disabled>Medium</Button>
        </div>

        <div className="display-flex gap-8">
          <Button loading size="1">
            Small
          </Button>
          <Button loading>Medium</Button>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Icon Button</h3>

        <div className="display-flex gap-8">
          <IconButton size="1">
            <Pencil1Icon />
          </IconButton>
          <IconButton>
            <Pencil1Icon />
          </IconButton>
        </div>

        <div className="display-flex gap-8">
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton type="danger">
            <TrashIcon />
          </IconButton>
          <IconButton type="success">
            <CheckIcon />
          </IconButton>
        </div>

        <div className="display-flex gap-8">
          <IconButton variant="ghost">
            <ArchiveIcon />
          </IconButton>
          <IconButton type="danger" variant="ghost">
            <TrashIcon />
          </IconButton>
          <IconButton type="success" variant="ghost">
            <CheckIcon />
          </IconButton>
        </div>

        <div className="display-flex gap-8">
          <IconButton disabled>
            <ArchiveIcon />
          </IconButton>
          <IconButton loading>
            <ReloadIcon />
          </IconButton>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Menu</h3>

        <div className="display-flex gap-8">
          <Menu.Root>
            <Menu.Button>User</Menu.Button>
            <Menu.Content style={{ minWidth: 230 }}>
              <Menu.Label>Label</Menu.Label>
              <Menu.Group>
                <Menu.Item>Workspace Settings</Menu.Item>
                <Menu.Item>Create or join workspace</Menu.Item>
                <Menu.Item>Add an account</Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Group>
                <Menu.Item type="danger">Log out</Menu.Item>
              </Menu.Group>
            </Menu.Content>
          </Menu.Root>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Checkbox</h3>
        <div className="display-flex gap-8">
          <Checkbox />
          <Checkbox checked="indeterminate" />
          <Checkbox checked />
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Badge</h3>

        <div className="display-flex gap-8">
          <Badge>Gray</Badge>
          <Badge type="danger">Red</Badge>
          <Badge type="success">Green</Badge>
          <Badge type="info">Accent</Badge>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>
          Table <Badge>Work in progress</Badge>
        </h3>
        <Table
          style={{ maxWidth: 800 }}
          data={data}
          columns={columns}
          selectable
          rowActions={(row) => [
            {
              label: 'Send password recovery',
              icon: EnvelopeClosedIcon,
              onHandle: () => console.log('Send password recovery', row.email),
            },
            {
              label: 'View payment history',
              icon: CounterClockwiseClockIcon,
              onHandle: () => console.log('View payment history', row.email),
            },
            {
              label: 'Delete record',
              type: 'danger',
              icon: TrashIcon,
              onHandle: () => console.log('Delete', row.email),
            },
          ]}
        />
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>
          Dialog <Badge>Work in progress</Badge>
        </h3>

        <div className="display-flex gap-8">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Edit user</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>WIP</Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Scroll Area</h3>

        <div className="display-flex gap-8">
          <ScrollArea.Root
            scrollHideDelay={0}
            style={{
              background: 'var(--gray-4)',
              height: 300,
              maxWidth: 300,
              borderRadius: 'var(--br-6)',
            }}
          >
            <ScrollArea.Viewport>
              <div className="p-4">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: 50,
                      width: 350,
                      borderRadius: 'var(--br-4)',
                      background: 'var(--gray-5)',
                    }}
                    className=" m-16"
                  />
                ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" />
            <ScrollArea.Scrollbar orientation="horizontal" />
          </ScrollArea.Root>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Example</h3>
        <Example />
      </div>
    </main>
  );
}
