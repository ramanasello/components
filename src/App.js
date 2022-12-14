import logo from './/logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
// import { AiOutlineShoppingCart } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <AiOutlineShoppingCart/> */}
      <header className="App-header">
        <ItemListContainer titulo="Tienda de F1"/>
      
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
      </header>
    </div>
  );
}

export default App;
