import index from "./assets/index.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={index} className="placeholder" alt="Off. Upcycled clothing" />
      </header>
      <main>
        <a href="mailto:hey@off.limited">Email us to hey@off.limited</a>
      </main>
    </div>
  );
}

export default App;
