export function PublicationEntry({ item }) {
  const externalLinks = [
    { label: "pdf", href: item.links?.pdf, tone: "neutral" },
    { label: "code", href: item.links?.code, tone: "warm" },
    { label: "media", href: item.links?.media, tone: "cool" },
  ].filter((link) => Boolean(link.href));

  return (
    <article className="publication-entry">
      <div className="publication-year">{item.year}</div>
      <div className="publication-main">
        <h3>{item.title}</h3>
        <p className="publication-authors">{item.authors}</p>
        <p className="publication-venue">
          <em>{item.venue}</em>
        </p>
        <p>{item.abstract}</p>
        {externalLinks.length ? (
          <div className="publication-links">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                className={`publication-pill publication-pill-${link.tone}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
