import React, { useContext } from "react";
import Header from "./header";
import { shopContext } from "./context/shopcontext";
import { InorderCard } from "./shared/inorderCard";

import styles from "./../components/styles/inorder.module.css";
import { Link } from "react-router-dom";

export const Inorder = () => {
  const { cardItem } = useContext(shopContext);
  return (
    <div>
      <Header />
      <InorderCard />
      <Link to="payment" className={styles.payment}>
        pay
      </Link>
    </div>
  );
};
