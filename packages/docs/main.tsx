import "@danteissaias/ds/src/index.css";
import { render } from "solid-js/web";
import { Button, Card, Icons } from "@danteissaias/ds/src";

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
          <Button>Medium</Button>
          <Button size="3">Large</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Variants
          <Button>Default</Button>
          <Button ghost>Ghost</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Disabled
          <Button ghost state="disabled">
            Ghost
          </Button>
          <Button state="disabled">Default</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Loading
          <Button ghost state="loading">
            Ghost
          </Button>
          <Button state="loading">Default</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Only icon
          <Button icon ghost>
            <Icons.Search />
          </Button>
          <Button icon>
            <Icons.Upload />
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          With icon
          <Button ghost>
            <Icons.Search size="16" /> Search
          </Button>
          <Button>
            <Icons.Upload size="16" /> Upload
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

render(() => <App />, document.body);
