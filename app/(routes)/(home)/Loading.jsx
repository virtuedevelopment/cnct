export default function Loading() {
  return (
    <main className="main">
      {/* Hero/About skeleton */}
      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "1.2fr 1fr",
          alignItems: "center",
        }}
      >
        <div>
          <div className="skeleton-line" style={{ width: "40%", height: 32 }} />
          <div className="skeleton-line" style={{ width: "100%" }} />
          <div className="skeleton-line" style={{ width: "90%" }} />
          <div className="skeleton-line" style={{ width: "80%" }} />
          <div
            className="skeleton-pill"
            style={{ width: 160, height: 40, marginTop: 12 }}
          />
        </div>
        <div className="skeleton-thumb" style={{ aspectRatio: "4/3" }} />
      </section>

      {/* Portfolio teaser skeleton */}
      <section style={{ marginTop: 24 }}>
        <div className="skeleton-line" style={{ width: 220, height: 28 }} />
        <div className="skeleton-grid" style={{ marginTop: 12 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-thumb" />
              <div className="skeleton-line short" />
              <div className="skeleton-line" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
