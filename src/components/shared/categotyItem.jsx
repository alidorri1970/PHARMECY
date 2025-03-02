import React from "react";
import Container from "./../styles/header.module.css";
import styles from "./../../components/styles/categoryItem.module.css";

import clsx from "clsx";
import meanclothing from "./../../assets/men-clothes-svgrepo-com.svg";
import womanclothing from "./../../assets/women-dress-svgrepo-com.svg";
import jewelety from "./../../assets/diamond-ring-svgrepo-com.svg";
import device from "./../../assets/devices-svgrepo-com.svg";

export const CategotyItem = (props) => {

  const category=["men's clothing", "women's clothing", "jewelery", "electronics"];

  return (
    <div className={clsx(Container.container, styles.boxItem)}>
      <ul className={styles.ButtonGroup}>
        <li>
          <button onClick={()=> props.setCategory(category[0])}>
            <img src={meanclothing} alt="" />
          </button>
          <span>MEN'S CLOTHING</span>
        </li>
        <li>
          <button onClick={()=> props.setCategory(category[1])}>
            <img src={womanclothing} alt="" />
          </button>
          <span>WOMANS'S CLOTHING</span>
        </li>
        <li>
          <button onClick={()=> props.setCategory(category[2])}>
            <img src={jewelety} alt="" />
          </button>
          <span>JEWELERY</span>
        </li>
        <li>
          <button onClick={()=> props.setCategory(category[3])}>
            <img src={device} alt="" />
          </button>
          <span>ELECTRONICS</span>
        </li>
      </ul>
    </div>
  );
};
