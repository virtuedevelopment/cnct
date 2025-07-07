import React from "react";
import styles from "./page.module.css";
import ContactForm from "@/app/(components)/utils/ContactForm";

export default function Contact() {
  return (
    <main className="main">
      <header></header>
      <section className={styles.contact}>
        <ContactForm></ContactForm>
        <img
          src="https://images.pexels.com/photos/31263006/pexels-photo-31263006/free-photo-of-skyline-view-of-modern-city-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="contact"
        />
      </section>
    </main>
  );
}
