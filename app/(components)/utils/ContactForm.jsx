"use client";
import React, { useState } from "react";
import styles from "./utils.module.css";

export default function ContactForm() {
  return (
    <form className={styles.contact_form}>
      <h3>
        W<span>e work with brands, destinations, organizations, etc</span>
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
      <button>Submit</button>
    </form>
  );
}
