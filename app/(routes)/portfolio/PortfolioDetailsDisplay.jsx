import React from "react";
import styles from "./page.module.css";
import { X } from "lucide-react";

export default function PortfolioDetailsDisplay({ portfolio_item, toggle }) {
  return (
    <section className={styles.portfolio_item_details_page}>
      {/* navigation area */}
      <nav>
        <button onClick={toggle}>
          <X strokeWidth={2.5} />
        </button>
      </nav>

      {/* title and details area   */}
      <div className={styles.details_box}>
        <h1>{portfolio_item.title}</h1>
        <h3>{portfolio_item.author}</h3>
        <small>{portfolio_item.date}</small>
      </div>

      {/* images carousel */}
      <div className={styles.image_box}>
        <img src={portfolio_item.image} alt={portfolio_item.title} />
      </div>

      {/* text explaination */}
    </section>
  );
}
