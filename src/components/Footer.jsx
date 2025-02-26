import React from "react";
import clsx from "clsx";
import styles from "./styles/footer.module.css";
import container from "./styles/header.module.css";

import phone from "./../assets/phone.svg";
import massage from "./../assets/massage.svg";
import mobile from "./../assets/mobile.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section>
      <div className={clsx(container.container, styles.box)}>
        <address className={styles.address}>
          Address: Tehran - North Jamalzadeh Street - 200 meters above Foroughat
          Street - Corner of Yazdanshenas Alley - No. 251 - Jamalzadeh Central
          Pharmacy.
          <br />
          021-8845
        </address>
        <div className={styles.items}>
          <ul className={styles.contactList}>
            <h6>Ways to get in touch</h6>
            <li>
              <img src={phone} alt="" />
            </li>
            <li>
              <img src={massage} alt="" />
            </li>
            <li>
              <img src={mobile} alt="" />
            </li>
          </ul>
          <ul className={styles.hiring}>
            <h6>Hiring</h6>
            <li>
              <Link to="" className={styles.hiringLink}>
                Hiring conditions
              </Link>
            </li>
            <li>
              <Link to="" className={styles.hiringLink}>
                Submit Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrite}>
          <small>
            &copy; 2025 All rights of this website belong to Jamalzadeh Central
            Pharmacy. Non-commercial use (with source attribution) of the
            content on Darookadeh is permitted.
          </small>
        </div>
    </section>
  );
};
