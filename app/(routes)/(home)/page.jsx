import styles from "./page.module.css";
import Link from "next/link";
import configurations from "@/_data/config";
import BasicPieceDisplay from "@/app/(components)/utils/BasicPieceDisplay";
import ContactForm from "@/app/(components)/utils/ContactForm";
import StoryblokClient from "storyblok-js-client";

export const revalidate = 300; // seconds

function normalizePortfolioItem(story) {
  const c = story.content || {};
  return {
    title: c.title || story.name,
    image: c.cover?.filename || null,
    summary: c.summary || "",
    author: c.author || "",
    slug: "/" + story.full_slug, // → /portfolio/example_campaign
  };
}

export default async function Home() {
  const sb = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  });

  async function fetchPortfolio(version) {
    const { data } = await sb.get("cdn/stories", {
      version,
      per_page: 6,
      starts_with: "portfolio/",
      sort_by: "first_published_at:desc",
      filter_query: { component: { in: "portfolio_item" } },
    });
    return data?.stories ?? [];
  }

  const version =
    process.env.STORYBLOK_PREVIEW === "true" ? "draft" : "published";
  const stories = await fetchPortfolio(version);
  const pieces = stories.map(normalizePortfolioItem);

  return (
    <main className="main">
      <header className={styles.header}>
        <div className={styles.about}>
          <img src="/assets/logo.svg" alt="" className="logo" />
          <p className={styles.definition}>
            {" "}
            <span>Connection </span>(v.) <br />
            The art of making people <span>feel</span> something. <br />
            Not just to be seen - but to be <span>felt</span>.{" "}
          </p>
          <p>
            We believe in the power of real human connection. In a world where
            things often feel automated, transactional, and impersonal, we bring
            it back to what truly matters — people.
          </p>
          <Link href={"/about"} className="button-main">
            Discover More...
          </Link>
        </div>
        <img
          className={styles.home_img}
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=pexels-te-lensfix-380994-1371360.jpg&fm=jpg"
          alt="header image"
        />
      </header>

      <section className={styles.portfolio}>
        <h2>View our Portfolio</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          facilis dicta odit voluptatibus fuga fugiat iure natus! Consectetur
          animi architecto facere dolore sit, totam voluptas molestiae! Velit
          minima ex eaque.
        </p>

        <div className={styles.portfolio_section}>
          {pieces.map((piece) => (
            <BasicPieceDisplay key={piece.slug} Piece={piece} />
          ))}
        </div>
      </section>

      <section className={styles.contact_section}>
        <ContactForm />

        <div className={styles.reviews}>
          {configurations.reviews.map((review, index) => (
            <div key={index} className={styles.review_item}>
              <p>{review.review}</p>
              <small>{review.reviewer}</small>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.description}>
          <span>
            <h3>
              <b>Cnct</b> Journal
            </h3>
            <p>Stories, insights, and moments from behind the scenes.</p>
          </span>

          <span>
            <p className={styles.txt}>
              Welcome to our journal — a space for stories, insights, and
              updates. From travel tales and trend forecasts to media tips and
              trip recaps, this is where we share what moves us. It’s our way of
              flexing our storytelling muscles and keeping the site fresh,
              dynamic, and full of perspective.
            </p>
            <Link className="button-main" href={"/cnct-journal"}>
              Discover More...
            </Link>
          </span>
        </div>

        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=pexels-te-lensfix-380994-1371360.jpg&fm=jpg"
          alt="featured image"
        />
      </section>
    </main>
  );
}
