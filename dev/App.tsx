import '../src/index.css';
import { Button, Checkbox, IconButton, Icons, Table } from '../src';

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
            <Button color="red" size="1">
              Delete 2 records
            </Button>
            <Button color="green" size="1">
              Save 1 change
            </Button>
            <Button ghost size="1">
              Discard changes
            </Button>
          </div>
        </div>
        <Table.Root style={{ maxWidth: 800 }}>
          <Table.Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell style={{ width: 33 }}>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>id</Table.Cell>
                <Table.Cell>name</Table.Cell>
                <Table.Cell>email</Table.Cell>
                <Table.Cell>password</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body style={{ fontFamily: 'var(--ff-mono)' }}>
              <Table.Row>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell onDoubleClick={() => alert(1)}>
                  cle8fzo0c000708k21p3vftdw
                </Table.Cell>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>john@doe.com</Table.Cell>
                <Table.Cell>********</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>cleecx9hr000hz7t0toz8irb6</Table.Cell>
                <Table.Cell>Dante Issaias</Table.Cell>
                <Table.Cell>dante@issaias.com</Table.Cell>
                <Table.Cell>********</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </Table.Root>
      </div>
    </main>
  );
}
