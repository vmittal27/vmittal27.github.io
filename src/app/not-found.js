import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-row">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-message">This page could not be found.</p>
      </div>
      <Link className="download-button" href="/">
        Return Home
      </Link>
    </div>
  );
}
