"use client";
import React, { useState } from "react";
import styles from "./utils.module.css";

export default function ContactForm() {
  return (
    <form className={styles.contact_form}>
      <h3>
        We work with brands, destinations, organizations, etc
      </h3>
      <div className="inputbox">
        <input type="text" placeholder="Full Name*" required />
      </div>
      <div className="inputbox">
        <input type="text" placeholder="Email Address*" required />
      </div>
      <div className="inputbox">
        <input type="text" placeholder="Phone Number*" required />
      </div>
      <div className="inputbox">
        <input type="text" placeholder="Service Needed*" required />
      </div>
      <div className="inputbox">
        <textarea placeholder="Tell us more..."></textarea>
      </div>
      <button type="submit" className={styles.form_btn}>
        <p>Cnct with us</p>
      </button>
    </form>
  );
}
