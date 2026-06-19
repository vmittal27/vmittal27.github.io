import { ExternalLinks } from "./ExternalLinks";

export function PublicationEntry({ item }) {
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
        <ExternalLinks links={item.links} />
      </div>
    </article>
  );
}
