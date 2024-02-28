
import './App.css';
import Header from './components/Header/Header';
import ItemComponent from './components/ItemComponent';
import SelecctedItem from './components/SelecctedItem';
import Cart from './components/Cart/Cart';
import { ProductProvider } from './stored/ProductContext';

function App() {


  return (
  
    <div className="App">
      <ProductProvider>
      <Header/>
      <ItemComponent/>
      <SelecctedItem/>
      <Cart/>
      </ProductProvider>
    </div>
  
  );
}
export default App;
