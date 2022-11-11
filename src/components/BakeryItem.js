import "../App.css";
export default function BakeryItem(props) {
  return (
    <div className="BakeryItem">
      <img className="Bakery-img" src={props.image} alt={props.bakery.name}></img>
      <h1 className="Bakery-h1">{props.bakery.name}</h1>
      <h2 className="Bakery-h2">{props.bakery.description}</h2>
      <div className="Price-container">
        <h3 className="Bakery-h3">${props.bakery.price}</h3>
        <AddButton />
      </div>
    </div>
  );
  function AddButton() {
    function handleClick() {
      let newCart = props.cart;
      let i = newCart.findIndex(item => item.name == props.bakery.name);  
      if (i == -1) {
        props.setCart([...props.cart, {name: props.bakery.name, count: 1}]);
      } else {
        const c = newCart[i].count;
        newCart[i] = {name: props.bakery.name, count: c+1};
        props.setCart([...newCart]);
      }
      props.setTotal(props.total + props.bakery.price);
    }
    return (
       <button className="Bakery-button" onClick={handleClick}>Add to Cart</button>
    );
  }
}



