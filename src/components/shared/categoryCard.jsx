import React from "react";
import { useContext, useState } from "react";

import { shopContext } from "../context/shopcontext";
import clsx from "clsx";

import styles from "./../styles/categoryCard.module.css";
import Container from "./../styles/header.module.css";
import notFindPicture from "./../../assets/picture-not-find.jpg";
import placeholder1 from "./../../assets/slider/placeholder-1.jpg"
import placeholder2 from "./../../assets/slider/placeholder-2.jpg"
import placeholder3 from "./../../assets/slider/placeholder-3.jpg"
import placeholder4 from "./../../assets/slider/placeholder-4.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
];

export const CategoryCard = (props) => {
  const { cardItem, AddToCard } = useContext(shopContext);

  const settings = {
    customPaging: function (i) {
      return (
        <a href="#">
          <img src={images[i]} alt={`Thumbnail ${i}`} className={styles.thumbnail} />
        </a>
      );
    },
    dots: true,
    dotsClass: clsx(styles.slickDots, styles.slickthumb),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className={styles.box} key={props.id}>
        <div className={styles.slidercontainer}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={props.image ? props.image : notFindPicture}
                  alt={`Slide ${index}`}
                  className={styles.pictur}
                />
              </div>
            ))}
          </Slider>
        </div>
        <h3 className={styles.title}>{props.title.toUpperCase()}</h3>
        <span className={styles.rates}>
          POPULATED WITH: ⭐{"⭐".repeat(Math.round(props.rates.rate))}
        </span>
        <p className={styles.description}>{props.desP}</p>
        <button onClick={() => AddToCard(props.id)} className={styles.button}>
          + Add to Cart
        </button>
        <h6 className={styles.price}>{props.price} USD</h6> 
      </div>
    </>
  );
};
