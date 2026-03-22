import { Icon } from "./icons";

export function Footer({ siteData }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={siteData.links.src} target="_blank" rel="noreferrer">
          <Icon name="code" />
          Source
        </a>
      </div>
      <p>
        © {year} {siteData.name}
      </p>
      <p>Last Updated: {siteData.lastUpdated}</p>
    </footer>
  );
}
