import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer} >
      <small>CNCT 2025</small>
      <small>
        <Link href={"https://www.virtuetech.live/"}>Powered by Virtue</Link>
      </small>
    </footer>
  );
}
