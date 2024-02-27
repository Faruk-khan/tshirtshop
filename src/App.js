
import './App.css';
import ItemComponent from './components/ItemComponent';
import CartProvider from './stored/CartProvider'

function App() {



  const shirts = [
    {
      id: 1,
      name: 'Adidas',
      description: 'New Adidas shirt',
      price: 20,
      quantityS: 3,
      quantityM: 5,
      quantityL: 7,
    },
    {
      id: 2,
      name: 'Nike Jordan ',
      description: 'Nike latest jordan shirt',
      price: 25,
      quantityS: 2,
      quantityM: 4,
      quantityL: 6,
    },
    // Add more shirts as needed
  ];
  return (
    <CartProvider>
    <div className="App">
      <div>
      <h1>T-shirt shop</h1>
      {shirts.map((shirt) =>(
         <ItemComponent
          key={shirt.id}
          name={shirt.name} 
          description={shirt.description}
          price={shirt.price}
          quantityS={shirt.quantityS}
          quantityM={shirt.quantityM}
          quantityL={shirt.quantityL}
         />
      ))}
    </div>
    </div>
    </CartProvider>
  );
}

export default App;
