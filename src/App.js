import { useState } from "react";
import "./App.css";
import { siteData } from "./siteData";

const navItems = [
  { key: "home", label: "Home" },
  { key: "publications", label: "Publications" },
  { key: "projects", label: "Projects" },
  { key: "cv", label: "Resume" },
];

const sidebarItems = [
  { label: "Location", valueKey: "location", hrefKey: null, icon: "pin" },
  { label: "Institution", valueKey: "institution", hrefKey: null, icon: "building" },
  { label: "Email", valueKey: null, hrefKey: "email", icon: "mail" },
  // { label: "Google Scholar", valueKey: null, hrefKey: "googleScholar", icon: "graduation" }, // TODO: uncomment once I have one LOL
  { label: "ORCID", valueKey: null, hrefKey: "orcid", icon: "id" },
  { label: "GitHub", valueKey: null, hrefKey: "github", icon: "code" },
  { label: "LinkedIn", valueKey: null, hrefKey: "linkedin", icon: "linkedin" },
];

function Icon({ name }) {
  switch (name) {
    case "pin":
      return (
        <svg className="icon icon-pin" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 22s7-6.2 7-13a7 7 0 1 0-14 0c0 6.8 7 13 7 13Z"
            fill="currentColor"
          />
          <circle cx="12" cy="9" r="2.4" fill="#f8f8f8" />
        </svg>
      );
    case "building":
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3 3 7v2h18V7l-9-4Zm-7 8h2v7H5v-7Zm4 0h2v7H9v-7Zm4 0h2v7h-2v-7Zm4 0h2v7h-2v-7ZM2 20h20v2H2z"
            fill="currentColor"
          />
        </svg>
      );
    case "mail":
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" />
          <path
            d="M5 8.5 12 13l7-4.5"
            fill="none"
            stroke="#f8f8f8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "graduation":
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 4 2 8l10 4 8-3.2V15h2V8L12 4Zm-5 9.2V17c0 1.8 2.3 3 5 3s5-1.2 5-3v-3.8l-5 2-5-2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "id":
      return (
        <svg className="icon icon-orcid" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <text x="12" y="15.2" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
            iD
          </text>
        </svg>
      );
    case "code":
      return (
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.35-3.85-1.35-.52-1.3-1.27-1.65-1.27-1.65-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.17 1.76 1.17 1.02 1.73 2.68 1.23 3.34.94.1-.72.4-1.22.72-1.5-2.54-.28-5.22-1.25-5.22-5.56 0-1.23.45-2.23 1.17-3.02-.12-.28-.5-1.42.11-2.95 0 0 .96-.3 3.13 1.16a10.98 10.98 0 0 1 5.7 0c2.16-1.46 3.12-1.16 3.12-1.16.61 1.53.23 2.67.11 2.95.73.79 1.17 1.79 1.17 3.02 0 4.32-2.69 5.28-5.25 5.55.41.35.78 1.03.78 2.08v3.08c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="icon icon-linkedin" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.55c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94V21h-4V9Z"
            fill="currentColor"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg className="icon icon-butterfly" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 11.5c-1.2-2.8-3.6-5.1-7-6.9-.7 3.8.1 6.9 2.4 9.1 1.6 1.6 3.2 2.2 4.6 1.9v-4.1Zm0 0c1.2-2.8 3.6-5.1 7-6.9.7 3.8-.1 6.9-2.4 9.1-1.6 1.6-3.2 2.2-4.6 1.9v-4.1Zm0 1c-1.4-.3-3 .3-4.6 1.9-2.3 2.2-3.1 5.2-2.4 9 3.4-1.7 5.8-4 7-6.8v-4.1Zm0 0c1.4-.3 3 .3 4.6 1.9 2.3 2.2 3.1 5.2 2.4 9-3.4-1.7-5.8-4-7-6.8v-4.1Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return <span aria-hidden="true" className="icon" />;
  }
}

function NavBar({ activePage, onNavigate }) {
  return (
    <header className="nav-bar">
      <button className="site-title" type="button" onClick={() => onNavigate("home")}>
        {siteData.siteTitle}
      </button>
      <nav aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={item.key === activePage ? "nav-link active" : "nav-link"}
            onClick={() => onNavigate(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        className="profile-image"
        src={siteData.profileImage}
        alt={`${siteData.name} profile`}
      />
      <h1>{siteData.name}</h1>
      <p className="sidebar-bio">{siteData.bio}</p>
      <ul className="sidebar-links">
        {sidebarItems.map((item) => {
          const href = item.hrefKey ? siteData.links[item.hrefKey] : null;
          const text = item.valueKey ? siteData[item.valueKey] : item.label;

          return (
            <li key={item.label}>
              <Icon name={item.icon} />
              {href ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function Footer() {
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

function renderInlineMarkdown(text) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (
      part.startsWith("*") &&
      part.endsWith("*") &&
      !(part.startsWith("**") && part.endsWith("**"))
    ) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");

      return (
        <a
          key={index}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {label}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function renderMarkdownBlocks(content) {
  const blocks = content.trim().split(/\n\s*\n/);

  return blocks.map((block, index) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

    if (!lines.length) {
      return null;
    }

    if (lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={index}>
          {lines.map((line, itemIndex) => (
            <li key={itemIndex}>{renderInlineMarkdown(line.slice(2))}</li>
          ))}
        </ul>
      );
    }

    if (lines[0].startsWith("## ")) {
      return <h2 key={index}>{lines[0].slice(3)}</h2>;
    }

    if (lines[0].startsWith("# ")) {
      return <h2 key={index}>{lines[0].slice(2)}</h2>;
    }

    return <p key={index}>{renderInlineMarkdown(lines.join(" "))}</p>;
  });
}

function HomePage() {
  return (
    <article className="page">
      <h1>{siteData.home.title}</h1>
      {renderMarkdownBlocks(siteData.home.content)}
    </article>
  );
}

function PublicationEntry({ item }) {
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

function PublicationsPage() {
  return (
    <article className="page">
      <h1>Publications</h1>
      <div className="publication-list">
        {siteData.publications.items.map((item, index) => (
          <PublicationEntry key={`${item.title}-${index}`} item={item} />
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-copy">
        <div className="project-card-header">
          <p className="project-date">{project.date}</p>
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
        {project.externalUrl ? (
          <a className="project-link" href={project.externalUrl} target="_blank" rel="noreferrer">
            {project.externalText || "Visit project"}
          </a>
        ) : null}
      </div>
      <div className="project-image-shell">
        <img src={project.image} alt={project.alt} />
      </div>
    </article>
  );
}

function ProjectsPage() {
  return (
    <article className="page">
      <h1>Projects</h1>
      <p className="projects-intro">
        Selected projects. More of my work can be found on my{" "}
        <a href={siteData.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <div className="projects-grid">
        {siteData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </article>
  );
}

function CVPage() {
  return (
    <article className="page">
      <div className="page-header">
        <h1>Resume</h1>
        <a className="download-button" href={siteData.cv.downloadUrl}>
          Download
        </a>
      </div>
      <div className="pdf-embed">
        <iframe title="Resume PDF" src={siteData.cv.embedUrl} />
      </div>
    </article>
  );
}

function App() {
  const initialPage = window.location.pathname.replace("/", "") || "home";
  const normalizedInitialPage = navItems.some((item) => item.key === initialPage)
    ? initialPage
    : "home";
  const [activePage, setActivePage] = useState(normalizedInitialPage);

  const navigate = (page) => {
    const nextPath = page === "home" ? "/" : `/${page}`;
    window.history.pushState({}, "", nextPath);
    setActivePage(page);
  };

  let pageContent = <HomePage />;

  if (activePage === "publications") {
    pageContent = <PublicationsPage />;
  }

  if (activePage === "projects") {
    pageContent = <ProjectsPage />;
  }

  if (activePage === "cv") {
    pageContent = <CVPage />;
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-column">
        <NavBar activePage={activePage} onNavigate={navigate} />
        <main className="content">{pageContent}</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
