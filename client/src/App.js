import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/products/:id"
          element={<ProductItem></ProductItem>}></Route>
        <Route exact path="/cart/" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
