import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "./header";
import { Footer } from "./Footer";
import { SliderBanner } from "./../components/shared/SliderBanner";
import { CategotyItem } from "./shared/categotyItem";

import clsx from "clsx";

import styles from "./../components/styles/home.module.css";
import Container from "./styles/header.module.css";
import { CategoryCard } from "./shared/categoryCard";

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
          </div>
          <div>
            fxhnhffdj
          </div>
        </div>
      </main>
      <Footer />
      {/*      <div>
        <h1>list items</h1>
        {posts.map((item, index) => (
          <Cards
            photoP={item.image}
            titleP={item.title}
            desP={item.description}
            sellerP={item.categpry}
            priceP={item.price}
          />
        ))}
      </div>*/}
    </>
  );
};
