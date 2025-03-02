import styles from "./styles/header.module.css";
import shopIcone from "./../assets/shopping-icon.svg";
import calender from "./../assets/calender.svg";

import { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import { shopContext } from "./context/shopcontext";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Keyboard" },
];

function Header(props) {
  const messages = [
    "Welcome to our website!",
    "Don't miss today's special sale!",
    "Contact us for more information.",
    "Check out our latest products!",
  ];

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [index, setIndex] = useState(0);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to filter products on submit
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilteredProducts(results);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setCurrentMessage(messages[index]);
    }, 2000);

    return () => clearInterval(interval)
  }, [index]);

  const [isOpen, setIsOpen] = useState(false);
  const {cardItem} = useContext(shopContext);

  return (
    <>
      <section className={styles.header}>
        <div className={clsx(styles.banner, styles.container)}>
          <nav className={styles.navRight}>
            <ul>
              <Link to="/sign-in" className={styles.signin}>
                <li>SIGN-IN</li>
              </Link>
              <Link to="/Login" className={styles.login}>
                <li>LOGIN</li>
              </Link>
            </ul>
          </nav>
          <nav className={styles.navLeft}>
            <ul>
              <Link to="/" className={styles.home}>
                <li>HOME</li>
              </Link>
              <Link to="/allproducts" className={styles.product}>
                <li>PRODUCT</li>
              </Link>
              <Link to="/contactus" className={styles.contactus}>
                <li>CONTACT-US</li>
              </Link>
              <Link to="/inorder" className={styles.inorder}>
                <li>
                  <span>IN-ORDER</span>
                  <span>
                    <img
                      className={styles.ShopLogo}
                      src={shopIcone}
                      alt=""
                      style={{ width: "20px", color: "white" }}
                    />
                    {cardItem.length}   {/* order item number*/}
                  </span> 
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.bannerContent}>
          <img
            className={styles.logo}
            src="https://shop.erfanazadeh.com/image/logo.png"
            alt="Logo"
          />
          <span>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Production..."
                className={styles.search}
                style={{ padding: "8px", width: "250px", borderRadius: "5px" }}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <button type="submit" className={styles.button}>
                Search
              </button>
            </form>
          </span>
        </div>
      </section>

      <section>
          
      </section>

      <section className={styles.container}>
        <div className={styles.Ttable}>
          <div>
            <img src={calender} alt="" />
            <span className={styles.calenderp}>....{today}</span>
          </div>
          <h3 className={styles.bannertitle}>{currentMessage}</h3>
        </div>
      </section>
    </>
  );
}

export default Header;
