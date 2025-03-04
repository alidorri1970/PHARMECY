import React from "react";
import styles from "./../styles/mainBanner.module.css";
import { Votes } from "./Votes";

export const MainBanner = () => {

    const options = [
        "Online selection and purchase",
        "Online selection, in-person purchase",
        "In-person selection and purchase"
      ];

  return (
    <>
      <div className={styles.transportBox}>
        <h4 className={styles.tranporttitle}>
          {"transportation Rouls".toUpperCase()}
          <img src="https://shop.erfanazadeh.com/image/health.png" alt="" />
        </h4>
        <img
          className={styles.tranportimg}
          src="https://shop.erfanazadeh.com/image/Delivery1.jpg"
          alt=""
        />
      </div>
      <div className={styles.votetBox}>
        <Votes options={options} />
      </div>
      <div className={styles.commentBox}>

      </div>
    </>
  );
};
