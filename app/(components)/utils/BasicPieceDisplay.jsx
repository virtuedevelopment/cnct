import React from "react";
import styles from "./utils.module.css";
import Link from "next/link";

export default function BasicPieceDisplay({ Piece }) {
  return (
    <Link
      href="/"
      className={styles.basic_piece_display}
      style={{
        "--piece-image": `url(${Piece.image})`,
      }}
    >
      <img alt={Piece.title} src={Piece.image} />
      <span>
        <h4>{Piece.title}</h4>
        <small>{Piece.author}</small>
        <p>{Piece.story}</p>
      </span>
    </Link>
  );
}
