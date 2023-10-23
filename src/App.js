import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      '//HTML-теги - декларативный стиль всегда'
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{new Date().getFullYear()}</h1>'/* добавление даты - императивный
        стиль*/'
      </header>
    </div>
  );
}

export default App;
