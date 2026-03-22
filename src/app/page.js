import { siteData } from "../siteData";
import { renderMarkdownBlocks } from "../components/markdown";

export default function HomePage() {
  return (
    <article className="page">
      <h1>{siteData.home.title}</h1>
      {renderMarkdownBlocks(siteData.home.content)}
    </article>
  );
}
