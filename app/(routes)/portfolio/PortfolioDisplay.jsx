"use client";
import React, { useState } from "react";
import PortfolioDetailsDisplay from "./PortfolioDetailsDisplay";
import styles from "./page.module.css";

export default function PortfolioDisplay({ item }) {
  //use state to display portfolio detail section
  const [detailsOpened, setDetailsOpened] = useState(true);

  //functions to toggle open
  const toggleDetails = () => {
    setDetailsOpened(!detailsOpened);
  };

  return (
    <>
      <div onClick={toggleDetails} className={styles.select}>
        <img src={item.image} alt="item selector" />
        <p>{item.title}</p>
      </div>

      {detailsOpened && (
        <PortfolioDetailsDisplay portfolio_item={item} toggle={toggleDetails} />
      )}
    </>
  );
}
