import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer title='Productos'/> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
