const LINK_COLORS = {
  gray: { background: "#c8cbd0", color: "#2b3138" },
  teal: { background: "#bfe0e3", color: "#26464d" },
  coral: { background: "#e9b9b4", color: "#5d2e2a" },
  green: { background: "#b5d6b2", color: "#2c4629" },
  gold: { background: "#ebdcae", color: "#6f5b20" },
};

const ALLOWED_COLORS = Object.keys(LINK_COLORS);

function validateLinks(links) {
  if (!Array.isArray(links)) {
    throw new Error("Expected links to be an array.");
  }

  if (links.length > ALLOWED_COLORS.length) {
    throw new Error(`Expected at most ${ALLOWED_COLORS.length} external links, received ${links.length}.`);
  }

  const usedColors = new Set();

  links.forEach((link, index) => {
    if (!link || typeof link.label !== "string" || typeof link.url !== "string") {
      throw new Error(`External link ${index + 1} must include string label and url fields.`);
    }

    if (!ALLOWED_COLORS.includes(link.color)) {
      throw new Error(
        `External link ${index + 1} ("${link.label}") has color "${link.color}", but must be one of: ${ALLOWED_COLORS.join(", ")}.`
      );
    }

    if (usedColors.has(link.color)) {
      throw new Error(
        `External link ${index + 1} ("${link.label}") reuses color "${link.color}"; each color can be used at most once per card.`
      );
    }

    usedColors.add(link.color);
  });
}

export function ExternalLinks({ links = [] }) {
  validateLinks(links);

  if (!links.length) {
    return null;
  }

  return (
    <div className="external-links">
      {links.map((link) => (
        <a
          key={link.label}
          className="external-link"
          style={LINK_COLORS[link.color]}
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
