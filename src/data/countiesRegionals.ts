export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceGroup = {
  title: string;
  note?: string;
  links: ResourceLink[];
};

const herts = "https://www.swimherts.org";
const east = "https://www.eastswimming.org";

export const hertfordshireGroups: ResourceGroup[] = [
  {
    title: "County Championships 2027",
    note: "Qualifying and consideration times for the next Hertfordshire County Championships season.",
    links: [
      {
        label: "2027 qualifying and consideration times (PDF)",
        href: `${herts}/wp-content/uploads/2026/05/2027-SEH-County-Championships-Qualifying-and-Consideration-times-.pdf`,
      },
      {
        label: "Swimming competitions (Swim England Hertfordshire)",
        href: `${herts}/swimming/swimming-competitions/`,
      },
    ],
  },
  {
    title: "Championship progression times (April 2026)",
    links: [
      {
        label: "County Championships",
        href: `${herts}/wp-content/uploads/2026/04/Championship-Progression-Times-2026.pdf`,
      },
      {
        label: "Junior Championships",
        href: `${herts}/wp-content/uploads/2026/04/Jnr-Champ-Progression-Times-2026.pdf`,
      },
      {
        label: "Relay progression times",
        href: `${herts}/wp-content/uploads/2025/02/SEHerts-Relay-Progression-Times-13.02.2025.pdf`,
      },
    ],
  },
  {
    title: "Championship best times (April 2026)",
    links: [
      {
        label: "County Championships",
        href: `${herts}/wp-content/uploads/2026/04/Championship-County-Best-Times-2026.pdf`,
      },
      {
        label: "Junior Championships",
        href: `${herts}/wp-content/uploads/2026/04/Jnr-Champ-County-Best-Times-2026.pdf`,
      },
      {
        label: "Relays",
        href: `${herts}/wp-content/uploads/2026/04/Swim-England-Hertfordshire-Relays-Best-Times-19.04.26.pdf`,
      },
    ],
  },
  {
    title: "Age group progression times (April 2026)",
    links: [
      { label: "10 and 11 years", href: `${herts}/wp-content/uploads/2026/04/10-11-Progression-Times-2026.pdf` },
      { label: "12 years", href: `${herts}/wp-content/uploads/2026/04/12-Progression-Times-2026.pdf` },
      { label: "13 years", href: `${herts}/wp-content/uploads/2026/04/13-Progression-Times-2026.pdf` },
      { label: "14 years", href: `${herts}/wp-content/uploads/2026/04/14-Progression-Times-2026.pdf` },
      { label: "15 years", href: `${herts}/wp-content/uploads/2026/04/15-Progression-Times-2026.pdf` },
      { label: "16 years and over", href: `${herts}/wp-content/uploads/2026/04/16-Progression-Times-2026.pdf` },
    ],
  },
  {
    title: "Age group best times (April 2026)",
    links: [
      { label: "10 and 11 years", href: `${herts}/wp-content/uploads/2025/02/1011-Years-County-Best-Times-13.02.2025.pdf` },
      { label: "12 years", href: `${herts}/wp-content/uploads/2026/04/12-County-Best-Times-2026.pdf` },
      { label: "13 years", href: `${herts}/wp-content/uploads/2026/04/13-County-Best-Times-2026.pdf` },
      { label: "14 years", href: `${herts}/wp-content/uploads/2026/04/14-County-Best-Times-2026.pdf` },
      { label: "15 years", href: `${herts}/wp-content/uploads/2026/04/15-County-Best-Times-2026.pdf` },
      { label: "16 years and over", href: `${herts}/wp-content/uploads/2026/04/16-County-Best-Times-2026.pdf` },
    ],
  },
  {
    title: "Results, trophies and more",
    links: [
      {
        label: "County champions and progressive times (full page)",
        href: `${herts}/swimming/county-champions-and-progressive-times/`,
      },
      {
        label: "2026 County Championships results",
        href: "https://results.swimming.org/counties/seh/2026/countychamps/",
      },
      {
        label: "Junior Champions historic list (2010–2026)",
        href: `${herts}/wp-content/uploads/2026/02/Individual-Trophy-Winner-History-2026-Junior-Champs.pdf`,
      },
      {
        label: "Open/Male and Women Open Champions historic list (2010–2026)",
        href: `${herts}/wp-content/uploads/2026/02/Individual-Trophy-winners-2026-with-History.xlsx.pdf`,
      },
      {
        label: "County development camps",
        href: `${herts}/county-development-camps/`,
      },
      {
        label: "Swimming results (Swim England Hertfordshire)",
        href: `${herts}/swimming/swimming-results/`,
      },
    ],
  },
];

export const eastRegionGroups: ResourceGroup[] = [
  {
    title: "2026 Short Course Championships",
    note: "Current season documents from Swim England East Region.",
    links: [
      {
        label: "Entry pack (PDF)",
        href: `${east}/wp-content/uploads/2026/06/ER-Short-Course-2026-Entry-Pack.pdf`,
      },
      {
        label: "Schedule (PDF)",
        href: `${east}/wp-content/uploads/2026/06/Swim-England-East-Region-Schedule-2026.pdf`,
      },
      {
        label: "Qualifying times (PDF)",
        href: `${east}/wp-content/uploads/2026/06/Qualifying-Times-2026.pdf`,
      },
      {
        label: "Coach, team manager and chaperone passes",
        href: `${east}/coach-and-team-manager-passes-for-regional-swimming-championships/`,
      },
    ],
  },
  {
    title: "2027 Swimming Championships",
    links: [
      {
        label: "Dates, locations and closing dates (PDF)",
        href: `${east}/wp-content/uploads/2026/06/Swimming-Championships-2027-Dates.pdf`,
      },
    ],
  },
  {
    title: "Records and results",
    links: [
      {
        label: "Short course regional records (April 2026)",
        href: `${east}/wp-content/uploads/2026/04/Short-Course-Swimming-Records-12042026.pdf`,
      },
      {
        label: "Long course regional records (April 2026)",
        href: `${east}/wp-content/uploads/2026/04/Long-Course-Swimming-Records-12.04.26.pdf`,
      },
      {
        label: "How to claim a regional record",
        href: `${east}/how-to-claim-a-record/`,
      },
      {
        label: "Swimming results (Swim England East Region)",
        href: `${east}/swimming/swimming-results/`,
      },
      {
        label: "Swimming records (Swim England East Region)",
        href: `${east}/swimming/swimming-records/`,
      },
    ],
  },
  {
    title: "Competitions and calendar",
    note: "East Region runs long course championships in spring/summer and short course in November. Details are published on the competitions page as each season opens.",
    links: [
      {
        label: "Swimming competitions (Swim England East Region)",
        href: `${east}/swimming/swimming-competitions/`,
      },
      {
        label: "East Region event calendar",
        href: `${east}/events/`,
      },
      {
        label: "Open water competitions",
        href: `${east}/open-water/open-water-competitions/`,
      },
    ],
  },
];

export const contacts = {
  hertfordshireSwimming: "swimming@swimherts.org",
  hertfordshireRecords: "records@swimherts.org",
  eastRegion: "swimming@eastswimming.org",
};
