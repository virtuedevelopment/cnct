import React from "react";
import styles from "./portfolioItem.module.css";
import "../story.css";
import { getStoryblokApi, renderRichText } from "@storyblok/react";
import { normalizePortfolioItem } from "@/app/(components)/utils/normalizePortfolioItem";
import Link from "next/link";

export default async function PortfolioItem({ params }) {
  const sb = getStoryblokApi();
  const slug = params.slug; // "example_campaign"

  async function fetchStory(version) {
    const { data } = await sb.get(`cdn/stories/portfolio/${slug}`, { version });
    return data?.story;
  }

  let story;
  try {
    story = await fetchStory("published");
  } catch {
    story = await fetchStory("draft");
  }
  if (!story)
    return (
      <main className={styles.notFound}>
        <h1>Not found</h1>
      </main>
    );

  const item = normalizePortfolioItem(story);

  return (
    <>
      <div className="main">
        <Link href={"/portfolio"} className="button-main">
          Back to Portfolio
        </Link>
      </div>
      <main className="story-block-main">
        {/* Main page content */}
        <section className="story-block-header">
          <h1>{item.title}</h1>
          {item.cover && (
            <img src={item.cover} alt={item.title} className={styles.cover} />
          )}
        </section>

        <section className="story-block-body">
          <div className="details">
            {item.date && (
              <p>
                <strong>Published:</strong>{" "}
                {new Date(item.date).toLocaleDateString()}
              </p>
            )}

            {item.author && (
              <p>
                Published by <strong>{item.author}</strong>
              </p>
            )}
          </div>

          <div className="content">
            {item.description && (
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: renderRichText(item.description),
                }}
              />
            )}

            {item.gallery.length > 0 && (
              <div className="gallery">
                {item.gallery.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${item.title} ${i + 1}`}
                    className={styles.galleryImage}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="story-block-footer">
          <p>Additional Links:</p>
          {item.links.length > 0 && (
            <ul className="external-links">
              {item.links.map((l, i) => (
                <li key={i}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Optional: debug dump */}
        {/* <pre>{JSON.stringify(story, null, 2)}</pre> */}
      </main>
    </>
  );
}
