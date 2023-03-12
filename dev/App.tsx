import {
  AddIcon,
  ArchiveIcon,
  CheckmarkIcon,
  ChevronDownIcon,
  CreditCardIcon,
  EditIcon,
  EllipsisHorizontalIcon,
  EnvelopeIcon,
  RemoveCircleIcon,
  StopIcon,
  SyncIcon,
  TrashIcon,
} from '@sanity/icons';
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
import '../src/index.css';

function Example() {
  return (
    <div className="display-flex fd-column gap-16">
      <div className="display-flex jc-space-between" style={{ maxWidth: 800 }}>
        <div className="display-flex gap-4 ai-center">
          <Button size="1">Add record</Button>
        </div>
        <div className="display-flex gap-4 ai-center">
          <Button color="red" size="1">
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
                  <Badge color="red">expired</Badge>
                </div>
              </Table.Cell>
              <Table.Cell checkbox>
                <Dropdown.Root>
                  <Dropdown.Trigger asChild>
                    <IconButton ghost>
                      <EllipsisHorizontalIcon />
                    </IconButton>
                  </Dropdown.Trigger>
                  <Dropdown.Portal>
                    <Dropdown.Content style={{ minWidth: 220 }}>
                      <Dropdown.Group>
                        <Dropdown.Item>
                          <EnvelopeIcon />
                          Send password recovery
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <CreditCardIcon />
                          View payment history
                        </Dropdown.Item>
                      </Dropdown.Group>
                      <Dropdown.Separator />
                      <Dropdown.Group>
                        <Dropdown.Item>
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
                  <Badge color="gray">subuser</Badge>
                  <Badge color="accent">basic</Badge>
                </div>
              </Table.Cell>
              <Table.Cell checkbox>
                <IconButton ghost>
                  <EllipsisHorizontalIcon />
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
                  <Badge color="green">admin</Badge>
                  <Badge color="accent">pro</Badge>
                </div>
              </Table.Cell>
              <Table.Cell checkbox>
                <IconButton ghost>
                  <EllipsisHorizontalIcon />
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
          <Button>Gray</Button>
          <Button color="red">Red</Button>
          <Button color="green">Green</Button>
        </div>

        <div className="display-flex gap-8">
          <Button ghost>Gray</Button>
          <Button ghost color="red">
            Red
          </Button>
          <Button ghost color="green">
            Green
          </Button>
        </div>

        <div className="display-flex gap-8">
          <Button disabled>Gray</Button>
          <Button disabled color="red">
            Red
          </Button>
          <Button disabled color="green">
            Green
          </Button>
        </div>

        <div className="display-flex gap-8">
          <Button disabled ghost>
            Gray
          </Button>
          <Button disabled ghost color="red">
            Red
          </Button>
          <Button disabled ghost color="green">
            Green
          </Button>
        </div>

        <div className="display-flex gap-8">
          <Button loading>Gray</Button>
          <Button loading color="red">
            Red
          </Button>
          <Button loading color="green">
            Green
          </Button>
        </div>

        <div className="display-flex gap-8">
          <Button loading ghost>
            Gray
          </Button>
          <Button loading ghost color="red">
            Red
          </Button>
          <Button loading ghost color="green">
            Green
          </Button>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Icon Button</h3>

        <div className="display-flex gap-8">
          <IconButton size="1">
            <EditIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </div>

        <div className="display-flex gap-8">
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton color="red">
            <TrashIcon />
          </IconButton>
          <IconButton color="green">
            <CheckmarkIcon />
          </IconButton>
        </div>

        <div className="display-flex gap-8">
          <IconButton ghost>
            <ArchiveIcon />
          </IconButton>
          <IconButton color="red" ghost>
            <TrashIcon />
          </IconButton>
          <IconButton color="green" ghost>
            <CheckmarkIcon />
          </IconButton>
        </div>

        <div className="display-flex gap-8">
          <IconButton disabled>
            <ArchiveIcon />
          </IconButton>
          <IconButton loading>
            <SyncIcon />
          </IconButton>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>Dropdown</h3>

        <div className="display-flex gap-8">
          <Dropdown.Root>
            <Dropdown.Button>
              User
              <ChevronDownIcon />
            </Dropdown.Button>
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
                  <Dropdown.Item>Log out</Dropdown.Item>
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
          <Badge color="red">Red</Badge>
          <Badge color="green">Green</Badge>
          <Badge color="accent">Accent</Badge>
        </div>
      </div>

      <div className="p-24 gap-16 display-flex fd-column">
        <h3>
          Table <Badge>Work in progress</Badge>
        </h3>
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
        <h3>
          Scroll Area <Badge>Work in progress</Badge>
        </h3>

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
