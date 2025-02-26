import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "./../components/shared/cards";
import Header from "./header";
import { Footer } from "./Footer";
import { SliderBanner } from "./../components/shared/SliderBanner";



export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <SliderBanner />
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
