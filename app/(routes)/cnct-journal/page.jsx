import React from "react";
import styles from "./page.module.css";
import Selector from "./Selector";
import configurations from "@/_data/config";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Cnct_Journal() {
  return (
    <main className="main">

      <header className={styles.header}>
        <img src="/assets/logo.svg" alt="logo" />
        <h1>Cnct Journal</h1>
        <p>
          Welcome to our journal — a space for stories, insights, and updates.
          From travel tales and trend forecasts to media tips and trip recaps,
          this is where we share what moves us. It’s our way of flexing our
          storytelling muscles and keeping the site fresh, dynamic, and full of
          perspective.
        </p>
        <Link href={"#selector"}>
          <ArrowDown strokeWidth={1} />
        </Link>
      </header>

      <section id="selector" className={styles.selector_section}>
        <h2>View our latest posts</h2>
        <div className={styles.selector_grid}>
          {configurations.portfolio_2.map((item, index) => (
            <Selector key={index} Item={item} />
          ))}
        </div>
      </section>
      
    </main>
  );
}
