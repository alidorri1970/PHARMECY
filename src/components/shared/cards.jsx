import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

import Header from "../header";
import styles from "./../styles/cards.module.css";
import notFindPicture from "./../../assets/picture-not-find.jpg";
import { shopContext } from "../context/shopcontext";

export function Cards(props) {

    const {cardItem, AddToCard} =useContext(shopContext);
  
  return (
    <>
      <div className={styles.box} key={props.id}>
        <img
          className={styles.pictur}
          src={props.image ? props.image : notFindPicture}
          alt="notFound"
        />
        <span>{"⭐".repeat(Math.round(props.rates.rate))}</span>
        <h3 className={styles.title}>{props.title}</h3>
        <button onClick={() => AddToCard(props.id)} className={styles.button}>
          + Add to Cart
        </button>6
        <h6 className={styles.price}>{props.price} USD</h6>
      </div>
    </>
  );
  function ifCluse(count) {
    //    if (count < 1) {
    //     return ":empty";
    //   } else {
    //     return count;
    //   }
    // {count < 1 ? ":empty" : count}; turnary opprator
    // { count === 1 && "one things in order"} when it just 1
    // if(count < 1) return ":empty";
    // else return count;
    {
      /*      <div className="container">
        <img className="photo-product" src={props.photoP} alt="" />
        <h1 className="title-product">{props.titleP}</h1>
        <p className="des-product">{props.desP}</p>
        <img className="seller-logo" src={props.logoP} alt="" />
        <h3 className="seller-product">{props.sellerP}:</h3>
        <h2 className="price-product">{props.priceP}</h2>
        <h3 className="counter-number">
          in order: {count < 1 ? ":empty" : count};
        </h3>
        <button onClick={handelIncrease} className="increasement">
          +
        </button>
        <button onClick={handelDecrease} className="decreasement">
          -
        </button>
      </div>*/
    }
  }
}
