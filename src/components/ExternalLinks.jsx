const LINK_VARIANTS = [
  "external-link-0",
  "external-link-1",
  "external-link-2",
  "external-link-3",
  "external-link-4",
];

const MAX_EXTERNAL_LINKS = LINK_VARIANTS.length;

function validateLinks(links) {
  if (!Array.isArray(links)) {
    throw new Error("Expected links to be an array.");
  }

  if (links.length > MAX_EXTERNAL_LINKS) {
    throw new Error(`Expected at most ${MAX_EXTERNAL_LINKS} external links, received ${links.length}.`);
  }

  links.forEach((link, index) => {
    if (!link || typeof link.label !== "string" || typeof link.url !== "string") {
      throw new Error(`External link ${index + 1} must include string label and url fields.`);
    }
  });
}

export function ExternalLinks({ links = [] }) {
  validateLinks(links);

  if (!links.length) {
    return null;
  }

  return (
    <div className="external-links">
      {links.map((link, index) => (
        <a
          key={`${link.label}-${index}`}
          className={`external-link ${LINK_VARIANTS[index]}`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
