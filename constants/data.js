const programs = [
  {
    id: 1,
    coverImg: "c1",
    name: "Name of Program1",
    level: "Beginner",
    type: "Self Study",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2024-12-01",
    category: "IT & AI",
  },
  {
    id: 2,
    coverImg: "c2",
    name: "Name of Program2",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2024-12-05",
    category: "Branding",
  },
  {
    id: 3,
    coverImg: "c3",
    name: "Name of Program3",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2024-12-10",
    category: "Business",
  },
  {
    id: 4,
    coverImg: "c4",
    name: "Name of Program4",
    level: "Beginner",
    type: "Online",
    duration: 19,
    price: 850,
    status: "Available",
    publishDate: "2024-12-15",
    category: "Management & Leadership",
  },
  {
    id: 5,
    coverImg: "c1",
    name: "Name of Program5",
    level: "Beginner",
    type: "Webinar",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2024-12-20",
    category: "Marketing & Sales",
  },
  {
    id: 6,
    coverImg: "c2",
    name: "Name of Program6",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2024-12-25",
    category: "Other",
  },
  {
    id: 7,
    coverImg: "c4",
    name: "Name of Program7",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-01-01",
    category: "IT & AI",
  },
  {
    id: 8,
    coverImg: "c1",
    name: "Name of Program8",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Sold Out",
    publishDate: "2025-01-05",
    category: "Branding",
  },
  {
    id: 9,
    coverImg: "c2",
    name: "Name of Program9",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-01-10",
    category: "Business",
  },
  {
    id: 10,
    coverImg: "c3",
    name: "Name of Program10",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-01-15",
    category: "Management & Leadership",
  },
  {
    id: 11,
    coverImg: "c4",
    name: "Name of Program11",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-01-20",
    category: "Marketing & Sales",
  },
  {
    id: 12,
    coverImg: "c1",
    name: "Name of Program12",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-01-25",
    category: "Other",
  },
  {
    id: 13,
    coverImg: "c2",
    name: "Name of Program13",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-02-01",
    category: "IT & AI",
  },
  {
    id: 14,
    coverImg: "c3",
    name: "Name of Program14",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-02-05",
    category: "Branding",
  },
  {
    id: 15,
    coverImg: "c4",
    name: "Name of Program15",
    level: "Beginner",
    type: "Online",
    duration: 19,
    price: 850,
    status: "Available",
    publishDate: "2025-02-10",
    category: "Business",
  },
  {
    id: 16,
    coverImg: "c1",
    name: "Name of Program16",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-02-15",
    category: "Management & Leadership",
  },
  {
    id: 17,
    coverImg: "c2",
    name: "Name of Program17",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-02-20",
    category: "Marketing & Sales",
  },
  {
    id: 18,
    coverImg: "c4",
    name: "Name of Program18",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-02-25",
    category: "Other",
  },
  {
    id: 19,
    coverImg: "c1",
    name: "Name of Program19",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Sold Out",
    publishDate: "2025-03-01",
    category: "IT & AI",
  },
  {
    id: 20,
    coverImg: "c2",
    name: "Name of Program20",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-03-05",
    category: "Branding",
  },
  {
    id: 21,
    coverImg: "c3",
    name: "Name of Program21",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-03-10",
    category: "Business",
  },
  {
    id: 22,
    coverImg: "c4",
    name: "Name of Program22",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-03-15",
    category: "Management & Leadership",
  },
  {
    id: 23,
    coverImg: "c1",
    name: "Name of Program23",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-03-20",
    category: "Marketing & Sales",
  },
  {
    id: 24,
    coverImg: "c2",
    name: "Name of Program24",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-03-25",
    category: "Other",
  },
  {
    id: 25,
    coverImg: "c3",
    name: "Name of Program25",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-04-01",
    category: "IT & AI",
  },
  {
    id: 26,
    coverImg: "c4",
    name: "Name of Program26",
    level: "Beginner",
    type: "Online",
    duration: 19,
    price: 850,
    status: "Available",
    publishDate: "2025-04-05",
    category: "Branding",
  },
  {
    id: 27,
    coverImg: "c1",
    name: "Name of Program27",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-04-10",
    category: "Business",
  },
  {
    id: 28,
    coverImg: "c2",
    name: "Name of Program28",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-04-15",
    category: "Management & Leadership",
  },
  {
    id: 29,
    coverImg: "c4",
    name: "Name of Program29",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-04-20",
    category: "Marketing & Sales",
  },
  {
    id: 30,
    coverImg: "c1",
    name: "Name of Program30",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Sold Out",
    publishDate: "2025-04-25",
    category: "Other",
  },
  {
    id: 31,
    coverImg: "c2",
    name: "Name of Program31",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-04-27",
    category: "IT & AI",
  },
  {
    id: 32,
    coverImg: "c3",
    name: "Name of Program32",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-04-29",
    category: "Branding",
  },
  {
    id: 33,
    coverImg: "c1",
    name: "Introduction to crypto currencies",
    level: "Beginner",
    type: "Online",
    duration: 20,
    price: 850,
    status: "Available",
    publishDate: "2025-05-01",
    category: "Business",
  },
];

const events = [
  {
    id: "01984217-c67c-714a-9b3f-7c63525a6dee",
    name: "Crypto Event",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-24",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-1",
    name: "Crypto Event #2",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-25",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-2",
    name: "Crypto Event #3",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-26",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-3",
    name: "Crypto Event #4",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-27",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-4",
    name: "Crypto Event #5",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-28",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-5",
    name: "Crypto Event #6",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-29",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-6",
    name: "Crypto Event #7",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-30",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-7",
    name: "Crypto Event #8",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-07-31",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-8",
    name: "Crypto Event #9",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-08-01",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-9",
    name: "Crypto Event #10",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-08-02",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-10",
    name: "Crypto Event #11",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-08-03",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-11",
    name: "Crypto Event #12",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-08-04",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-12",
    name: "Crypto Event #13",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-08-05",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
  {
    id: "mock-id-13",
    name: "Crypto Event #14",
    status: "Scheduled",
    about: "about of the event is here.",
    audience: [{ text: "audience one" }, { text: "audience two" }],
    avatar: "https://api.itaxim.ir/storage/4/01K12NM4Q5NYV36DN8HCGFMF0X.png",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    date: "2025-08-06",
    duration: 22,
    language: "English / Persian",
    lat: null,
    lng: null,
    level: "beginner",
    prerequisites: [
      { text: "'prerequisites one'" },
      { text: "'prerequisites two'" },
    ],
    price: 650,
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "'what one'" }, { text: "'what two'" }],
  },
];

const posts = [
  {
    id: 1,
    coverImg: "np1",
    name: "Name of News",
    level: "N/A",
    type: "NEWS",
    duration: 0,
    price: 0,
    status: "Published",
    publishDate: "2024-08-06",
    category: "Announcements",
  },
  {
    id: 2,
    coverImg: "np2",
    name: "Name of Post",
    level: "N/A",
    type: "POST",
    duration: 0,
    price: 0,
    status: "Published",
    publishDate: "2024-08-06",
    category: "Blog",
  },
  {
    id: 3,
    coverImg: "np3",
    name: "Name of News",
    level: "N/A",
    type: "NEWS",
    duration: 0,
    price: 0,
    status: "Published",
    publishDate: "2024-08-06",
    category: "Announcements",
  },
  {
    id: 4,
    coverImg: "np4",
    name: "Name of Post",
    level: "N/A",
    type: "POST",
    duration: 0,
    price: 0,
    status: "Published",
    publishDate: "2024-08-06",
    category: "Blog",
  },
];

const news = [
  {
    id: "01982c37-b8d2-7354-8b5d-b3bf76b7e2d3",
    name: "This is a title for slider This is a title for slider This is a title for slider",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    audience: [{ text: "Audience one" }, { text: "Audience two" }],
    avatar: "np1",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    language: "English / Persian",
    level: "beginner",
    prerequisites: [
      { text: "Prerequisites one" },
      { text: "Prerequisites two" },
    ],
    subject: "Talking about the crypto world",
    what_you_learn: [{ text: "What one" }, { text: "What two" }],
    category: "NEWS",
    like: 253,
    comments: 26,
    author: "Reza Bidari",
    date: "2024-12-01",
    description1: [
      {
        id: 11,
        title: "Title Of Lesson",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cover: "c1",
      },
      {
        id: 12,
        title: "Title Of Lesson",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cover: "c1",
      },
    ],
  },
  {
    id: "01982c38-b8d2-7354-8b5d-b3bf76b7e2d4",
    name: "Bitcoin price hits new all-time high",
    about:
      "Bitcoin surges past previous records amidst increasing institutional adoption and ETF approvals.",
    audience: [{ text: "Traders" }, { text: "Investors" }],
    avatar: "np2",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    language: "English",
    level: "intermediate",
    prerequisites: [{ text: "Basic trading knowledge" }],
    subject: "Bitcoin price movements",
    what_you_learn: [{ text: "Market trends" }],
    category: "NEWS",
    like: 340,
    comments: 58,
    author: "Elham Safari",
    date: "2025-01-15",
    description1: [
      {
        id: 21,
        title: "Bitcoin Rally Explained",
        content:
          "Experts believe the recent rally is due to positive ETF approval news and macroeconomic shifts...",
        cover: "c2",
      },
    ],
  },
  {
    id: "01982c39-b8d2-7354-8b5d-b3bf76b7e2d5",
    name: "Ethereum 2.0 launch gets delayed",
    about:
      "The much-anticipated upgrade to Ethereum’s consensus mechanism has been pushed back again.",
    audience: [{ text: "Developers" }, { text: "Crypto enthusiasts" }],
    avatar: "np3",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    language: "English / Persian",
    level: "advanced",
    prerequisites: [{ text: "Ethereum basics" }],
    subject: "Ethereum updates",
    what_you_learn: [{ text: "Proof of Stake" }],
    category: "NEWS",
    like: 147,
    comments: 19,
    author: "Sina Zarei",
    date: "2025-02-10",
    description1: [
      {
        id: 31,
        title: "Reasons Behind the Delay",
        content:
          "The development team cited technical bugs and security concerns as reasons for the postponement...",
        cover: "c3",
      },
    ],
  },
  {
    id: "01982c40-b8d2-7354-8b5d-b3bf76b7e2d6",
    name: "Top 5 altcoins to watch in 2025",
    about:
      "With Bitcoin dominance declining, these altcoins are gaining traction in the market.",
    audience: [{ text: "Investors" }],
    avatar: "np3",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    language: "English",
    level: "all",
    prerequisites: [{ text: "Wallet setup" }],
    subject: "Altcoin market",
    what_you_learn: [{ text: "Investment strategies" }],
    category: "NEWS",
    like: 198,
    comments: 33,
    author: "Arezoo Kamali",
    date: "2025-01-05",
    description1: [
      {
        id: 41,
        title: "Altcoin Analysis",
        content:
          "These 5 altcoins show strong fundamentals and active communities, making them promising picks for 2025...",
        cover: "c3",
      },
    ],
  },
  {
    id: "01982c41-b8d2-7354-8b5d-b3bf76b7e2d7",
    name: "Iran’s approach to blockchain regulation",
    about:
      "Iran is working on new frameworks to regulate blockchain projects and cryptocurrencies.",
    audience: [{ text: "Legal experts" }, { text: "Tech startups" }],
    avatar: "np4",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    language: "Persian",
    level: "beginner",
    prerequisites: [{ text: "Regulation basics" }],
    subject: "Crypto law",
    what_you_learn: [{ text: "Iran policy directions" }],
    category: "NEWS",
    like: 97,
    comments: 10,
    author: "Mohammad Karimi",
    date: "2025-03-01",
    description1: [
      {
        id: 51,
        title: "Policy Draft Overview",
        content:
          "The draft law includes licensing, KYC rules, and support for blockchain innovation...",
        cover: "c4",
      },
    ],
  },
  {
    id: "01982c42-b8d2-7354-8b5d-b3bf76b7e2d8",
    name: "How AI is impacting crypto markets",
    about:
      "Artificial intelligence is now a key player in analyzing and predicting crypto price movements.",
    audience: [{ text: "AI Researchers" }, { text: "Crypto Analysts" }],
    avatar: "np4",
    avatar_hash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    language: "English",
    level: "intermediate",
    prerequisites: [
      { text: "AI basics" },
      { text: "Crypto trading knowledge" },
    ],
    subject: "AI & crypto",
    what_you_learn: [{ text: "AI tools" }, { text: "Market forecasting" }],
    category: "NEWS",
    like: 421,
    comments: 74,
    author: "Niloofar Ghanbari",
    date: "2025-03-10",
    description1: [
      {
        id: 61,
        title: "AI in Trading",
        content:
          "From sentiment analysis to trend prediction, AI systems are transforming how we trade crypto...",
        cover: "c4",
      },
    ],
  },
];

const categories = [
  { id: 0, label: "All" },
  { id: 1, label: "IT & AI" },
  { id: 2, label: "Branding" },
  { id: 3, label: "Business" },
  { id: 4, label: "Leadership" },
  { id: 5, label: "Marketing" },
  { id: 6, label: "Other" },
];

const newsGroups = [
  { id: 0, label: "All" },
  { id: 1, label: "Group1" },
  { id: 2, label: "Group2" },
  { id: 3, label: "Group3" },
  { id: 4, label: "Group4" },
  { id: 5, label: "Group5" },
  { id: 6, label: "Group6" },
  { id: 7, label: "Group7" },
  { id: 8, label: "Group8" },
];

const transactions = [
  {
    name: "Frontend Mastery",
    date: "01/05/2025",
    amount: "$920 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx001a9zbc",
  },
  {
    name: "Backend Bootcamp",
    date: "03/05/2025",
    amount: "$870 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx002bx7dp",
  },
  {
    name: "Fullstack Pro",
    date: "04/05/2025",
    amount: "$960 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx003cr8jf",
  },
  {
    name: "AI Fundamentals",
    date: "06/05/2025",
    amount: "$1050 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx004df2qw",
  },
  {
    name: "UX/UI Essentials",
    date: "02/03/2025",
    amount: "$780 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx005ez3km",
  },
  {
    name: "React Native Lab",
    date: "05/05/2025",
    amount: "$890 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx006fj6bn",
  },
  {
    name: "DevOps Workshop",
    date: "02/04/2025",
    amount: "$830 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx007gs1re",
  },
  {
    name: "Data Science Intro",
    date: "05/05/2021",
    amount: "$950 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx008hr5uy",
  },
  {
    name: "Cybersecurity Basics",
    date: "02/04/2020",
    amount: "$870 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx009id7lt",
  },
  {
    name: "Cybersecurity Basics",
    date: "02/04/2020",
    amount: "$870 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx009id7lt",
  },
  {
    name: "Cybersecurity Basics",
    date: "02/04/2020",
    amount: "$870 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx009id7lt",
  },
  {
    name: "Cybersecurity Basics",
    date: "02/04/2020",
    amount: "$870 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx009id7lt",
  },
  {
    name: "Cybersecurity Basicsssssss",
    date: "02/04/2020",
    amount: "$870 (CAD)",
    payType: "PayPal",
    status: "Success",
    transactionId: "tx009id7lt",
  },
];

const tuum_transactions = [
  {
    name: "Transfer TUUM",
    date: "01/05/2025",
    amount: "20",
    payType: "net",
    status: "Success",
    transactionId: "tx001a9zbc",
  },
  {
    name: "Receive TUUM",
    date: "03/10/2025",
    amount: "10",
    payType: "net",
    status: "Success",
    transactionId: "tx002bx7dp",
  },
  {
    name: "Transfer TUUM",
    date: "04/08/2025",
    amount: "40",
    payType: "net",
    status: "Success",
    transactionId: "tx003cr8jf",
  },
];

const jobOffers = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "PixelWave",
    location: "Toronto, ON",
    isRemote: true,
    isDisabilityFriendly: true,
    postedAt: "2025-05-12T22:00:00",
    ratePerhour: "50 - 75",
    jobGroup: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeCrafters",
    location: "Vancouver, BC",
    isRemote: false,
    isDisabilityFriendly: true,
    postedAt: "2025-04-28T14:30:00",
    ratePerhour: "60 - 80",
    jobGroup: "IT",
  },
  {
    id: 3,
    title: "UI-UX Designer",
    company: "Designify",
    location: "Montreal, QC",
    isRemote: true,
    isDisabilityFriendly: false,
    postedAt: "2025-05-08T09:00:00",
    ratePerhour: "45 - 70",
    jobGroup: "Remote",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudNest",
    location: "Calgary, AB",
    isRemote: false,
    isDisabilityFriendly: true,
    postedAt: "2024-05-05T13:45:00",
    ratePerhour: "55 - 85",
    jobGroup: "IT",
  },
  {
    id: 5,
    title: "Fullstack Engineer",
    company: "StackStudio",
    location: "Ottawa, ON",
    isRemote: true,
    isDisabilityFriendly: true,
    postedAt: "2025-05-09T16:00:00",
    ratePerhour: "65 - 90",
    jobGroup: "Crypto",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    company: "AppForge",
    location: "Halifax, NS",
    isRemote: true,
    isDisabilityFriendly: false,
    postedAt: "2025-05-11T08:30:00",
    ratePerhour: "50 - 78",
    jobGroup: "Remote",
  },
  {
    id: 7,
    title: "QA Analyst",
    company: "Testopia",
    location: "Winnipeg, MB",
    isRemote: false,
    isDisabilityFriendly: true,
    postedAt: "2025-05-07T11:10:00",
    ratePerhour: "40 - 65",
    jobGroup: "IT",
  },
];

const comments = [
  {
    id: 1,
    title: "Title of comment",
    author: "Biran amri",
    date: "2025-05-08",
    text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
    rating: 4,
    likes: 12,
    disLike: 2,
  },
  {
    id: 2,
    title: "Title of comment",
    author: "Biran amri",
    date: "2025-05-08",
    text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
    rating: 4,
    likes: 12,
    disLike: 2,
  },
  {
    id: 3,
    title: "Title of comment",
    author: "Biran amri",
    date: "2025-05-08",
    text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
    rating: 4,
    likes: 12,
    disLike: 2,
  },
  {
    id: 4,
    title: "Title of comment",
    author: "Biran amri",
    date: "2025-05-08",
    text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
    rating: 4,
    likes: 12,
    disLike: 2,
  },
  {
    id: 5,
    title: "Title of comment",
    author: "Biran amri",
    date: "2025-05-08",
    text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
    rating: 4,
    likes: 12,
    disLike: 2,
  },
];

const headerMenus = [
  {
    id: 1,
    href: "/names",
    name: "Programs",
    subMenus: [
      {
        id: 11,
        href: "/programs",
        name: "All Programs",
        desc: null,
      },
      {
        id: 12,
        href: `/programs?type=${encodeURIComponent("Attendance")}`,
        name: "Attendance Programs",
        desc: null,
      },
      {
        id: 13,
        href: `/programs?type=${encodeURIComponent("Online")}`,
        name: "Online Programs",
        desc: null,
      },
      {
        id: 14,
        href: `/programs?type=${encodeURIComponent("Self Study")}`,
        name: "Self-Study Programs",
        desc: null,
      },
    ],
  },
  {
    id: 2,
    href: "/apply",
    name: "Apply",
    subMenus: [],
  },
  {
    id: 3,
    href: "/extra-educational",
    name: "Extra Educational",
    subMenus: [
      {
        id: 31,
        href: "/#",
        name: "Communication Crossroad",
        desc: {
          title: "Title1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra",
        },
      },
      {
        id: 32,
        href: "/#",
        name: "Facilitation Freeway",
        desc: {
          title: "Title2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra",
        },
      },
      {
        id: 33,
        href: "/job-offers",
        name: "Job Offers",
        desc: {
          title: "Title3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra",
        },
      },
      {
        id: 34,
        href: "/events",
        name: "Events",
        desc: {
          title: "Title4",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra",
        },
      },
    ],
  },
  {
    id: 4,
    href: "/tuum",
    name: "TUUM",
    subMenus: [
      {
        id: 41,
        href: "/professor-tuum",
        name: "Professor TUUM",
        desc: {
          title: "Title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra",
        },
      },
      {
        id: 42,
        href: "/#",
        name: "Tagline",
        desc: {
          title: "Title",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra",
        },
      },
    ],
  },
  {
    id: 5,
    href: "/publications",
    name: "Publications",
    subMenus: [
      {
        id: 51,
        href: "/articles",
        name: "Essays and Articles",
        desc: null,
      },
      {
        id: 52,
        href: "/identity-chart",
        name: "Identity Chart",
        desc: null,
      },
      {
        id: 53,
        href: "/news",
        name: "News",
        desc: null,
      },
      {
        id: 54,
        href: "/#",
        name: "Library",
        desc: null,
      },
    ],
  },
  {
    id: 6,
    href: "/about",
    name: "About",
    subMenus: [
      {
        id: 61,
        href: "/brand-story",
        name: "Brand Story",
        desc: null,
      },
      {
        id: 62,
        href: "/vision-mission",
        name: "Vision & Mission",
        desc: null,
      },
      {
        id: 63,
        href: "/our-legality-and-legitimacy",
        name: "Our Legality and Legitimacy",
        desc: null,
      },
      {
        id: 64,
        href: "/policies-and-regulations",
        name: "Policies and Regulations",
        desc: null,
      },
    ],
  },
];

const policiesMenu = [
  {
    id: 1,
    title: "Total Title 1",
    path: "/policies-and-regulations/total-title-1",
  },
  {
    id: 2,
    title: "Total Title 2",
    path: "/policies-and-regulations/total-title-2",
  },
  {
    id: 3,
    title: "Total Title 3",
    path: "/policies-and-regulations/total-title-3",
  },
  {
    id: 4,
    title: "Total Title 4",
    path: "/policies-and-regulations/total-title-4",
  },
  {
    id: 5,
    title: "Total Title 5",
    path: "/policies-and-regulations/total-title-5",
  },
];

const orgChart = {
  name: "CAMA College",
  children: [
    {
      name: "Academic Identity",
      children: [
        {
          name: "Management Sciences",
          children: [
            { name: "Traditional Arm" },
            { name: "Multidisciplinary Arm" },
          ],
        },
      ],
    },
    {
      name: "Social Identity",
      children: [{ name: "Motivational Arm" }, { name: "Philanthropic Arm" }],
    },
    {
      name: "Professional Identity",
      children: [{ name: "Consultative / Advisory Arm" }],
    },
  ],
};

const articles = [
  {
    id: 1,
    type: "Paper",
    title: "AI Security Continuum: Concept and Challenges 1",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in",
    year: 2024,
    author: "Rachael L. Fleurence, Xiaoyan Wang, Jagpreet Chhatwal",
    open: true,
  },
  {
    id: 2,
    type: "Review",
    title: "AI Security Continuum: Concept and Challenges 2",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placeratLorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat",
    year: 2025,
    author: "Rachael L. Fleurence, Xiaoyan Wang, Jagpreet Chhatwal",
    open: false,
  },
  {
    id: 3,
    type: "Paper",
    title: "AI Security Continuum: Concept and Challenges 3",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in",
    year: 2023,
    author: "Rachael L. Fleurence, Xiaoyan Wang, Jagpreet Chhatwal",
    open: false,
  },
  {
    id: 4,
    type: "Paper",
    title: "AI Security Continuum: Concept and Challenges 4",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat",
    year: 2024,
    author: "Rachael L. Fleurence, Xiaoyan Wang, Jagpreet Chhatwal",
    open: false,
  },
  {
    id: 5,
    type: "Paper",
    title: "AI Security Continuum: Concept and Challenges 5",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat",
    year: 2024,
    author: "Rachael L. Fleurence, Xiaoyan Wang, Jagpreet Chhatwal",
    open: false,
  },
  {
    id: 6,
    type: "Paper",
    title: "AI Security Continuum: Concept and Challenges 6",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis. Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat",
    year: 2024,
    author: "Rachael L. Fleurence, Xiaoyan Wang, Jagpreet Chhatwal",
    open: false,
  },
];

const programsInProgress = [
  {
    id: 1,
    coverImg: "c4",
    name: "Introduction to crypto currencies",
    level: "Expert",
    type: "Self Study",
    type2: "Career",
    duration: 20,
    progress: 67,
    publishDate: "2024-12-01",
    category: "IT & AI",
    contents: [
      {
        id: 1,
        title: "Subject Title 1",
        lessons: [
          {
            id: 11,
            title: "Lesson Title 1-1",
            type: "video",
            content: "Title Of Lesson 1-1",
            passed: 1,
          },
          {
            id: 12,
            title: "Lesson Title 1-2",
            type: "video",
            content: "Title Of Lesson 1-2",
            passed: 1,
          },
          {
            id: 13,
            title: "Lesson Title 1-3",
            type: "video",
            content: "Title Of Lesson 1-3",
            passed: 1,
          },
          {
            id: 14,
            title: "Lesson Title 1-4",
            type: "reading",
            content: "Title Of Lesson 1-4",
            passed: 0,
          },
          {
            id: 15,
            title: "Lesson Title 1-5",
            type: "video",
            content: "Title Of Lesson 1-5",
            passed: -1,
          },
          {
            id: 16,
            title: "Lesson Title 1-6",
            type: "video",
            content: "Title Of Lesson 1-6",
            passed: -1,
          },
          {
            id: 17,
            title: "Lesson Title 1-7",
            type: "video",
            content: "Title Of Lesson 1-7",
            passed: -1,
          },
          {
            id: 18,
            title: "Lesson Title 1-8",
            type: "video",
            content: "Title Of Lesson 1-8",
            passed: -1,
          },
          {
            id: 19,
            title: "Lesson Title 1-9",
            type: "video",
            content: "Title Of Lesson 1-9",
            passed: -1,
          },
          {
            id: 110,
            title: "Lesson Title 1-10",
            type: "video",
            content: "Title Of Lesson 1-10",
            passed: -1,
          },
          {
            id: 111,
            title: "Lesson Title 1-11",
            type: "video",
            content: "Title Of Lesson 1-11",
            passed: -1,
          },
          {
            id: 112,
            title: "Lesson Title 1-12",
            type: "video",
            content: "Title Of Lesson 1-12",
            passed: -1,
          },
        ],
      },
      {
        id: 2,
        title: "Subject Title 2",
        lessons: [
          {
            id: 21,
            title: "Lesson Title 2-1",
            type: "video",
            content: "Title Of Lesson 2-1",
            passed: 1,
          },
          {
            id: 22,
            title: "Lesson Title 2-2",
            type: "video",
            content: "Title Of Lesson 2-2",
            passed: 1,
          },
          {
            id: 23,
            title: "Lesson Title 2-3",
            type: "video",
            content: "Title Of Lesson 2-3",
            passed: 1,
          },
          {
            id: 24,
            title: "Lesson Title 2-4",
            type: "reading",
            content: "Title Of Lesson 2-4",
            passed: 0,
          },
          {
            id: 25,
            title: "Lesson Title 2-5",
            type: "video",
            content: "Title Of Lesson 2-5",
            passed: -1,
          },
          {
            id: 26,
            title: "Lesson Title 2-6",
            type: "video",
            content: "Title Of Lesson 2-6",
            passed: -1,
          },
          {
            id: 27,
            title: "Lesson Title 2-7",
            type: "video",
            content: "Title Of Lesson 2-7",
            passed: -1,
          },
          {
            id: 28,
            title: "Lesson Title 2-8",
            type: "video",
            content: "Title Of Lesson 2-8",
            passed: -1,
          },
          {
            id: 29,
            title: "Lesson Title 2-9",
            type: "video",
            content: "Title Of Lesson 2-9",
            passed: -1,
          },
          {
            id: 210,
            title: "Lesson Title 2-10",
            type: "video",
            content: "Title Of Lesson 2-10",
            passed: -1,
          },
          {
            id: 211,
            title: "Lesson Title 2-11",
            type: "video",
            content: "Title Of Lesson 2-11",
            passed: -1,
          },
          {
            id: 212,
            title: "Lesson Title 2-12",
            type: "video",
            content: "Title Of Lesson 2-12",
            passed: -1,
          },
        ],
      },
      {
        id: 3,
        title: "Subject Title 3",
        lessons: [
          {
            id: 31,
            title: "Lesson Title 3-1",
            type: "video",
            content: "Title Of Lesson 3-1",
            passed: 1,
          },
          {
            id: 32,
            title: "Lesson Title 3-2",
            type: "video",
            content: "Title Of Lesson 3-2",
            passed: 1,
          },
          {
            id: 33,
            title: "Lesson Title 3-3",
            type: "video",
            content: "Title Of Lesson 3-3",
            passed: 1,
          },
          {
            id: 34,
            title: "Lesson Title 3-4",
            type: "reading",
            content: "Title Of Lesson 3-4",
            passed: 0,
          },
          {
            id: 35,
            title: "Lesson Title 3-5",
            type: "video",
            content: "Title Of Lesson 3-5",
            passed: -1,
          },
          {
            id: 36,
            title: "Lesson Title 3-6",
            type: "video",
            content: "Title Of Lesson 3-6",
            passed: -1,
          },
          {
            id: 37,
            title: "Lesson Title 3-7",
            type: "video",
            content: "Title Of Lesson 3-7",
            passed: -1,
          },
          {
            id: 38,
            title: "Lesson Title 3-8",
            type: "video",
            content: "Title Of Lesson 3-8",
            passed: -1,
          },
          {
            id: 39,
            title: "Lesson Title 3-9",
            type: "video",
            content: "Title Of Lesson 3-9",
            passed: -1,
          },
          {
            id: 310,
            title: "Lesson Title 3-10",
            type: "video",
            content: "Title Of Lesson 3-10",
            passed: -1,
          },
          {
            id: 311,
            title: "Lesson Title 3-11",
            type: "video",
            content: "Title Of Lesson 3-11",
            passed: -1,
          },
          {
            id: 312,
            title: "Lesson Title 3-12",
            type: "video",
            content: "Title Of Lesson 3-12",
            passed: -1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    coverImg: "c1",
    name: "AI",
    level: "Expert",
    type: "Self Study",
    type2: "Career",
    duration: 20,
    progress: 50,
    publishDate: "2024-12-01",
    category: "Bussinse",
    contents: [
      {
        id: 1,
        title: "Subject Title 1",
        lessons: [
          {
            id: 11,
            title: "Lesson Title 1-1",
            type: "video",
            content: "Title Of Lesson 1-1",
            passed: 1,
          },
          {
            id: 12,
            title: "Lesson Title 1-2",
            type: "video",
            content: "Title Of Lesson 1-2",
            passed: 1,
          },
          {
            id: 13,
            title: "Lesson Title 1-3",
            type: "video",
            content: "Title Of Lesson 1-3",
            passed: 1,
          },
          {
            id: 14,
            title: "Lesson Title 1-4",
            type: "reading",
            content: "Title Of Lesson 1-4",
            passed: 0,
          },
          {
            id: 15,
            title: "Lesson Title 1-5",
            type: "video",
            content: "Title Of Lesson 1-5",
            passed: -1,
          },
          {
            id: 16,
            title: "Lesson Title 1-6",
            type: "video",
            content: "Title Of Lesson 1-6",
            passed: -1,
          },
          {
            id: 17,
            title: "Lesson Title 1-7",
            type: "video",
            content: "Title Of Lesson 1-7",
            passed: -1,
          },
          {
            id: 18,
            title: "Lesson Title 1-8",
            type: "video",
            content: "Title Of Lesson 1-8",
            passed: -1,
          },
          {
            id: 19,
            title: "Lesson Title 1-9",
            type: "video",
            content: "Title Of Lesson 1-9",
            passed: -1,
          },
          {
            id: 110,
            title: "Lesson Title 1-10",
            type: "video",
            content: "Title Of Lesson 1-10",
            passed: -1,
          },
          {
            id: 111,
            title: "Lesson Title 1-11",
            type: "video",
            content: "Title Of Lesson 1-11",
            passed: -1,
          },
          {
            id: 112,
            title: "Lesson Title 1-12",
            type: "video",
            content: "Title Of Lesson 1-12",
            passed: -1,
          },
        ],
      },
      {
        id: 2,
        title: "Subject Title 2",
        lessons: [
          {
            id: 21,
            title: "Lesson Title 2-1",
            type: "video",
            content: "Title Of Lesson 2-1",
            passed: 1,
          },
          {
            id: 22,
            title: "Lesson Title 2-2",
            type: "video",
            content: "Title Of Lesson 2-2",
            passed: 1,
          },
          {
            id: 23,
            title: "Lesson Title 2-3",
            type: "video",
            content: "Title Of Lesson 2-3",
            passed: 1,
          },
          {
            id: 24,
            title: "Lesson Title 2-4",
            type: "reading",
            content: "Title Of Lesson 2-4",
            passed: 0,
          },
          {
            id: 25,
            title: "Lesson Title 2-5",
            type: "video",
            content: "Title Of Lesson 2-5",
            passed: -1,
          },
          {
            id: 26,
            title: "Lesson Title 2-6",
            type: "video",
            content: "Title Of Lesson 2-6",
            passed: -1,
          },
          {
            id: 27,
            title: "Lesson Title 2-7",
            type: "video",
            content: "Title Of Lesson 2-7",
            passed: -1,
          },
          {
            id: 28,
            title: "Lesson Title 2-8",
            type: "video",
            content: "Title Of Lesson 2-8",
            passed: -1,
          },
          {
            id: 29,
            title: "Lesson Title 2-9",
            type: "video",
            content: "Title Of Lesson 2-9",
            passed: -1,
          },
          {
            id: 210,
            title: "Lesson Title 2-10",
            type: "video",
            content: "Title Of Lesson 2-10",
            passed: -1,
          },
          {
            id: 211,
            title: "Lesson Title 2-11",
            type: "video",
            content: "Title Of Lesson 2-11",
            passed: -1,
          },
          {
            id: 212,
            title: "Lesson Title 2-12",
            type: "video",
            content: "Title Of Lesson 2-12",
            passed: -1,
          },
        ],
      },
      {
        id: 3,
        title: "Subject Title 3",
        lessons: [
          {
            id: 31,
            title: "Lesson Title 3-1",
            type: "video",
            content: "Title Of Lesson 3-1",
            passed: 1,
          },
          {
            id: 32,
            title: "Lesson Title 3-2",
            type: "video",
            content: "Title Of Lesson 3-2",
            passed: 1,
          },
          {
            id: 33,
            title: "Lesson Title 3-3",
            type: "video",
            content: "Title Of Lesson 3-3",
            passed: 1,
          },
          {
            id: 34,
            title: "Lesson Title 3-4",
            type: "reading",
            content: "Title Of Lesson 3-4",
            passed: 0,
          },
          {
            id: 35,
            title: "Lesson Title 3-5",
            type: "video",
            content: "Title Of Lesson 3-5",
            passed: -1,
          },
          {
            id: 36,
            title: "Lesson Title 3-6",
            type: "video",
            content: "Title Of Lesson 3-6",
            passed: -1,
          },
          {
            id: 37,
            title: "Lesson Title 3-7",
            type: "video",
            content: "Title Of Lesson 3-7",
            passed: -1,
          },
          {
            id: 38,
            title: "Lesson Title 3-8",
            type: "video",
            content: "Title Of Lesson 3-8",
            passed: -1,
          },
          {
            id: 39,
            title: "Lesson Title 3-9",
            type: "video",
            content: "Title Of Lesson 3-9",
            passed: -1,
          },
          {
            id: 310,
            title: "Lesson Title 3-10",
            type: "video",
            content: "Title Of Lesson 3-10",
            passed: -1,
          },
          {
            id: 311,
            title: "Lesson Title 3-11",
            type: "video",
            content: "Title Of Lesson 3-11",
            passed: -1,
          },
          {
            id: 312,
            title: "Lesson Title 3-12",
            type: "video",
            content: "Title Of Lesson 3-12",
            passed: -1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    coverImg: "c1",
    name: "Game",
    level: "Expert",
    type: "Self Study",
    type2: "Career",
    duration: 20,
    progress: 98,
    publishDate: "2024-12-01",
    category: "IT & AI",
    contents: [
      {
        id: 1,
        title: "Subject Title 1",
        lessons: [
          {
            id: 11,
            title: "Lesson Title 1-1",
            type: "video",
            content: "Title Of Lesson 1-1",
            passed: 1,
          },
          {
            id: 12,
            title: "Lesson Title 1-2",
            type: "video",
            content: "Title Of Lesson 1-2",
            passed: 1,
          },
          {
            id: 13,
            title: "Lesson Title 1-3",
            type: "video",
            content: "Title Of Lesson 1-3",
            passed: 1,
          },
          {
            id: 14,
            title: "Lesson Title 1-4",
            type: "reading",
            content: "Title Of Lesson 1-4",
            passed: 0,
          },
          {
            id: 15,
            title: "Lesson Title 1-5",
            type: "video",
            content: "Title Of Lesson 1-5",
            passed: -1,
          },
          {
            id: 16,
            title: "Lesson Title 1-6",
            type: "video",
            content: "Title Of Lesson 1-6",
            passed: -1,
          },
          {
            id: 17,
            title: "Lesson Title 1-7",
            type: "video",
            content: "Title Of Lesson 1-7",
            passed: -1,
          },
          {
            id: 18,
            title: "Lesson Title 1-8",
            type: "video",
            content: "Title Of Lesson 1-8",
            passed: -1,
          },
          {
            id: 19,
            title: "Lesson Title 1-9",
            type: "video",
            content: "Title Of Lesson 1-9",
            passed: -1,
          },
          {
            id: 110,
            title: "Lesson Title 1-10",
            type: "video",
            content: "Title Of Lesson 1-10",
            passed: -1,
          },
          {
            id: 111,
            title: "Lesson Title 1-11",
            type: "video",
            content: "Title Of Lesson 1-11",
            passed: -1,
          },
          {
            id: 112,
            title: "Lesson Title 1-12",
            type: "video",
            content: "Title Of Lesson 1-12",
            passed: -1,
          },
        ],
      },
      {
        id: 2,
        title: "Subject Title 2",
        lessons: [
          {
            id: 21,
            title: "Lesson Title 2-1",
            type: "video",
            content: "Title Of Lesson 2-1",
            passed: 1,
          },
          {
            id: 22,
            title: "Lesson Title 2-2",
            type: "video",
            content: "Title Of Lesson 2-2",
            passed: 1,
          },
          {
            id: 23,
            title: "Lesson Title 2-3",
            type: "video",
            content: "Title Of Lesson 2-3",
            passed: 1,
          },
          {
            id: 24,
            title: "Lesson Title 2-4",
            type: "reading",
            content: "Title Of Lesson 2-4",
            passed: 0,
          },
          {
            id: 25,
            title: "Lesson Title 2-5",
            type: "video",
            content: "Title Of Lesson 2-5",
            passed: -1,
          },
          {
            id: 26,
            title: "Lesson Title 2-6",
            type: "video",
            content: "Title Of Lesson 2-6",
            passed: -1,
          },
          {
            id: 27,
            title: "Lesson Title 2-7",
            type: "video",
            content: "Title Of Lesson 2-7",
            passed: -1,
          },
          {
            id: 28,
            title: "Lesson Title 2-8",
            type: "video",
            content: "Title Of Lesson 2-8",
            passed: -1,
          },
          {
            id: 29,
            title: "Lesson Title 2-9",
            type: "video",
            content: "Title Of Lesson 2-9",
            passed: -1,
          },
          {
            id: 210,
            title: "Lesson Title 2-10",
            type: "video",
            content: "Title Of Lesson 2-10",
            passed: -1,
          },
          {
            id: 211,
            title: "Lesson Title 2-11",
            type: "video",
            content: "Title Of Lesson 2-11",
            passed: -1,
          },
          {
            id: 212,
            title: "Lesson Title 2-12",
            type: "video",
            content: "Title Of Lesson 2-12",
            passed: -1,
          },
        ],
      },
      {
        id: 3,
        title: "Subject Title 3",
        lessons: [
          {
            id: 31,
            title: "Lesson Title 3-1",
            type: "video",
            content: "Title Of Lesson 3-1",
            passed: 1,
          },
          {
            id: 32,
            title: "Lesson Title 3-2",
            type: "video",
            content: "Title Of Lesson 3-2",
            passed: 1,
          },
          {
            id: 33,
            title: "Lesson Title 3-3",
            type: "video",
            content: "Title Of Lesson 3-3",
            passed: 1,
          },
          {
            id: 34,
            title: "Lesson Title 3-4",
            type: "reading",
            content: "Title Of Lesson 3-4",
            passed: 0,
          },
          {
            id: 35,
            title: "Lesson Title 3-5",
            type: "video",
            content: "Title Of Lesson 3-5",
            passed: -1,
          },
          {
            id: 36,
            title: "Lesson Title 3-6",
            type: "video",
            content: "Title Of Lesson 3-6",
            passed: -1,
          },
          {
            id: 37,
            title: "Lesson Title 3-7",
            type: "video",
            content: "Title Of Lesson 3-7",
            passed: -1,
          },
          {
            id: 38,
            title: "Lesson Title 3-8",
            type: "video",
            content: "Title Of Lesson 3-8",
            passed: -1,
          },
          {
            id: 39,
            title: "Lesson Title 3-9",
            type: "video",
            content: "Title Of Lesson 3-9",
            passed: -1,
          },
          {
            id: 310,
            title: "Lesson Title 3-10",
            type: "video",
            content: "Title Of Lesson 3-10",
            passed: -1,
          },
          {
            id: 311,
            title: "Lesson Title 3-11",
            type: "video",
            content: "Title Of Lesson 3-11",
            passed: -1,
          },
          {
            id: 312,
            title: "Lesson Title 3-12",
            type: "video",
            content: "Title Of Lesson 3-12",
            passed: -1,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    coverImg: "c1",
    name: "Python",
    level: "Expert",
    type: "Self Study",
    type2: "Career",
    duration: 20,
    progress: 40,
    publishDate: "2024-12-01",
    category: "IT & AI",
    contents: [
      {
        id: 1,
        title: "Subject Title 1",
        lessons: [
          {
            id: 11,
            title: "Lesson Title 1-1",
            type: "video",
            content: "Title Of Lesson 1-1",
            passed: 1,
          },
          {
            id: 12,
            title: "Lesson Title 1-2",
            type: "video",
            content: "Title Of Lesson 1-2",
            passed: 1,
          },
          {
            id: 13,
            title: "Lesson Title 1-3",
            type: "video",
            content: "Title Of Lesson 1-3",
            passed: 1,
          },
          {
            id: 14,
            title: "Lesson Title 1-4",
            type: "reading",
            content: "Title Of Lesson 1-4",
            passed: 0,
          },
          {
            id: 15,
            title: "Lesson Title 1-5",
            type: "video",
            content: "Title Of Lesson 1-5",
            passed: -1,
          },
          {
            id: 16,
            title: "Lesson Title 1-6",
            type: "video",
            content: "Title Of Lesson 1-6",
            passed: -1,
          },
          {
            id: 17,
            title: "Lesson Title 1-7",
            type: "video",
            content: "Title Of Lesson 1-7",
            passed: -1,
          },
          {
            id: 18,
            title: "Lesson Title 1-8",
            type: "video",
            content: "Title Of Lesson 1-8",
            passed: -1,
          },
          {
            id: 19,
            title: "Lesson Title 1-9",
            type: "video",
            content: "Title Of Lesson 1-9",
            passed: -1,
          },
          {
            id: 110,
            title: "Lesson Title 1-10",
            type: "video",
            content: "Title Of Lesson 1-10",
            passed: -1,
          },
          {
            id: 111,
            title: "Lesson Title 1-11",
            type: "video",
            content: "Title Of Lesson 1-11",
            passed: -1,
          },
          {
            id: 112,
            title: "Lesson Title 1-12",
            type: "video",
            content: "Title Of Lesson 1-12",
            passed: -1,
          },
        ],
      },
      {
        id: 2,
        title: "Subject Title 2",
        lessons: [
          {
            id: 21,
            title: "Lesson Title 2-1",
            type: "video",
            content: "Title Of Lesson 2-1",
            passed: 1,
          },
          {
            id: 22,
            title: "Lesson Title 2-2",
            type: "video",
            content: "Title Of Lesson 2-2",
            passed: 1,
          },
          {
            id: 23,
            title: "Lesson Title 2-3",
            type: "video",
            content: "Title Of Lesson 2-3",
            passed: 1,
          },
          {
            id: 24,
            title: "Lesson Title 2-4",
            type: "reading",
            content: "Title Of Lesson 2-4",
            passed: 0,
          },
          {
            id: 25,
            title: "Lesson Title 2-5",
            type: "video",
            content: "Title Of Lesson 2-5",
            passed: -1,
          },
          {
            id: 26,
            title: "Lesson Title 2-6",
            type: "video",
            content: "Title Of Lesson 2-6",
            passed: -1,
          },
          {
            id: 27,
            title: "Lesson Title 2-7",
            type: "video",
            content: "Title Of Lesson 2-7",
            passed: -1,
          },
          {
            id: 28,
            title: "Lesson Title 2-8",
            type: "video",
            content: "Title Of Lesson 2-8",
            passed: -1,
          },
          {
            id: 29,
            title: "Lesson Title 2-9",
            type: "video",
            content: "Title Of Lesson 2-9",
            passed: -1,
          },
          {
            id: 210,
            title: "Lesson Title 2-10",
            type: "video",
            content: "Title Of Lesson 2-10",
            passed: -1,
          },
          {
            id: 211,
            title: "Lesson Title 2-11",
            type: "video",
            content: "Title Of Lesson 2-11",
            passed: -1,
          },
          {
            id: 212,
            title: "Lesson Title 2-12",
            type: "video",
            content: "Title Of Lesson 2-12",
            passed: -1,
          },
        ],
      },
      {
        id: 3,
        title: "Subject Title 3",
        lessons: [
          {
            id: 31,
            title: "Lesson Title 3-1",
            type: "video",
            content: "Title Of Lesson 3-1",
            passed: 1,
          },
          {
            id: 32,
            title: "Lesson Title 3-2",
            type: "video",
            content: "Title Of Lesson 3-2",
            passed: 1,
          },
          {
            id: 33,
            title: "Lesson Title 3-3",
            type: "video",
            content: "Title Of Lesson 3-3",
            passed: 1,
          },
          {
            id: 34,
            title: "Lesson Title 3-4",
            type: "reading",
            content: "Title Of Lesson 3-4",
            passed: 0,
          },
          {
            id: 35,
            title: "Lesson Title 3-5",
            type: "video",
            content: "Title Of Lesson 3-5",
            passed: -1,
          },
          {
            id: 36,
            title: "Lesson Title 3-6",
            type: "video",
            content: "Title Of Lesson 3-6",
            passed: -1,
          },
          {
            id: 37,
            title: "Lesson Title 3-7",
            type: "video",
            content: "Title Of Lesson 3-7",
            passed: -1,
          },
          {
            id: 38,
            title: "Lesson Title 3-8",
            type: "video",
            content: "Title Of Lesson 3-8",
            passed: -1,
          },
          {
            id: 39,
            title: "Lesson Title 3-9",
            type: "video",
            content: "Title Of Lesson 3-9",
            passed: -1,
          },
          {
            id: 310,
            title: "Lesson Title 3-10",
            type: "video",
            content: "Title Of Lesson 3-10",
            passed: -1,
          },
          {
            id: 311,
            title: "Lesson Title 3-11",
            type: "video",
            content: "Title Of Lesson 3-11",
            passed: -1,
          },
          {
            id: 312,
            title: "Lesson Title 3-12",
            type: "video",
            content: "Title Of Lesson 3-12",
            passed: -1,
          },
        ],
      },
    ],
  },
];

const days = [
  { id: 4, date: "2025-05-05", haveClass: false, newEvents: [] },
  { id: 5, date: "2025-05-06", haveClass: true, newEvents: [] },
  { id: 6, date: "2025-05-07", haveClass: false, newEvents: [] },
  { id: 7, date: "2025-05-08", haveClass: false, newEvents: [] },
  { id: 8, date: "2025-05-09", haveClass: true, newEvents: [] },
  { id: 9, date: "2025-05-10", haveClass: false, newEvents: [] },
  { id: 10, date: "2025-05-11", haveClass: false, newEvents: [] },
  { id: 11, date: "2025-05-12", haveClass: false, newEvents: [1] },
  { id: 12, date: "2025-05-13", haveClass: false, newEvents: [] },
  { id: 13, date: "2025-05-14", haveClass: false, newEvents: [] },
  { id: 14, date: "2025-05-15", haveClass: false, newEvents: [] },
  { id: 15, date: "2025-05-16", haveClass: false, newEvents: [] },
  { id: 16, date: "2025-05-17", haveClass: false, newEvents: [] },
  { id: 17, date: "2025-05-18", haveClass: false, newEvents: [] },
  { id: 18, date: "2025-05-19", haveClass: false, newEvents: [] },
  { id: 19, date: "2025-05-20", haveClass: false, newEvents: [] },
  { id: 20, date: "2025-05-21", haveClass: false, newEvents: [] },
  { id: 20, date: "2025-05-22", haveClass: false, newEvents: [] },
  { id: 20, date: "2025-05-23", haveClass: false, newEvents: [] },
  { id: 20, date: "2025-05-24", haveClass: false, newEvents: [] },
];

const sx = {
  "& .MuiOutlinedInput-root": {
    // "&.Mui-focused": {

    // },
    "& fieldset": {
      borderColor: "#D7D9DB",
    },
    "&:hover fieldset": {
      borderColor: "#BCBFC2", // hover border
      boxShadow: "0 1px 3px rgba(255, 203, 5, 0.15)", // shadow
    },
    "&.Mui-focused fieldset": {
      borderColor: "#906E3E", // hover border
      boxShadow: "1px 1px 4px rgba(255, 203, 5, 0.15)", // shadow
    },
    "&.Mui-error": {
      borderColor: "#6E170B", // hover border
      boxShadow: "1px 1px 4px rgba(110, 23, 11, 0.15)", // shadow
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#44474B",
  },
};

const navs = [
  {
    id: 0,
    path: "/profile/dashboard",
    val: "Dashboard",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M7.63232 3.32617C8.71756 2.48638 10.4854 2.44379 11.6138 3.23438L16.4136 6.59277C16.791 6.85702 17.1532 7.29395 17.4214 7.80762C17.6897 8.3215 17.8423 8.86977 17.8423 9.33301V14.9824C17.8423 16.8313 16.3406 18.333 14.4917 18.333H5.5083C3.66109 18.3328 2.15879 16.8247 2.15869 14.9746V9.22461C2.15869 8.79517 2.29609 8.27478 2.54053 7.77832C2.78481 7.28225 3.11447 6.85255 3.45752 6.58496L7.63232 3.32617Z"
            fill="#A91418"
            stroke="#A91418"
          />
          <path
            d="M10 12.875C10.0301 12.875 10.0613 12.8874 10.0869 12.9131C10.1126 12.9387 10.125 12.9699 10.125 13V15.5C10.125 15.5301 10.1126 15.5613 10.0869 15.5869C10.0613 15.6126 10.0301 15.625 10 15.625C9.96985 15.625 9.93873 15.6126 9.91309 15.5869C9.88744 15.5613 9.875 15.5301 9.875 15.5V13C9.875 12.9699 9.88744 12.9387 9.91309 12.9131C9.93873 12.8874 9.96985 12.875 10 12.875Z"
            fill="#A91418"
            stroke="#A91418"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M7.63232 3.32617C8.71756 2.48638 10.4854 2.44379 11.6138 3.23438L16.4136 6.59277C16.791 6.85702 17.1532 7.29395 17.4214 7.80762C17.6897 8.3215 17.8423 8.86977 17.8423 9.33301V14.9824C17.8423 16.8313 16.3406 18.333 14.4917 18.333H5.5083C3.66109 18.3328 2.15879 16.8247 2.15869 14.9746V9.22461C2.15869 8.79517 2.29609 8.27478 2.54053 7.77832C2.78481 7.28225 3.11447 6.85255 3.45752 6.58496L7.63232 3.32617Z"
            fill="#484647"
            stroke="#484647"
          />
          <path
            d="M10 12.875C10.0301 12.875 10.0613 12.8874 10.0869 12.9131C10.1126 12.9387 10.125 12.9699 10.125 13V15.5C10.125 15.5301 10.1126 15.5613 10.0869 15.5869C10.0613 15.6126 10.0301 15.625 10 15.625C9.96985 15.625 9.93873 15.6126 9.91309 15.5869C9.88744 15.5613 9.875 15.5301 9.875 15.5V13C9.875 12.9699 9.88744 12.9387 9.91309 12.9131C9.93873 12.8874 9.96985 12.875 10 12.875Z"
            fill="#484647"
            stroke="#484647"
          />
        </svg>
      ),
    },
  },
  {
    id: 1,
    path: "/profile/programs",
    val: "Programs",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.37477 2.60873L3.35811 5.88373C1.74977 6.93373 1.74977 9.28373 3.35811 10.3337L8.37477 13.6087C9.27477 14.2004 10.7581 14.2004 11.6581 13.6087L16.6498 10.3337C18.2498 9.28373 18.2498 6.94206 16.6498 5.89206L11.6581 2.61706C10.7581 2.01706 9.27477 2.01706 8.37477 2.60873Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.69144 11.4004L4.68311 15.3087C4.68311 16.3671 5.49977 17.5004 6.49977 17.8337L9.15811 18.7171C9.61644 18.8671 10.3748 18.8671 10.8414 18.7171L13.4998 17.8337C14.4998 17.5004 15.3164 16.3671 15.3164 15.3087V11.4421"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8335 13V8"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.37477 2.60873L3.35811 5.88373C1.74977 6.93373 1.74977 9.28373 3.35811 10.3337L8.37477 13.6087C9.27477 14.2004 10.7581 14.2004 11.6581 13.6087L16.6498 10.3337C18.2498 9.28373 18.2498 6.94206 16.6498 5.89206L11.6581 2.61706C10.7581 2.01706 9.27477 2.01706 8.37477 2.60873Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.69144 11.4004L4.68311 15.3087C4.68311 16.3671 5.49977 17.5004 6.49977 17.8337L9.15811 18.7171C9.61644 18.8671 10.3748 18.8671 10.8414 18.7171L13.4998 17.8337C14.4998 17.5004 15.3164 16.3671 15.3164 15.3087V11.4421"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8335 13V8"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 2,
    path: "/profile/events",
    val: "Events",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2918 11.5417C17.2918 15.5667 14.0252 18.8333 10.0002 18.8333C5.97516 18.8333 2.7085 15.5667 2.7085 11.5417C2.7085 7.51667 5.97516 4.25 10.0002 4.25C14.0252 4.25 17.2918 7.51667 17.2918 11.5417Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 7.16602V11.3327"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 2.16602H12.5"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2918 11.5417C17.2918 15.5667 14.0252 18.8333 10.0002 18.8333C5.97516 18.8333 2.7085 15.5667 2.7085 11.5417C2.7085 7.51667 5.97516 4.25 10.0002 4.25C14.0252 4.25 17.2918 7.51667 17.2918 11.5417Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 7.16602V11.3327"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 2.16602H12.5"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 3,
    path: "/profile/personal-info",
    val: "Personal Info",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1331 9.55768C10.0498 9.54935 9.9498 9.54935 9.85814 9.55768C7.8748 9.49102 6.2998 7.86602 6.2998 5.86602C6.2998 3.82435 7.9498 2.16602 9.9998 2.16602C12.0415 2.16602 13.6998 3.82435 13.6998 5.86602C13.6915 7.86602 12.1165 9.49102 10.1331 9.55768Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.9666 12.634C3.94993 13.984 3.94993 16.184 5.9666 17.5257C8.25827 19.059 12.0166 19.059 14.3083 17.5257C16.3249 16.1757 16.3249 13.9757 14.3083 12.634C12.0249 11.109 8.2666 11.109 5.9666 12.634Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1331 9.55768C10.0498 9.54935 9.9498 9.54935 9.85814 9.55768C7.8748 9.49102 6.2998 7.86602 6.2998 5.86602C6.2998 3.82435 7.9498 2.16602 9.9998 2.16602C12.0415 2.16602 13.6998 3.82435 13.6998 5.86602C13.6915 7.86602 12.1165 9.49102 10.1331 9.55768Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.9666 12.634C3.94993 13.984 3.94993 16.184 5.9666 17.5257C8.25827 19.059 12.0166 19.059 14.3083 17.5257C16.3249 16.1757 16.3249 13.9757 14.3083 12.634C12.0249 11.109 8.2666 11.109 5.9666 12.634Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 4,
    path: "/profile/transactions",
    val: "Transactions",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6665 9.66732V8.00065C1.6665 5.08398 3.33317 3.83398 5.83317 3.83398H14.1665C16.6665 3.83398 18.3332 5.08398 18.3332 8.00065V13.0007C18.3332 15.9173 16.6665 17.1673 14.1665 17.1673H9.99984"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99984 12.5827C11.1504 12.5827 12.0832 11.6499 12.0832 10.4993C12.0832 9.34876 11.1504 8.41602 9.99984 8.41602C8.84924 8.41602 7.9165 9.34876 7.9165 10.4993C7.9165 11.6499 8.84924 12.5827 9.99984 12.5827Z"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.4165 8.41602V12.5827"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.6665 13.418H6.11653C6.64986 13.418 7.08317 13.8513 7.08317 14.3846V15.4513"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.68315 12.4004L1.6665 13.417L2.68315 14.4337"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.08317 17.8165H2.63315C2.09981 17.8165 1.6665 17.3832 1.6665 16.8498V15.7832"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.06738 18.8341L7.08402 17.8175L6.06738 16.8008"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6665 9.66732V8.00065C1.6665 5.08398 3.33317 3.83398 5.83317 3.83398H14.1665C16.6665 3.83398 18.3332 5.08398 18.3332 8.00065V13.0007C18.3332 15.9173 16.6665 17.1673 14.1665 17.1673H9.99984"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99984 12.5827C11.1504 12.5827 12.0832 11.6499 12.0832 10.4993C12.0832 9.34876 11.1504 8.41602 9.99984 8.41602C8.84924 8.41602 7.9165 9.34876 7.9165 10.4993C7.9165 11.6499 8.84924 12.5827 9.99984 12.5827Z"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.4165 8.41602V12.5827"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.6665 13.418H6.11653C6.64986 13.418 7.08317 13.8513 7.08317 14.3846V15.4513"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.68315 12.4004L1.6665 13.417L2.68315 14.4337"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.08317 17.8165H2.63315C2.09981 17.8165 1.6665 17.3832 1.6665 16.8498V15.7832"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.06738 18.8341L7.08402 17.8175L6.06738 16.8008"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
];

const exam = {
  id: "0",
  time: "04:30",
  num: 4,
  questions: [
    {
      id: "00",
      numOfQues: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
      type: "test",
      options: [
        {
          id: "000",
          option: "Option 1",
        },
        {
          id: "001",
          option: "Option 2",
        },
        {
          id: "002",
          option: "Option 3",
        },
        {
          id: "003",
          option: "Option 4",
        },
      ],
    },
    {
      id: "01",
      numOfQues: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
      type: "essay",
      options: [],
    },
    {
      id: "02",
      numOfQues: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
      type: "test",
      options: [
        {
          id: "020",
          option: "Option 1",
        },
        {
          id: "021",
          option: "Option 2",
        },
        {
          id: "022",
          option: "Option 3",
        },
        {
          id: "023",
          option: "Option 4",
        },
      ],
    },
    {
      id: "03",
      numOfQues: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
      type: "essay",
      options: [],
    },
  ],
};

const LIMITOfLOADEDLIST = 12;
const LIMITOfLOADEDLISTINONEPAGE = 47;
const LIMITNUMBEROFSCROLL = 3;

export {
  sx,
  news,
  exam,
  navs,
  days,
  posts,
  events,
  comments,
  articles,
  programs,
  orgChart,
  jobOffers,
  categories,
  newsGroups,
  headerMenus,
  policiesMenu,
  transactions,
  tuum_transactions,
  LIMITOfLOADEDLIST,
  programsInProgress,
  LIMITNUMBEROFSCROLL,
  LIMITOfLOADEDLISTINONEPAGE,
};
