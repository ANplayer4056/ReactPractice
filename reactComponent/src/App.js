import logo from './logo.svg';
import './App.css';
import Father from './Father';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Father/>
      </header>
    </div>
  );
}

export default App;
