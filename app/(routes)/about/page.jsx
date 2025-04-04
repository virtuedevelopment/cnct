import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import configurations from "@/_data/config";

export default function About() {
  return (
    <main className="main_no_padding">
      <header className={styles.about_header}>
        <section>
          <h1>
            About <span>"cnct"</span> Public Relations
          </h1>
          <h4>
            Every brand has a unique identity, and our mission is to help you
            tell your story in a way that resonates.
          </h4>
          <p>
            At CNCT PR, we believe in the power of genuine human connection. In
            a world that often feels automated, transactional, and impersonal,
            we bring the focus back to what truly matters—people. Behind every
            business is a face, behind every product is a story, and behind
            every brand is a heartbeat. Our fingerprint logo says it all: <br />
            <br />
            every brand has a unique identity, and our mission is to help you
            share yours in a way that resonates.
            <img
              src="/assets/logo.svg"
              alt="our logo"
              className={styles.logo}
            />
            Featured in Forbes, Drift Travel Magazine, MNI Alive, and more, CNCT
            PR has led FAM trips, owned trade show floors, shaped impactful
            content strategies, and brought stories vividly to life—both on the
            ground and in the headlines. We are not just here to pitch; we are
            here to connect. Person to person. Story to story. Heart to heart.{" "}
            <br />
            <br />
            With sharp strategy, real-world expertise, and editorial edge, CNCT
            PR amplifies your voice and puts the human back into public
            relations. YOU are the story—let’s tell it together.
          </p>

          <Link className="button-main" href={"/portfolio"}>
            Discover more...
          </Link>
        </section>
        <img
          src="https://framerusercontent.com/images/aGo45aX4hOuEGjYrNwMYg2rTvM.png"
          alt="connection image"
        />
      </header>

      <section className={styles.what_we_do}>
        {/* <h2>"Connection"</h2> */}
        <div className={styles.description}>
          {configurations.what_we_do.map((item, index) => (
            <div key={index} className={styles.wwd_item}>
              <img src={item.img} alt="wwd image" />
              <span>
                <b>{item.title} ✦</b>
                <p>{item.description}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
