// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { Button, Dropdown, Card, Icons, TextField } from "./src";

// const App = () => (
//   <React.StrictMode>
//     <main>
//       <div
//         style={{
//           display: "grid",
//           gap: 20,
//           color: "var(--gray-12)",
//           padding: 25,
//         }}
//       >
//         <h3>Button</h3>
//         <div style={{ display: "flex", gap: 8 }}>
//           Normal
//           <Button size="1">Small</Button>
//           <Button>Medium</Button>
//         </div>
//         <div style={{ display: "flex", gap: 8 }}>
//           Ghost
//           <Button ghost size="1">
//             Small
//           </Button>
//           <Button ghost>Medium</Button>
//         </div>
//         <div style={{ display: "flex", gap: 8 }}>
//           Disabled
//           <Button ghost state="disabled">
//             Ghost
//           </Button>
//           <Button state="disabled" onClick={() => alert(1)}>
//             Default
//           </Button>
//         </div>
//         <div style={{ display: "flex", gap: 8 }}>
//           Loading
//           <Button ghost state="loading">
//             Ghost
//           </Button>
//           <Button state="loading">Default</Button>
//         </div>
//         <div style={{ display: "flex", gap: 8 }}>
//           Only icon
//           <Button icon ghost>
//             <Icons.Search />
//           </Button>
//           <Button icon>
//             <Icons.Upload />
//           </Button>
//         </div>
//         <div style={{ display: "flex", gap: 8 }}>
//           With icon
//           <Button ghost>
//             <Icons.Search size="16" /> Search
//           </Button>
//           <Button>
//             <Icons.Upload size="16" /> Upload
//           </Button>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "grid",
//           gap: 20,
//           color: "var(--gray-12)",
//           padding: 25,
//         }}
//       >
//         <h3>Dropdown</h3>
//         <div style={{ display: "flex", gap: 8 }}>
//           <Dropdown.Root>
//             <Dropdown.Button ghost>
//               User
//               <Icons.ChevronDown size="16" />
//             </Dropdown.Button>
//             <Dropdown.Content style={{ minWidth: 230 }}>
//               <Dropdown.Label>Label</Dropdown.Label>
//               <Dropdown.Group>
//                 <Dropdown.Item>Workspace Settings</Dropdown.Item>
//                 <Dropdown.Item>Create or join workspace</Dropdown.Item>
//                 <Dropdown.Item>Add an account</Dropdown.Item>
//               </Dropdown.Group>
//               <Dropdown.Separator />
//               <Dropdown.Group>
//                 <Dropdown.Item>Log out</Dropdown.Item>
//               </Dropdown.Group>
//             </Dropdown.Content>
//           </Dropdown.Root>
//           <Dropdown.Root>
//             <Dropdown.Button>
//               User
//               <Icons.ChevronDown size="16" />
//             </Dropdown.Button>
//             <Dropdown.Content style={{ minWidth: 230 }}>
//               <Dropdown.Label>Label</Dropdown.Label>
//               <Dropdown.Group>
//                 <Dropdown.Item>Workspace Settings</Dropdown.Item>
//                 <Dropdown.Item>Create or join workspace</Dropdown.Item>
//                 <Dropdown.Item>Add an account</Dropdown.Item>
//               </Dropdown.Group>
//               <Dropdown.Separator />
//               <Dropdown.Group>
//                 <Dropdown.Item>Log out</Dropdown.Item>
//               </Dropdown.Group>
//             </Dropdown.Content>
//           </Dropdown.Root>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "grid",
//           gap: 20,
//           color: "var(--gray-12)",
//           padding: 25,
//         }}
//       >
//         <h3>Card</h3>
//         <div style={{ display: "flex", gap: 8 }}>
//           <Card style={{ width: 300 }}>This is the card content.</Card>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "grid",
//           gap: 20,
//           color: "var(--gray-12)",
//           padding: 25,
//         }}
//       >
//         <h3>Input</h3>
//         <div style={{ display: "flex", gap: 8 }}>
//           <TextField.Root>
//             <TextField.Label>Email address</TextField.Label>
//             <TextField.Input placeholder="dante@issaias.com" />
//           </TextField.Root>
//         </div>
//       </div>
//     </main>
//   </React.StrictMode>
// );

// const app = document.getElementById("app");
// if (!app) throw new Error("Root element not found");
// ReactDOM.createRoot(app).render(<App />);

import { render } from "solid-js/web";
import { Button, Card, Icons } from "./src";
import "./src/index.css";

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
          Normal
          <Button size="1">Small</Button>
          <Button>Medium</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Ghost
          <Button ghost size="1">
            Small
          </Button>
          <Button ghost>Medium</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {" "}
          Disabled
          <Button ghost state="disabled">
            Ghost
          </Button>
          <Button state="disabled">Default</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {" "}
          Loading
          <Button ghost state="loading">
            Ghost
          </Button>
          <Button state="loading">Default</Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          Only icon
          <Button icon ghost>
            <Icons.FiSearch />
          </Button>
          <Button icon>
            <Icons.FiUpload />
          </Button>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          With icon
          <Button ghost>
            <Icons.FiSearch size="16" /> Search
          </Button>
          <Button>
            <Icons.FiUpload size="16" /> Upload
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
