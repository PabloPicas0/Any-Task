import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold text-gray-100">Create or join to the room</h1>
      </header>

      <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        <div className="border border-slate-400 rounded-lg" style={{ padding: "20px", width: "163px" }}>
          <p className="text-gray-100">Create task room</p>
        </div>

        <div className="border border-slate-400 rounded-lg" style={{ padding: "20px", width: "163px" }}>
          <p className="text-gray-100">Join task room</p>
        </div>
      </div>
    </div>
  );
}

export default App;
