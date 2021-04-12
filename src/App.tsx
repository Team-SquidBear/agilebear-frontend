import logo from './logo.svg';
import './App.css';
import LinkList from './components/LinkList/LinkList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LinkList />
      </header>
    </div>
  );
}

export default App;
