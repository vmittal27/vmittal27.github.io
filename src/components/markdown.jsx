export function renderInlineMarkdown(text) {
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

export function renderMarkdownBlocks(content) {
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
