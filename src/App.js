import logo from './logo.svg';
//import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListCointainer from './components/ItemListCointainer';


function App() {
  return (
    <div className='menu'>
      <ItemListCointainer greeting='Tech-House'/>
      <NavBar></NavBar>
      </div>
      );
}

      export default App;
