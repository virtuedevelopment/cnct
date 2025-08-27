// utils/normalizePortfolioItem.js
export function normalizePortfolioItem(story) {
    const c = story?.content || {};
    return {
        slug: "/" + (story?.full_slug || ""),
        title: c.title || story?.name || "",
        summary: c.summary || "",
        cover: c.cover?.filename || null,
        gallery: Array.isArray(c.gallery) ? c.gallery.map(g => g.filename).filter(Boolean) : [],
        author: c.author || "",
        date: c.date_published || story?.published_at || "",
        // keep only links that have BOTH label and url
        links: Array.isArray(c.links)
            ? c.links
                .map(l => ({ label: l?.label?.trim(), url: l?.url?.cached_url?.trim() }))
                .filter(l => l.label && l.url)
            : [],
        description: c.description || null,
    };
}
