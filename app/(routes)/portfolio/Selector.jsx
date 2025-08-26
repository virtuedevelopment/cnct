import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Selector({ item }) {
  const title = item.content?.title || item.name;
  const cover = item.content?.cover?.filename;
  const slug = "/" + item.full_slug; // so clicking goes to /portfolio/slug

  return (
    <Link href={slug} className={styles.select}>
      {cover && <img src={cover} alt={title} />}
      <p>{title}</p>
    </Link>
  );
}
