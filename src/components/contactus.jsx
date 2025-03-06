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
              <a href="#footer">
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
          <div className={styles.addresbox} ref={footerRef}>
            <div>
              <h3>postal addres</h3>
              <p>
                Jamalzadeh Central Pharmacy : <br />
                Tehran - North Jamalzadeh Street - 200 meters above Forough
                Street - Before Nosrat Street - At the corner of Yazdan Shenas
                Alley - No. 251.
              </p>
              <p>
                postal number : <br />
                14188-44553
              </p>
            </div>
          </div>
          <div className={styles.callBox} id="footer">
            <div>
              <h3>phone call</h3>
              <p>
                Pharmaceuticals and Supplements Unit: <br />
                52862000 - 021 (Extension 1) <br />
                <br />
                Hygiene and Cosmetics Unit: <br />
                52862000 - 021 (Extension 2) <br />
                <br />
                Orthopedics and Medical Equipment Unit: <br />
                52862000 - 021 (Extension 3) <br />
                <br />
                Consultation with a Pharmacist Unit: <br />
                52862000 - 021 (Extension 4) <br />
                <br />
                Website Support Unit: <br />
                52862000 - 021 (Extension 5) <br />
                <br />
                Administrative Unit: <br />
                52862000 - 021 (Extension 6) <br />
                <br />
                Address Information: <br />
                52862000 - 021 (Extension 7) <br />
              </p>
            </div>
          </div>
          <div className={styles.emailBox} ref={footerRef}>
            <div>
              <h3>Email address</h3>
              <p>
                Information: <br /> info@darukade.com <br />
                <br />
                Sales Consultation: <br /> ads@darukade.com <br />
                <br />
                Support: <br /> support@darukade.com <br />
              </p>
            </div>
          </div>
          <div className={styles.commentBox} id="footer">
            <div>
          <h3>User Comments</h3>
          <form className={styles.form}>
            <lable> 
            first name last name : <br />
              <input type="text" placeholder="first + last name" />
            </lable><br />
            <lable>
            email address : <br />
              <input type="text" placeholder="Email" />
            </lable>
            <lable><br />
            subject : <br />
              <input type="text" placeholder="first + last name" />
            </lable>
            <lable><br />
            your comment / opinion : <br />
              <input type="text" placeholder="first + last name" />
            </lable>
            <button type="submit">submit</button>
          </form>
          </div>
          </div>
        </div>
        <Footer />
      </section>

    </div>
  );
};
