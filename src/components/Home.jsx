import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import { Footer } from "./Footer";
import { SliderBanner } from "./../components/shared/SliderBanner";
import { CategotyItem } from "./shared/categotyItem";

import clsx from "clsx";

import styles from "./../components/styles/home.module.css";
import Container from "./styles/header.module.css";
import { CategoryCard } from "./shared/categoryCard";
import { MainBanner } from "./shared/mainBanner";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("hello");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Header />
      <main>
        <SliderBanner />
        <CategotyItem setCategory={setCategory} />
        <div className={clsx(styles.shownItem, Container.container)}>
          <div>
            <span className={category !=="hello" ? styles.visible : styles.unvisible }>
            {posts.map((item) => (
              <CategoryCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                desP={item.description}
                sellerP={item.category}
                price={item.price}
                rates={item.rating}
              />
            ))}
            </span>
            <span className={category !=="hello" ? styles.unvisible : styles.visible }>
              <span className={styles.mainimage}>
                <img src="https://shop.erfanazadeh.com/image/LP1.jpg" alt="" />
                <img src="https://shop.erfanazadeh.com/image/banner-w30.jpg" alt="" />
                <img src="https://shop.erfanazadeh.com/image/banner-w70.jpg" alt="" />
              </span>
            </span>
          </div>
          <div>
            <MainBanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
