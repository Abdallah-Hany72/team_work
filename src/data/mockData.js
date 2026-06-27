// src/data/mockData.js

export const MOCK_REVIEWS_QUEUE = [
  {
    id: "r1",
    flagType: "offensive",
    flaggedBy: "System AI",
    timeAgo: "2 hours ago",
    venue: "The Neon Loft",
    user: "@alex_vibe_seeker",
    reviewCount: 12,
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=300",
    text: "The staff here were incredibly rude and the service was awful. Would not recommend this place to anyone.",
  },
  {
    id: "r2",
    flagType: "fake",
    flaggedBy: 'Pattern Match: "Review Bot Alpha"',
    timeAgo: "5 hours ago",
    venue: "Golden Crumb Bakery",
    user: "@user_992144",
    reviewCount: 1,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300",
    text: "Great service best place in town I love Golden Crumb Bakery the food was amazing...",
  },
  {
    id: "r3",
    flagType: "standard",
    flaggedBy: "No issues detected",
    timeAgo: "Yesterday",
    venue: "Whispering Pages Cafe",
    user: "@clara_reads",
    reviewCount: 45,
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=300",
    text: "The perfect spot for a rainy Sunday. The chai is authentic and the quiet policy actually works.",
  },
];

export const MOCK_PENDING_PLACES = [
  {
    id: "p1",
    name: "The Hearthstone Café",
    submittedBy: "@urban_explorer",
    tags: ["Cozy", "Quiet"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
    isNew: true,
    location: "Brooklyn, NY",
    description: "A quiet oasis hidden in a historic brownstone. Perfect for reading, light laptop work, or intimate conversation.",
    vibeTags: ["Cozy", "Quiet", "Historic", "Plant-friendly"],
    contributor: { name: "@urban_explorer", badge: "Top Contributor", spotsApproved: 42 },
    checks: { locationVerified: true, contactAccurate: true, photoRights: false, communityStandards: false },
  },
  {
    id: "p2",
    name: "Skyline Social Club",
    submittedBy: "@nyc_vibes",
    tags: ["Late Night"],
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400",
    isNew: false,
    location: "Manhattan, NY",
    description: "Rooftop lounge with skyline views, perfect for evening cocktails.",
    vibeTags: ["Late Night", "Rooftop", "Lively"],
    contributor: { name: "@nyc_vibes", badge: "Contributor", spotsApproved: 8 },
    checks: { locationVerified: true, contactAccurate: false, photoRights: false, communityStandards: false },
  },
  {
    id: "p3",
    name: "The Creative Nook",
    submittedBy: "@workaholic",
    tags: ["Productive"],
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400",
    isNew: false,
    location: "Chicago, IL",
    description: "Work-friendly cafe with fast wifi and plenty of outlets.",
    vibeTags: ["Productive", "WorkFriendly", "Quiet"],
    contributor: { name: "@workaholic", badge: "Contributor", spotsApproved: 15 },
    checks: { locationVerified: true, contactAccurate: true, photoRights: true, communityStandards: false },
  },
];

export const MOCK_USERS = [
  { id: "u1", name: "Sophia Chen", email: "sophia.c@example.com", joinDate: "Oct 12, 2023", spots: 24, reviews: 89, status: "active", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: "u2", name: "Marcus Thorne", email: "m.thorne@design.io", joinDate: "Nov 05, 2023", spots: 156, reviews: 412, status: "active", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: "u3", name: "SpamBot99", email: "bot99@trashmail.org", joinDate: "Dec 20, 2023", spots: 0, reviews: 0, status: "banned", avatar: "https://i.pravatar.cc/40?img=3" },
  { id: "u4", name: "Arthur Sterling", email: "a.sterling@vantage.com", joinDate: "Jan 14, 2024", spots: 42, reviews: 15, status: "active", avatar: "https://i.pravatar.cc/40?img=4" },
];

export const MOCK_SYSTEM_ACTIVITY = [
  { id: "a1", type: "banned", title: "User Banned", detail: "@troll_master42 was permanently banned for offensive reviews.", time: "2 mins ago" },
  { id: "a2", type: "approved", title: "Place Approved", detail: "'Golden Hour Bistro' is now live on the platform.", time: "18 mins ago" },
  { id: "a3", type: "alert", title: "Content Alert", detail: "High volume of reports in 'Soho' region. Investigation recommended.", time: "1 hour ago" },
];

export const MOCK_REGIONAL_GROWTH = [
  { city: "New York City", percent: 78 },
  { city: "Los Angeles", percent: 62 },
  { city: "London", percent: 45 },
];

export const MOCK_VIBE_TRENDS = ["Coziness", "Golden Hour", "Rooftop Vibes", "Hidden Gems", "Minimalist", "Insta-worthy"];

export const MOCK_REVIEW_QUEUE_TABLE = [
  { id: "q1", venue: "The Velvet Bean", user: "@urban_explorer", date: "Oct 24, 10:45 AM", flag: "CLEAR", image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=100" },
  { id: "q2", venue: "Neon Horizon", user: "@night_life_nyc", date: "Oct 24, 09:12 AM", flag: "DUPLICATE?", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=100" },
  { id: "q3", venue: "The Ivy Terrace", user: "@green_vibe", date: "Oct 23, 11:58 PM", flag: "CLEAR", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100" },
];

export const MOCK_SPOTS = [
  {
    id: 1,
    name: "The Hearthstone Café",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800",
    ],
    location: "Brooklyn, NY",
    rating: 4.8,
    price: "$$",
    category: "Cafe",
    cuisine: "Modern American",
    tags: ["Cozy", "Quiet", "Historic"],
    description: "A quiet oasis hidden in a historic brownstone.",

    vibeMetrics: [
      { value: "Quiet", label: "Social Energy" },
      { value: "Warm", label: "Lighting" },
      { value: "$$", label: "Price Range" },
    ],

    vibeTags: ["Historic", "Coffee", "Study Spot"],

    address: "15 Bedford Ave, Brooklyn, NY",

    hours: [
      "Mon-Fri: 8:00 AM - 9:00 PM",
      "Sat-Sun: 9:00 AM - 10:00 PM",
    ],

    contact: "+1 555 123 4567",
    bookingUrl: null,

    reviewCount: 124,

    reviews: [
      {
        id: 1,
        userName: "Sarah",
        userAvatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        rating: 5,
        date: "2 days ago",
        text: "Perfect place for studying and reading.",
        tags: ["Quiet", "Cozy"],
      },
    ],
  },

  {
    id: 2,
    name: "Skyline Social Club",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800",
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      
    ],
    location: "Manhattan, NY",
    rating: 4.7,
    price: "$$$",
    category: "Rooftop",
    cuisine: "International",
    tags: ["Late Night", "Rooftop", "Quiet", "Cozy"],
    description: "Rooftop lounge with skyline views.",

    vibeMetrics: [
      { value: "High", label: "Social Energy" },
      { value: "Dim", label: "Lighting" },
      { value: "$$$", label: "Price Range" },
    ],

    vibeTags: ["Rooftop", "Cocktails", "Nightlife"],

    address: "88 Broadway, Manhattan, NY",

    hours: [
      "Mon-Thu: 4:00 PM - 12:00 AM",
      "Fri-Sat: 4:00 PM - 2:00 AM",
      "Sun: 4:00 PM - 11:00 PM",
    ],

    contact: "+1 555 222 7788",
    reservationUrl: "https://www.opentable.com/",

    reviewCount: 89,

    reviews: [
      {
        id: 1,
        userName: "Michael",
        userAvatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        rating: 4.8,
        date: "1 week ago",
        text: "Amazing skyline view at sunset.",
        tags: ["Rooftop"],
      },
    ],
  },

  {
    id: 3,
    name: "The Creative Nook",
    image:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800",
  images: [
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
],
    location: "Chicago, IL",
    rating: 4.9,
    price: "$$",
    category: "Cafe",
    cuisine: "Tea & Spirits",
    tags: ["WorkFriendly", "Quiet", "Cozy"],
    description: "Work-friendly cafe with fast wifi.",

    vibeMetrics: [
      { value: "Focused", label: "Social Energy" },
      { value: "Bright", label: "Lighting" },
      { value: "$$", label: "Price Range" },
    ],

    vibeTags: ["WiFi", "Laptop Friendly", "Remote Work"],

    address: "240 Michigan Ave, Chicago, IL",

    hours: [
      "Mon-Fri: 7:00 AM - 8:00 PM",
      "Sat-Sun: 8:00 AM - 6:00 PM",
    ],

    contact: "+1 555 345 9988",
    bookingUrl: "https://www.opentable.com/",

    reviewCount: 210,

    reviews: [
      {
        id: 1,
        userName: "Emma",
        userAvatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        rating: 5,
        date: "3 days ago",
        text: "Great wifi and plenty of outlets.",
        tags: ["WorkFriendly"],
      },
    ],
  },

  {
    id: 4,
    name: "Golden Crumb Bakery",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    ],
    location: "Boston, MA",
    rating: 4.6,
    price: "$",
    category: "Bakery",
    cuisine: "Artisan Coffee",
    tags: ["Fresh", "Artisan", "Quiet"],
    description: "Fresh pastries and artisan coffee.",

    vibeMetrics: [
      { value: "Relaxed", label: "Social Energy" },
      { value: "Sunny", label: "Lighting" },
      { value: "$", label: "Price Range" },
    ],

    vibeTags: ["Pastries", "Breakfast", "Coffee"],

    address: "12 Beacon St, Boston, MA",

    hours: [
      "Daily: 6:00 AM - 6:00 PM",
    ],

    contact: "+1 555 778 1234",
    bookingUrl: "https://www.opentable.com/",

    reviewCount: 75,

    reviews: [
      {
        id: 1,
        userName: "Olivia",
        userAvatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
        rating: 4.7,
        date: "5 days ago",
        text: "The croissants are incredible.",
        tags: ["Fresh"],
      },
    ],
  },

  {
    id: 5,
    name: "Whispering Pages Cafe",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800",
    images: [
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
    ],
    location: "Seattle, WA",
    rating: 4.9,
    price: "$$",
    category: "Cafe",
    cuisine: "Coffee & Books",
    tags: ["Quiet", "Bookish", "WorkFriendly"],
    description: "Perfect place for reading and relaxing.",

    vibeMetrics: [
      { value: "Silent", label: "Social Energy" },
      { value: "Soft", label: "Lighting" },
      { value: "$$", label: "Price Range" },
    ],

    vibeTags: ["Books", "Reading", "Study Spot"],

    address: "52 Pine St, Seattle, WA",

    hours: [
      "Mon-Sun: 8:00 AM - 10:00 PM",
    ],

    contact: "+1 555 991 4455",
    bookingUrl: "https://www.opentable.com/",

    reviewCount: 180,

    reviews: [
      {
        id: 1,
        userName: "Sophia",
        userAvatar:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100",
        rating: 5,
        date: "Yesterday",
        text: "My favorite reading café ever.",
        tags: ["Bookish", "Quiet"],
      },
    ],
  },
];