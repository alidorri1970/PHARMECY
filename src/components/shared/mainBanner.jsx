import React, { useContext } from "react";
import styles from "./../styles/mainBanner.module.css";
import { Votes } from "./Votes";
import { shopContext } from "../context/shopcontext";
import human from "./../../assets/humanHead.svg";

export const MainBanner = () => {
  const options = [
    "Online selection and purchase",
    "Online selection, in-person purchase",
    "In-person selection and purchase",
  ];

  const { formdata } = useContext(shopContext);
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
        <h4 className={styles.commenttitle}>
          {"comments".toUpperCase()}
          <img src="https://shop.erfanazadeh.com/image/health.png" alt="" />
        </h4>
        <ul>
          <li className={formdata.email === "hello" ? styles.visible : styles.hidden}>
            <h5 className={styles.name}>
            <img src={formdata !== "" ? "" : human} alt="" />
              {formdata.name
              }
            </h5>
            <p className={styles.emailpart}>
              {formdata.email}
            </p>
            <span className={styles.subject}>{formdata.subject}my comment</span>
            <p className={styles.comment}>
              {formdata.comments}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
