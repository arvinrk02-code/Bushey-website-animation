export interface ClubDocument {
  name: string;
  desc: string;
  href: string;
  type: "pdf" | "doc";
}

export interface ExternalDocument {
  name: string;
  desc: string;
  href: string;
}

export const clubDocuments: ClubDocument[] = [
  {
    name: "Club constitution",
    desc: "Official rules and governance structure of the club.",
    href: "/documents/Bushey_ASC_Constitution_March2024.pdf",
    type: "pdf",
  },
  {
    name: "Gala consent form",
    desc: "Consent form for under-18 swimmers participating in galas.",
    href: "/documents/Gala-Consent.pdf",
    type: "pdf",
  },
  {
    name: "Gala consent (over 18)",
    desc: "Consent form for swimmers aged 18 and over.",
    href: "/documents/Gala-Consent-Over-18.pdf",
    type: "pdf",
  },
  {
    name: "Code of conduct: swimmers (under 18)",
    desc: "Behaviour expectations and responsibilities for junior swimmers.",
    href: "/documents/Code_of_Conduct_for_athletes_under_18.pdf",
    type: "pdf",
  },
  {
    name: "Code of conduct: swimmers (18+)",
    desc: "Standards and behaviour expectations for adult swimmers.",
    href: "/documents/Code_of_Conduct_for_athletes_18_and_over-1.pdf",
    type: "pdf",
  },
  {
    name: "Code of conduct: parents & guardians",
    desc: "Guidance for parents and guardians supporting swimmers.",
    href: "/documents/Code_of_conduct_for_parents_or_guardians-1.pdf",
    type: "pdf",
  },
  {
    name: "Code of conduct: coaches & teachers",
    desc: "Professional expectations for coaches and teachers.",
    href: "/documents/Code_of_conduct_for_coaches_and_teachers.pdf",
    type: "pdf",
  },
  {
    name: "Code of conduct: officials & volunteers",
    desc: "Standards for officials, committee members and volunteers.",
    href: "/documents/Code_of_Conduct_for_committee-members_officials_and_volunteers.pdf",
    type: "pdf",
  },
  {
    name: "Disability awareness statement",
    desc: "Club policy supporting inclusion and accessibility.",
    href: "/documents/Disability-Awareness.doc",
    type: "doc",
  },
  {
    name: "Disability self assessment",
    desc: "Self-assessment for swimmers requiring accommodations.",
    href: "/documents/DISABILITY-Self_Assessment-completed.doc",
    type: "doc",
  },
  {
    name: "Affiliation certificate",
    desc: "Swim England East Region affiliation certificate.",
    href: "/documents/Affiliation-Cert-Bushey-ASC.doc",
    type: "doc",
  },
  {
    name: "Club champs & time trials policy",
    desc: "Rules and procedures for Club Championships and time trials.",
    href: "/documents/BASC_Club_Champs_and_Time_Trials_policy-v1_3.doc",
    type: "doc",
  },
];

export const governingBodyDocuments: ExternalDocument[] = [
  {
    name: "Swim England code of ethics",
    desc: "Official national code of ethics.",
    href: "https://www.swimming.org/swimengland/about-us/who-we-are/code-of-ethics/",
  },
  {
    name: "Swim England anti-doping rules",
    desc: "National anti-doping policy for all competitive swimmers.",
    href: "https://www.swimming.org/swimengland/about-us/who-we-are/anti-doping/",
  },
  {
    name: "Legal advice information",
    desc: "Guidance on safeguarding, legal responsibilities, and reporting.",
    href: "https://www.swimming.org/swimengland/wavepower-child-safeguarding-for-clubs/legal-advice/",
  },
  {
    name: "Disability classification",
    desc: "Explanation of para-swimming disability classification.",
    href: "https://www.swimming.org/swimengland/swimming-governing-body/disability-swimming/disability-classification/",
  },
  {
    name: "Swimming stroke guidelines",
    desc: "Official stroke technique and compliance guidance.",
    href: "https://www.swimming.org/swimengland/about-us/who-we-are/laws-of-the-sport/",
  },
  {
    name: "Complaints procedures",
    desc: "Safeguarding reporting and complaints procedures.",
    href: "https://www.swimming.org/swimengland/wavepower-child-safeguarding-for-clubs/complaints/",
  },
];

export const privacyNoticeHref = "/documents/Club-Member-Privacy-Notice.pdf";
