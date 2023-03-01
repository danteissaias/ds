import { createSignal, JSX } from "solid-js";
import { render } from "solid-js/web";

import { Button, Card, IconButton, Icons, TextField } from "../src";
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
      <Button loading={loading()}>{loading() ? "Logging in" : "Login"}</Button>
    </form>
  );
}

function ComponentName(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      style={{
        background: "var(--gray-3)",
        width: "max-content",
        padding: "var(--space-1) var(--space-2)",
        "border-radius": "var(--br-3)",
        "font-family": "var(--ff-mono)",
        color: "var(--gray-12)",
      }}
      {...props}
    />
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
        <ComponentName>Button</ComponentName>
        <div style={{ display: "flex", gap: "8px" }}>
          Sizes
          <Button size="1">Small</Button>
          <Button size="2">Medium</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Variants
          <Button>Default</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Disabled
          <Button disabled>Default</Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Loading
          <Button loading>Default</Button>
          <Button variant="ghost" loading>
            Ghost
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
        <ComponentName>IconButton</ComponentName>
        <div style={{ display: "flex", gap: "8px" }}>
          Sizes
          <IconButton aria-label="Upload" size="1">
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search">
            <Icons.Search />
          </IconButton>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Variants
          <IconButton aria-label="Upload">
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search" variant="ghost">
            <Icons.Search />
          </IconButton>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Disabled
          <IconButton aria-label="Upload" disabled>
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search" variant="ghost" disabled>
            <Icons.Search />
          </IconButton>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Loading
          <IconButton aria-label="Upload" loading>
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search" variant="ghost" loading>
            <Icons.Search />
          </IconButton>
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
        <ComponentName>Card</ComponentName>
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
        <ComponentName>TextField.Input</ComponentName>
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
        <ComponentName>TextField.TextArea</ComponentName>
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
        <ComponentName>LoginExample</ComponentName>
        <LoginExample />
      </div>
    </main>
  );
}

render(() => <App />, document.getElementById("root") as HTMLDivElement);
