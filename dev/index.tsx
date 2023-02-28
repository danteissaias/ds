import { createSignal } from "solid-js";
import { render } from "solid-js/web";

import { Button, Card, Icons, TextField } from "../src";
import "../src/index.css";

function LoginExample() {
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setError(true);
        }, 2000);
      }}
      style={{
        display: "flex",
        "flex-direction": "column",
        gap: "var(--space-4)",
        "max-width": "300px",
      }}
    >
      <TextField.Root
        onInput={() => setError(false)}
        validationState={error() ? "invalid" : "valid"}
      >
        <TextField.Label>Email address</TextField.Label>
        <TextField.Input required type="email" placeholder="john@doe.com" />
        <TextField.ErrorMessage>This email is invalid.</TextField.ErrorMessage>
      </TextField.Root>
      <TextField.Root>
        <TextField.Label>Password</TextField.Label>
        <TextField.Input required type="password" placeholder="••••••••" />
      </TextField.Root>
      <Button disabled={error()} loading={loading()}>
        {loading() ? "Logging in" : "Login"}
      </Button>
    </form>
  );
}

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
          <Button disabled>Default</Button>
          <Button ghost disabled>
            Ghost
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Loading
          <Button loading>Default</Button>
          <Button ghost loading>
            Ghost
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Only icon
          <Button icon aria-label="Upload" size="1">
            <Icons.Upload />
          </Button>
          <Button icon aria-label="Search">
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
        <h3>Input</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input size="1" placeholder="Small" />
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
        <h3>Text Area</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Default" />
          </TextField.Root>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root isDisabled>
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Disabled" />
          </TextField.Root>
          <TextField.Root validationState="invalid">
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Invalid" />
          </TextField.Root>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Description" />
            <TextField.Description>
              This is a description.
            </TextField.Description>
          </TextField.Root>

          <TextField.Root validationState="invalid">
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Error message" />
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
        <LoginExample />
      </div>
    </main>
  );
}

render(() => <App />, document.getElementById("root") as HTMLDivElement);
