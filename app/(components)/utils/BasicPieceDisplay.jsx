import React from "react";
import styles from "./utils.module.css";
import Image from "next/image";

export default function BasicPieceDisplay({ Piece }) {
  return (
    <div className={styles.basic_piece_display}>
      <img alt={Piece.title} src={Piece.image} />
      <span>
        <p>{Piece.title}</p>
        <small>{Piece.author}</small>
      </span>
    </div>
  );
}
