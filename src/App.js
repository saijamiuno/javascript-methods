import logo from "./logo.svg";
import "./App.css";
import ReduceMehod from "./ReduceMehod";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        <ReduceMehod />
      </header>
    </div>
  );
}

export default App;
