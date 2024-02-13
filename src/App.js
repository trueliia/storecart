import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Products from './Components/ProductsComponents/Products';


function App() {
  return (
    <div className="App">
      <div className='block'>
        <Products/>
      </div>
      <div className='block'>
        <AllCategories/>
        <Cart/>
      </div>
    </div>
  );
}

export default App;
