"use client";
import React, { useState } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <nav className={styles.navigation}>
      <section className={styles.action}>
        <div className={styles.social_icons}>
          <Link href={"/"} className={styles.social_btn}>
            <Instagram strokeWidth={1.5} />
          </Link>

          <Link href={"/"} className={styles.social_btn}>
            <Twitter strokeWidth={1.5} />
          </Link>

          <Link href={"/"} className={styles.social_btn}>
            <Youtube strokeWidth={1.5} />
          </Link>

          <Link href={"/"} className={styles.social_btn}>
            <Linkedin strokeWidth={1.5} />
          </Link>
        </div>
        <Link href={"/"} className="button-simple">
          CNCT WITH US
        </Link>
      </section>
      <section className={styles.route_nav}>
        <h3>Share your story with us.</h3>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About Cnct</Link>
          </li>
          <li>
            <Link href={"/"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/"}>Cnct Journal</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>

        <button onClick={toggleNav} className="button-simple">
          Menu
        </button>
      </section>

      {mobileNav && (
        <div className={styles.mobile_menu_nav_open}>
          <button onClick={toggleNav} className="button-nav">
            Close
          </button>
          <ul>
            <li>
              <Link onClick={toggleNav} href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} href={"/"}>
                About Cnct
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} href={"/"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} href={"/"}>
                Cnct Journal
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} href={"/"}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
