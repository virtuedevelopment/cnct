import React from "react";
import styles from "./utils.module.css";
import Link from "next/link";


export default function BasicPieceDisplay({ Piece }) {
  return (
    <Link
      href={Piece.slug || "/"} // link to detail page if available
      className={styles.basic_piece_display}
      style={{
        "--piece-image": `url(${Piece.image})`,
      }}
    >
      {Piece.image && <img alt={Piece.title} src={Piece.image} />}
      <span>
        <h4>{Piece.title}</h4>
        {Piece.author && <small>{Piece.author}</small>}
        {Piece.summary && <p>{Piece.summary}</p>}
      </span>
    </Link>
  );
}
