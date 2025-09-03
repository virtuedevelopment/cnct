import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Selector({ Item }) {
  return (
    <Link className={styles.selector_button} href={"/"}>
      <img src={Item.image} alt="cover photo" />
      <p>{Item.title}</p>
    </Link>
  );
}
