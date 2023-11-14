import logo from "./logo.svg";
import "./App.css";
import ReduceMethod from "./ReduceMethod";
import JavaArray from "./JavaArray";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        <ReduceMethod />
        <JavaArray />
      </header>
    </div>
  );
}

export default App;
