// _data/storyblok.js
import { storyblokInit, apiPlugin } from "@storyblok/react";

export function initStoryblok() {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    // pick the right region for your space:
    apiOptions: { region: "eu" }, // or "us"
  });
}

