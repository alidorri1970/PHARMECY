import { useState } from "react";
import Header from "./header";
export function Product(props) {
  var [count, setCount] = useState(0);
  return (
    <>
    
      <div className="container">
        <img
          className="photo-product"
          src={props.photoP}
          alt=""
        />
        <h1 className="title-product">{props.titleP}</h1>
        <p className="des-product">
          {props.desP}
        </p>
        <img
          className="seller-logo"
          src={props.logoP}
          alt=""
        />
        <h3 className="seller-product">{props.sellerP}:</h3>
        <h2 className="price-product">{props.priceP}</h2>
        <h3 className="counter-number">in order: {ifCluse(count)}</h3>
        <button onClick={()=> setCount (count + 1)} className="increasement">+</button>
        <button onClick={()=> setCount (count - 1)} className="decreasement">-</button>
      </div>
    </>
  );
  function ifCluse(count){
    if(count < 1){
      return ":empty";
    }else{
      return count;
    }
  }
}
