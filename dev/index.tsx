import "../src/index.css";

import { createRoot } from "react-dom/client";
import { Button, Card, Dropdown, Icons } from "../src";

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
        <h3>Card</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <Card style={{ width: "300px" }}>This is the card content.</Card>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: 20,
          color: "var(--gray-12)",
          padding: 25,
        }}
      >
        <h3>Dropdown</h3>
        <div style={{ display: "flex", gap: 8 }}>
          <Dropdown.Root modal={false}>
            <Dropdown.Button size="1">
              User
              <Icons.ChevronDown size="16" />
            </Dropdown.Button>
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
          </Dropdown.Root>
        </div>
      </div>
    </main>
  );
}

const root = document.getElementById("root");

if (!root) throw Error("No root element found");

createRoot(root).render(<App />);
