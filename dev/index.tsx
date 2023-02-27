import "../src/index.css";

import { createRoot } from "react-dom/client";
import { Button, Card, Icons } from "../src";

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
    </main>
  );
}

const root = document.getElementById("root");

if (!root) throw Error("No root element found");

createRoot(root).render(<App />);
