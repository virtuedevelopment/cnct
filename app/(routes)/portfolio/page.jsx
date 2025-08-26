import React from "react";
import styles from "./page.module.css";
import Selector from "./Selector";
import { getStoryblokApi } from "@storyblok/react";

export default async function Portfolio() {
  const sb = getStoryblokApi();

  async function fetchList(version) {
    const { data } = await sb.get("cdn/stories", {
      version,
      per_page: 100,
      starts_with: "portfolio/", // fetch items inside the folder
      sort_by: "first_published_at:desc",
    });
    return data?.stories ?? [];
  }

  let stories = [];
  try {
    // If you only have a PUBLIC token, this should succeed.
    stories = await fetchList("published");
  } catch (e) {
    // If you’re using a PREVIEW token (or haven’t published yet), this will work.
    stories = await fetchList("draft");
  }
  return (
    <main className="main">
      <header className={styles.selector}>
        {stories.map((story) => (
          <Selector key={story.id} item={story} />
        ))}
      </header>
    </main>
  );
}
