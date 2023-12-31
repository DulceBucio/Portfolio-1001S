import logo from './logo.svg';
import styles from './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Projects></Projects>
    </div>
  );
}

export default App;
