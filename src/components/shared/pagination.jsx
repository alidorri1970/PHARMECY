import React from "react";
import styles from "./../styles/pagination.module.css"

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} href='' className={styles.pageLink}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
