import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import Cart from './Cart';
import {useState} from "react";

function App() {
const [products] = useState([
  {
    id : 1,
    name : 'Moto-G3',
    price : 35000,
    quantity:1
  }, 
  {
    id : 2,
    name : 'Samsung',
    price : 26000,
    quantity:1
  }, 
  {
    id : 3,
    name : 'Apple',
    price : 80000,
    quantity:1
  }, 
  {
    id : 4,
    name : 'MI',
    price : 15000,
    quantity:1
  }, 
  {
    id : 5,
    name : 'ipad',
    price : 150000,
    quantity:1
  }, 
  {
    id : 6,
    name : 'ipen',
    price : 30000,
    quantity:1
  }, 
])
  
  const [cartItems,setCartItems] = useState([])
 

  let addToCart = (item) => {
    setCartItems([...cartItems,item])
  }

  let removeFromCart = (item) =>{
   const indexVal = cartItems.findIndex(obj => obj.id == item.id)
   cartItems.splice(indexVal,1)
   setCartItems([...cartItems])

  }

  let quantity = (item) => {
     setCartItems([...cartItems])
     
  }
  return (
   <div className='container'>
    <div className='row'>
      <div className='col-lg-8'>
        <div className='row'>
          {
            products.map((item)=>{
              return <Card item={item} addToCart={addToCart} cartItems={cartItems}/>
            })
          }     
        </div>
      </div>
      <div className='col-lg-4'>
        <h3>Cart</h3>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} quantity={quantity}/>
        
      </div>

    </div>
   </div>
    
  );
}

export default App;
