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
          <img src="/assets/logo.svg" alt="" className="logo" />
          <p className={styles.definition}>
            {" "}
            <span>Connection </span>(v.) <br />
            The art of making people <span>feel</span> something. <br />
            Not just to be seen - but to be <span>felt</span>.{" "}
          </p>
          <p>
            We believe in the power of real human connection. In a world where
            things often feel automated, transactional, and impersonal, we bring
            it back to what truly matters — people.
          </p>
          <Link href={"/about"} className="button-main">
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
        {configurations.portfolio_2.map((piece) => (
          <BasicPieceDisplay key={piece.title} Piece={piece} />
        ))}
      </section>

      <section className={styles.contact_section}>
        <ContactForm />

        <div className={styles.reviews}>
          {configurations.reviews.map((review, index) => (
            <div key={index} className={styles.review_item}>
              <p>{review.review}</p>
              <small>{review.reviewer}</small>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.description}>
          <span>
            <h3>
              <b>"CNCT"</b> Journal
            </h3>
            <p>Stories, insights, and moments from behind the scenes.</p>
          </span>

          <span>
            <p className={styles.txt}>
              Welcome to our journal — a space for stories, insights, and
              updates. From travel tales and trend forecasts to media tips and
              trip recaps, this is where we share what moves us. It’s our way of
              flexing our storytelling muscles and keeping the site fresh,
              dynamic, and full of perspective.
            </p>
            <Link className="button-main" href={"/cnct-journal"}>
              Discover More...
            </Link>
          </span>
        </div>

        <img
          src="https://images.pexels.com/photos/8791249/pexels-photo-8791249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="featured image"
        />
      </section>
    </main>
  );
}
