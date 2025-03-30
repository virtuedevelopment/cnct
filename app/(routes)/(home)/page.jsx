import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <header className={styles.header}>
        <img
          src="https://i2.wp.com/francinebelle.com/wp-content/uploads/2017/01/starry-night-forest-nature-gif-4.gif?fit=500%2C264&ssl=1"
          alt="place holder"
        />
        <h1>
          CNCT <span>©</span>
        </h1>
      </header>
    </main>
  );
}
