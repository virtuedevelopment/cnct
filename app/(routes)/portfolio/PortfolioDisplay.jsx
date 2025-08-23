import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function PortfolioDisplay({ item }) {
  return (
    <>
      <Link href={"/"} className={styles.select}>
        <img src={item.image} alt="item selector" />
        <p>{item.title}</p>
      </Link>
    </>
  );
}
