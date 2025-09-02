import React from "react";
import styles from "./page.module.css";
import BasicPieceDisplay from "@/app/(components)/utils/BasicPieceDisplay";
import StoryblokClient from "storyblok-js-client";

export const revalidate = 300;

function toPiece(story) {
  const c = story?.content || {};
  return {
    title: c.title || story.name,
    image: c.cover?.filename || null,
    summary: c.summary || "",
    author: c.author || "",
    slug: "/" + story.full_slug, // e.g. /portfolio/example_campaign
  };
}

export default async function Portfolio() {
  const sb = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  });

  async function fetchList(version) {
    const { data } = await sb.get("cdn/stories", {
      version,
      per_page: 100,
      starts_with: "portfolio/",
      sort_by: "first_published_at:desc",
      // optional: ensure only portfolio items
      filter_query: { component: { in: "portfolio_item" } },
    });
    return data?.stories ?? [];
  }

  const version =
    process.env.STORYBLOK_PREVIEW === "true" ? "draft" : "published";
  const stories = await fetchList(version);

  const pieces = stories.map(toPiece);

  return (
    <main className="main">
      <header className={styles.selector}>
        {pieces.map((piece) => (
          <BasicPieceDisplay key={piece.slug} Piece={piece} />
        ))}
      </header>
    </main>
  );
}
