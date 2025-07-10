"use client"
import React, { useState } from "react";
import configurations from "@/_data/config";
import styles from "./page.module.css";

export default function PortfolioDisplay({ item }) {
  return (
    <>
      <div className={styles.select}>
        <img src={item.image} alt="item selector" />
        <p>{item.title}</p>
      </div>
    </>
  );
}
