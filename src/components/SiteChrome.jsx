import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Sidebar } from "./Sidebar";

export function SiteChrome({ siteData, children }) {
  return (
    <div className="app-shell">
      <Sidebar siteData={siteData} />
      <div className="main-column">
        <NavBar />
        <main className="content">{children}</main>
        <Footer siteData={siteData} />
      </div>
    </div>
  );
}
