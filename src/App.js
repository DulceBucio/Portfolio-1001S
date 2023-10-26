import logo from './logo.svg';
import styles from './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
