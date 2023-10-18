import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1>Create or join to the room</h1>
      </header>

      <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        <div style={{ border: "1px solid black", borderRadius: "15px", padding: "20px", width: "163px" }}>
          <p>Create task room</p>
        </div>

        <div style={{ border: "1px solid black", borderRadius: "15px", padding: "20px", width: "163px" }}>
          <p>Join task room</p>
        </div>
      </div>
    </div>
  );
}

export default App;
