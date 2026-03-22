import { siteData } from "../../siteData";

export const metadata = {
  title: "Resume",
  alternates: {
    canonical: "/resume/",
  },
};

export default function ResumePage() {
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
