import "../src/index.css";

import { render } from "solid-js/web";
import { Button, Card, Icons, TextField } from "../src";
import { createSignal } from "solid-js";

function App() {
  return (
    <main>
      <div
        style={{
          display: "grid",
          gap: "20px",
          color: "var(--gray-12)",
          padding: "25px",
        }}
      >
        <h3>Button</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          Sizes
          <Button size="1">Small</Button>
          <Button size="2">Medium</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Variants
          <Button>Default</Button>
          <Button ghost>Ghost</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Disabled
          <Button state="disabled">Default</Button>
          <Button ghost state="disabled">
            Ghost
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Loading
          <Button state="loading">Default</Button>
          <Button ghost state="loading">
            Ghost
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Only icon
          <Button icon size="1">
            <Icons.Upload />
          </Button>
          <Button icon>
            <Icons.Search />
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          With icon
          <Button size="1">
            <Icons.Upload /> Upload
          </Button>
          <Button>
            <Icons.Search /> Search
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
          color: "var(--gray-12)",
          padding: "25px",
        }}
      >
        <h3>Card</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <Card style={{ width: "300px" }}>This is the card content.</Card>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
          color: "var(--gray-12)",
          padding: "25px",
        }}
      >
        <h3>Text Field</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root size="1">
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Small" />
          </TextField.Root>

          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Medium" />
          </TextField.Root>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root isDisabled>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Disabled" />
          </TextField.Root>
          <TextField.Root validationState="invalid">
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Invalid" />
          </TextField.Root>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Description" />
            <TextField.Description>
              This is a description.
            </TextField.Description>
          </TextField.Root>

          <TextField.Root validationState="invalid">
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Error message" />
            <TextField.ErrorMessage>
              This is an error message.
            </TextField.ErrorMessage>
          </TextField.Root>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
          color: "var(--gray-12)",
          padding: "25px",
        }}
      >
        <h3>Example</h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            "flex-direction": "column",
            gap: "var(--space-4)",
            "max-width": "300px",
          }}
        >
          <TextField.Root>
            <TextField.Label>Email address</TextField.Label>
            <TextField.Input required type="email" placeholder="john@doe.com" />
          </TextField.Root>
          <TextField.Root>
            <TextField.Label>Password</TextField.Label>
            <TextField.Input required type="password" placeholder="••••••••" />
          </TextField.Root>
          <Button>Login</Button>
        </form>
      </div>
    </main>
  );
}

render(() => <App />, document.getElementById("root") as HTMLDivElement);
