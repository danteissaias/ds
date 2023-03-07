import '../src/index.css';
import { Button, Checkbox, Dropdown, IconButton, Icons, Table } from '../src';

export default function App() {
  return (
    <main>
      <div
        style={{
          display: 'grid',
          gap: 'var(--space-4)',
          padding: 'var(--space-5)',
        }}
      >
        <h3>Button</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button size="1">Small</Button>
          <Button>Medium</Button>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <Button>Gray</Button>
          <Button color="red">Red</Button>
          <Button color="green">Green</Button>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button ghost>Gray</Button>
          <Button ghost color="red">
            Red
          </Button>
          <Button ghost color="green">
            Green
          </Button>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <Button disabled>Gray</Button>
          <Button disabled color="red">
            Red
          </Button>
          <Button disabled color="green">
            Green
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
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
        <div style={{ display: 'flex', gap: 8 }}>
          <Button loading>Gray</Button>
          <Button loading color="red">
            Red
          </Button>
          <Button loading color="green">
            Green
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
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

      <div
        style={{
          display: 'grid',
          gap: 'var(--space-4)',
          padding: 'var(--space-5)',
        }}
      >
        <h3>Icon Button</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <IconButton size="1">
            <Icons.ReloadIcon />
          </IconButton>
          <IconButton>
            <Icons.UploadIcon />
          </IconButton>
          <IconButton ghost>
            <Icons.MagnifyingGlassIcon />
          </IconButton>
          <IconButton loading>
            <Icons.ArchiveIcon />
          </IconButton>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 20,
          color: 'var(--gray-12)',
          padding: 25,
        }}
      >
        <h3>Dropdown</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <Dropdown.Root>
            <Dropdown.Button>
              User
              <Icons.ChevronDownIcon />
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
                  <Dropdown.Item className="red">Log out</Dropdown.Item>
                </Dropdown.Group>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 'var(--space-4)',
          padding: 'var(--space-5)',
        }}
      >
        <h3>Example</h3>
        <div
          className="display-flex jc-space-between"
          style={{ maxWidth: 800 }}
        >
          <div className="display-flex ds-gap-2 ai-center">
            <IconButton size="1">
              <Icons.ReloadIcon />
            </IconButton>

            <Button size="1">Add record</Button>
          </div>
          <div className="display-flex ds-gap-2 ai-center">
            <Button size="1">Reset password</Button>
            <Button color="red" size="1">
              Delete 1 record
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
                <Table.Cell style={{ width: 0 }}>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>name</Table.Cell>
                <Table.Cell>email</Table.Cell>
                <Table.Cell>password</Table.Cell>
                <Table.Cell>created at</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body style={{ verticalAlign: 'middle' }}>
              <Table.Row
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={() => alert('Clicked row 1')}
              >
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>john@doe.com</Table.Cell>
                <Table.Cell>********</Table.Cell>
                <Table.Cell>13:21 3/2/2023</Table.Cell>
              </Table.Row>
              <Table.Row
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={() => alert('Clicked row 2')}
              >
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>Dante Issaias</Table.Cell>
                <Table.Cell>dante@issaias.com</Table.Cell>
                <Table.Cell>********</Table.Cell>
                <Table.Cell>16:27 9/2/2023</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </Table.Root>
      </div>
    </main>
  );
}
