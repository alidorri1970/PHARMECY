import React from "react";
import { useRef } from "react";
import Header from "./header";
import { Footer } from "./Footer";

import styles from "./../components/styles/contactus.module.css";
import Container from "./../components/styles/header.module.css";

import phone from "./../assets/phone.svg";
import massage from "./../assets/massage.svg";
import sms from "./../assets/sms.svg";
import location from "./../assets/location.svg";

export const Contactus = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <section className={styles.contacmainbox}>
        <div className={Container.container}>
          <div className={styles.headcontent}>
            <span className={styles.hrefbutton}>
            <a href="#footer" >
              <img src={phone} alt="" />
              <span>Your comments</span>
            </a>
            </span>
            <button className={styles.userefbutton} onClick={scrollToFooter}>
              <span>
              <img src={massage} alt="" />
              <span>Emails</span>
              </span>
            </button>

            <a href="#footer" className={styles.hrefbutton}>
              <img src={sms} alt="" />
              <span>Phone Number</span>
            </a>

            <button className={styles.userefbutton} onClick={scrollToFooter}>
            <span>
              <img src={location} alt="" />
              <span>Postal address</span>
              </span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <div id="footer" ref={footerRef}>
        erhgtrhryrjryjryj
      </div>
    </div>
  );
};
