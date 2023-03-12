import '../src/index.css';

import {
  ArchiveIcon,
  CheckIcon,
  CounterClockwiseClockIcon,
  Pencil1Icon,
  DotsHorizontalIcon,
  EnvelopeClosedIcon,
  ReloadIcon,
  TrashIcon,
} from '@radix-ui/react-icons';

import {
  Badge,
  Button,
  Checkbox,
  Dialog,
  Dropdown,
  IconButton,
  ScrollArea,
  Table,
} from '../src';

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
          {/*   <Button color="green" size="1">
              Save 1 change
            </Button>
            <Button ghost size="1">
              Discard changes
            </Button> */}
        </div>
      </div>
      <Table.Root style={{ maxWidth: 800 }}>
        <Table.Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell checkbox>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>name</Table.Cell>
              <Table.Cell>email</Table.Cell>
              <Table.Cell>created at</Table.Cell>
              <Table.Cell>tags</Table.Cell>
              <Table.Cell checkbox />
            </Table.Row>
          </Table.Head>
          <Table.Body style={{ verticalAlign: 'middle' }}>
            <Table.Row>
              <Table.Cell checkbox>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>John Doe</Table.Cell>
              <Table.Cell>john@doe.com</Table.Cell>
              <Table.Cell>13:21 3/2/2023</Table.Cell>
              <Table.Cell>
                <div className="display-flex gap-4">
                  <Badge type="danger">expired</Badge>
                </div>
              </Table.Cell>
              <Table.Cell checkbox>
                <Dropdown.Root>
                  <Dropdown.Trigger asChild>
                    <IconButton variant="ghost" size="1">
                      <DotsHorizontalIcon />
                    </IconButton>
                  </Dropdown.Trigger>
                  <Dropdown.Portal>
                    <Dropdown.Content style={{ minWidth: 220 }}>
                      <Dropdown.Group>
                        <Dropdown.Item>
                          <EnvelopeClosedIcon />
                          Send password recovery
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <CounterClockwiseClockIcon />
                          View payment history
                        </Dropdown.Item>
                      </Dropdown.Group>
                      <Dropdown.Separator />
                      <Dropdown.Group>
                        <Dropdown.Item type="danger">
                          <TrashIcon />
                          Delete record
                        </Dropdown.Item>
                      </Dropdown.Group>
                    </Dropdown.Content>
                  </Dropdown.Portal>
                </Dropdown.Root>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell checkbox>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>Dante Issaias</Table.Cell>
              <Table.Cell>dante@issaias.com</Table.Cell>
              <Table.Cell>16:27 9/2/2023</Table.Cell>
              <Table.Cell>
                <div className="display-flex gap-4">
                  <Badge>subuser</Badge>
                  <Badge type="info">basic</Badge>
                </div>
              </Table.Cell>
              <Table.Cell checkbox>
                <IconButton variant="ghost" size="1">
                  <DotsHorizontalIcon />
                </IconButton>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell checkbox>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>Robert Roe</Table.Cell>
              <Table.Cell>robert@roe.net</Table.Cell>
              <Table.Cell>11:32 8/1/2023</Table.Cell>
              <Table.Cell>
                <div className="display-flex gap-4">
                  <Badge type="success">admin</Badge>
                  <Badge type="info">pro</Badge>
                </div>
              </Table.Cell>
              <Table.Cell checkbox>
                <IconButton variant="ghost" size="1">
                  <DotsHorizontalIcon />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Table>
      </Table.Root>
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
        <h3>Dropdown</h3>

        <div className="display-flex gap-8">
          <Dropdown.Root>
            <Dropdown.Button>User</Dropdown.Button>
            <Dropdown.Portal>
              <Dropdown.Content style={{ minWidth: 230 }}>
                <Dropdown.Label>Label</Dropdown.Label>
                <Dropdown.Group>
                  <Dropdown.Item>Workspace Settings</Dropdown.Item>
                  <Dropdown.Item>Create or join workspace</Dropdown.Item>
                  <Dropdown.Item>Add an account</Dropdown.Item>
                </Dropdown.Group>
                <Dropdown.Separator />
                <Dropdown.Group>
                  <Dropdown.Item color="red">Log out</Dropdown.Item>
                </Dropdown.Group>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Checkbox</h3>
        <div className="display-flex gap-8">
          <Checkbox />
          <Checkbox indeterminate checked />
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
        <h3>Table</h3>
        <Table.Root style={{ maxWidth: 800 }}>
          <Table.Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell>name</Table.Cell>
                <Table.Cell>email</Table.Cell>
                <Table.Cell>password</Table.Cell>
                <Table.Cell>created at</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>john@doe.com</Table.Cell>
                <Table.Cell>*********</Table.Cell>
                <Table.Cell>03:21 3/2/2023</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </Table.Root>
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
                {Array.from({ length: 50 }).map(() => (
                  <div
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
            <ScrollArea.Scrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar orientation="horizontal">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
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
