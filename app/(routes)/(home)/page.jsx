import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import configurations from "@/_data/config";
import BasicPieceDisplay from "@/app/(components)/utils/BasicPieceDisplay";
import ContactForm from "@/app/(components)/utils/ContactForm";

export default function Home() {
  return (
    <main className="main">
      <header className={styles.header}>
        <div className={styles.about}>
          <h2>CNCT©</h2>
          <p>
            We believe in the power of real human connection. In a world where
            things often feel automated, transactional, and impersonal, we bring
            it back to what truly matters — people.
          </p>
          <Link href={"/"} className="button-simple">
            Discover More...
          </Link>
        </div>
        <div className={styles.portfolio}>
          {configurations.portfolio.map((piece) => (
            <BasicPieceDisplay key={piece.title} Piece={piece} />
          ))}
        </div>
      </header>

      <section className={styles.portfolio_section}>
        {configurations.portfolio.map((piece) => (
          <BasicPieceDisplay key={piece.title} Piece={piece} />
        ))}
      </section>
      
      <section className={styles.contact_section}>
        <ContactForm />
      </section>
    </main>
  );
}
