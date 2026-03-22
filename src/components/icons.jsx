export function Icon({ name }) {
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
    default:
      return <span aria-hidden="true" className="icon" />;
  }
}
