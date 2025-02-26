import React from "react";
import Header from "./header";
import { Cards } from "./../components/shared/cards";
import styles from ".//styles/allproduct.module.css";
import container from "./styles/header.module.css";
import listIcon from "./../assets/list-svgrepo-com.svg";
import tableIcon from "./../assets/table-2-svgrepo-com.svg";
import { Pagination } from "./../components/shared/pagination";

import { Footer } from "./Footer";

import { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";

export const AllProducts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage] = useState(10);

  const [count, SetCount] = useState([]);
  const [sortsitem, SetSortsItem] = useState("newest");
  const [itemstyle, SetItemStyle] = useState(false);

  const [inputSearch, setInputSearch] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [1000]);

  function handelSortes(e) {
    e.preventDefault();
    const form = e.target;
    console.log(e.target.value);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const results = currentPosts.filter((item) =>
    item.title?.toLowerCase().includes(inputSearch.toLowerCase()) 
  );


  return (
    <>
      <Header count={count} />
      <section>
        <div className={clsx(styles.banner, container.container)}>
          <img
            className={styles.bannerimage}
            src="https://shop.erfanazadeh.com/image/1.jpg"
            alt=""
          />
        </div>
        <div className={clsx(styles.sortingitems, container.container)}>
          <ul>
            <li>
              <form>
                <label>Sort by :</label>
                <select
                  className={styles.selectorbox}
                  onChange={(e) => SetSortsItem(e.target.value)}
                >
                  <option value="highest">Ascending price</option>
                  <option value="loest">Descending price</option>
                  <option value="populer">Most popular</option>
                  <option value="newest">Newest</option>
                </select>
              </form>
            </li>
            <li>
              <label>Search :</label>
              <input
                type="text"
                className={styles.search}
                placeholder="Type something..."
                onChange={(e) => setInputSearch(e.target.value)}
              />
            </li>
            <li className={styles.icones}>
              <button
                onClick={() => SetItemStyle((prev) => !prev)}
                style={{ border: "none" }}
              >
                <img src={listIcon} alt="" className={styles.listIcon} />
              </button>
              <button
                onClick={() => SetItemStyle((prev) => !prev)}
                style={{ border: "none" }}
              >
                <img src={tableIcon} alt="" className={styles.tableIcon} />
              </button>
            </li>
          </ul>
        </div>
        <div>
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <h1>{loading ? "Loading..." : ""}</h1>
          <div className={itemstyle ? styles.flexitems : styles.items}>
              
              {results.length > 0 ? (
                results.map(
                  (item) => (
                    <Cards
                      key={item.id} 
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      desP={item.description}
                      sellerP={item.category} 
                      price={item.price}
                      setCount={SetCount}
                      shopitem={count}
                      rates={item.rating}
                    />
                  )
                )
              ) : (
                currentPosts.map(
                  (item) => (
                    <Cards
                      key={item.id} 
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      desP={item.description}
                      sellerP={item.category} 
                      price={item.price}
                      setCount={SetCount}
                    />
                  )
                )
              )}
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
