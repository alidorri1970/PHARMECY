import React, { useContext, useState, useEffect } from "react";
import { shopContext } from "../context/shopcontext";
import axios from "axios";

import Container from "./../../components/styles/header.module.css";
import styles from "./../../components/styles/inOrdercard.module.css";

export const InorderCard = () => {
  const [posts, setPosts] = useState([]);
  const { cardItem, removefromCard } = useContext(shopContext);

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

  // Extract IDs from cart items
  const targetIds = cardItem.map(item => item.id);

  // Filter products based on cart items
  const resultId = posts.filter(product => targetIds.includes(product.id));

  return (
    <div className={Container.container}>
      <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Total Price</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {resultId.map((item) => {
            // Find the corresponding count from cardItem
            const cartItem = cardItem.find(number => number.id === item.id);
            const quantity = cartItem ? cartItem.count : 0; // Default to 1 if count is missing

            return (
              <tr key={item.id}>
                <td>
                  <button onClick={() => removefromCard(item.id)}>Remove</button>
                </td>
                <td>${(item.price * quantity).toFixed(2)}</td>
                <td>{item.price}</td>
                <td>{quantity}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.image} alt={item.title} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};