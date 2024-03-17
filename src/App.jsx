import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
