import { PublicationEntry } from "../../components/PublicationEntry";
import { siteData } from "../../siteData";

export const metadata = {
  title: "Publications",
  alternates: {
    canonical: "/publications/",
  },
};

export default function PublicationsPage() {
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
