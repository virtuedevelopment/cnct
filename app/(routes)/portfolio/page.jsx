import React from "react";
import styles from "./page.module.css";
import configurations from "@/_data/config";
import Main_display from "@/app/(components)/portfolio_displays/Main_display";
import PortfolioDisplay from "./PortfolioDisplay";

export default function Portfolio() {
  return (
    <main className="main">
      <header className={styles.portfolio_selector}>
        {configurations.portfolio_2.map((item, index) => (
          <PortfolioDisplay key={index} item={item} />
        ))}
      </header>
    </main>
  );
}
