import { createSignal, JSX } from "solid-js";
import { render } from "solid-js/web";

import { Button, Card, Flex, IconButton, Icons, TextField } from "../src";
import "../src/index.css";

function LoginExample() {
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal();

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
    >
      <Flex direction="column" gap="4" style={{ "max-width": "300px" }}>
        <TextField.Root
          onInput={() => setError(false)}
          validationState={error() ? "invalid" : "valid"}
        >
          <TextField.Label>Email address</TextField.Label>
          <TextField.Input required type="email" placeholder="john@doe.com" />
          <TextField.ErrorMessage>
            This email is invalid.
          </TextField.ErrorMessage>
        </TextField.Root>
        <TextField.Root>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input required type="password" placeholder="••••••••" />
        </TextField.Root>
        <Button type="submit" loading={loading()}>
          {loading() ? "Logging in" : "Login"}
        </Button>
      </Flex>
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
  const [show, setShow] = createSignal(false);
  return (
    <main>
      <Flex direction="column" gap="4" m="5">
        <ComponentName>Button</ComponentName>
        <Flex gap="2">
          Sizes
          <Button size="1">Small</Button>
          <Button size="2">Medium</Button>
        </Flex>
        <Flex gap="2">
          Variants
          <Button>Default</Button>
          <Button variant="ghost">Ghost</Button>
        </Flex>
        <Flex gap="2">
          Disabled
          <Button disabled>Default</Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
        </Flex>
        <Flex gap="2">
          Loading
          <Button loading>Default</Button>
          <Button variant="ghost" loading>
            Ghost
          </Button>
        </Flex>
        <Flex gap="2">
          With icon
          <Button size="1">
            <Icons.Upload /> Upload
          </Button>
          <Button>
            <Icons.Search /> Search
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" gap="4" m="5">
        <ComponentName>IconButton</ComponentName>
        <Flex gap="2">
          Sizes
          <IconButton aria-label="Upload" size="1">
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search">
            <Icons.Search />
          </IconButton>
        </Flex>
        <Flex gap="2">
          Variants
          <IconButton aria-label="Upload">
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search" variant="ghost">
            <Icons.Search />
          </IconButton>
        </Flex>
        <Flex gap="2">
          Disabled
          <IconButton aria-label="Upload" disabled>
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search" variant="ghost" disabled>
            <Icons.Search />
          </IconButton>
        </Flex>
        <Flex gap="2">
          Loading
          <IconButton aria-label="Upload" loading>
            <Icons.Upload />
          </IconButton>
          <IconButton aria-label="Search" variant="ghost" loading>
            <Icons.Search />
          </IconButton>
        </Flex>
      </Flex>

      <Flex direction="column" gap="4" style={{ padding: "var(--space-5)" }}>
        <ComponentName>Card</ComponentName>
        <Flex gap="2">
          <Card style={{ width: "300px" }}>This is the card content.</Card>
        </Flex>
      </Flex>

      <Flex direction="column" gap="4" m="5">
        <ComponentName>TextField.Input</ComponentName>
        <Flex gap="2">
          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input size="1" placeholder="Small" />
          </TextField.Root>

          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Medium" />
          </TextField.Root>
        </Flex>
        <Flex gap="2">
          <TextField.Root isDisabled>
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Disabled" />
          </TextField.Root>
          <TextField.Root validationState="invalid">
            <TextField.Label>Label</TextField.Label>
            <TextField.Input placeholder="Invalid" />
          </TextField.Root>
        </Flex>
        <Flex gap="2">
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
        </Flex>
      </Flex>

      <Flex direction="column" gap="4" m="5">
        <ComponentName>TextField.TextArea</ComponentName>
        <Flex gap="2">
          <TextField.Root>
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Default" />
          </TextField.Root>
        </Flex>
        <Flex gap="2">
          <TextField.Root isDisabled>
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Disabled" />
          </TextField.Root>
          <TextField.Root validationState="invalid">
            <TextField.Label>Label</TextField.Label>
            <TextField.TextArea placeholder="Invalid" />
          </TextField.Root>
        </Flex>
        <Flex gap="2">
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
        </Flex>
      </Flex>

      <Flex direction="column" gap="4" m="5">
        <ComponentName>LoginExample</ComponentName>
        <LoginExample />
      </Flex>
    </main>
  );
}

render(() => <App />, document.getElementById("root") as HTMLDivElement);
