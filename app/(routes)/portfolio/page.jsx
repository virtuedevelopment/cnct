import React from "react";
import styles from "./page.module.css";
import configurations from "@/_data/config";
import Main_display from "@/app/(components)/portfolio_displays/Main_display";

export default function Portfolio() {
  return (
    <main className="main">
      <header>
        <h1>PORTFOLIO</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          numquam corrupti, ab facilis, atque, suscipit modi temporibus enim
          beatae neque aliquam pariatur natus impedit unde minima earum rerum?
          Quos, nulla.
        </p>
      </header>
      <section className={styles.portfolio_display}>
        {configurations.portfolio.map((index, piece) => (
          <Main_display key={index} portfolio={piece}></Main_display>
        ))}
      </section>
    </main>
  );
}
