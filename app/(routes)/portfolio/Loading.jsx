export default function Loading() {
  return (
    <main className="main">
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-thumb" />
            <div className="skeleton-line short" />
            <div className="skeleton-line" />
          </div>
        ))}
      </div>
    </main>
  );
}
