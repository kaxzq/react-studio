import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


console.log(cart);

  return (
    <div className="App">
      <h1 className="App-h1">Zhaoqi's Bakery</h1>
      <div className="page">
      <div className="App-container">
      {bakeryData.map((item, index) => (

        <BakeryItem key={index} bakery={item} image={item.image} count={item.count} setCart={setCart} cart={cart} total={total} setTotal={setTotal}></BakeryItem>
 
      ))}
      </div>
    <div>
        <h2 className="cart-h2">Cart</h2>
        <div>{cart.map((item, index) => (<h5 className="item-h5" key={index}>{item.count} x {item.name}</h5>))}</div>
        <div><h4 className="total-h4">Total: ${total.toFixed(2)}</h4></div>
      </div>
      </div>
    </div>
  );
}

export default App;
