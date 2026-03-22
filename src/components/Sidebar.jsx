import { Icon } from "./icons";

const sidebarItems = [
  { label: "Location", valueKey: "location", hrefKey: null, icon: "pin" },
  { label: "Institution", valueKey: "institution", hrefKey: null, icon: "building" },
  { label: "Email", valueKey: null, hrefKey: "email", icon: "mail" },
  { label: "ORCID", valueKey: null, hrefKey: "orcid", icon: "id" },
  { label: "GitHub", valueKey: null, hrefKey: "github", icon: "code" },
  { label: "LinkedIn", valueKey: null, hrefKey: "linkedin", icon: "linkedin" },
];

export function Sidebar({ siteData }) {
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
