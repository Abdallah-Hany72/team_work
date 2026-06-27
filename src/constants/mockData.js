// src/constants/mockData.js

export const MOCK_SPOTS = [
  {
    id: "1",
    name: "The Glass Pavilion",
    location: "Williamsburg, Brooklyn",
    rating: 4.9,
    price: "$$$",
    category: "Modern American Cafe",
    tags: ["Quiet", "Outdoor Seating", "Insta-worthy"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPq4ZBFcz2rjQoY89BqK_pEEw-LWEdt2YvOXhuNH21zOQ9HCp9Eb2x7yQcsfVo_lgpKyn_LOyk4RXi26BovuXrS_6wgonS_QpKP0tYrn_1a3KbYGmrTNXNKcpCd7LeYMT6wSf5INzXwo_Ye6AidHZaCi5fIPnG_PvTCx6gV1msYgHspYhFoqOftPYuzqUKG3qmdwz9SNr92IyeOLTi-fe11X1K37gSmlBH6mB6EN77Y1oWrPAZfFiKePD7GHWrO3SUyulVo6qUD_k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5AhG8i1P4ad6dgRKwVg-UOAbIUvpuU7v0z53Ys-lLRekKA6A_CKLIQAxmJPiwNFuZwkUmnWa5-7YKBn_aWvtxoOa9FLjqHeqmwI0h_dmSwDbe5QucNpOzrtV4rWn4PA-3-DLTia75zHtQSwCbph3iJ7SLX2ZakOJpq7_rrN9WdO-VIU6QWSfNU8U5etIiOE8LqifvIKOuiUnkD0JoOImcY1CT9PP0XkJD22u6Rgy4Txf11Z9xzNamxvLyvJAM2zyBSVvkkCwFoSg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq-Kgfs9EEAGFdSJAuF02I8WKQRFzbU5IZjMlBDdgxHMJGF1l0b8tDRzlaqgS4-yiqC-ejR0m6DwZgZIc3BQdZMMyJonaT5x8Rc_WFJUJUHHVmz8_0RXotKyPYnH6XL_fBU-cmR2AozY-rJS40VdmDdhktSzG7I48AH4biUce5xM9X_ZtNjgu-Fjmw-8ZSJ_Z0vOj-sqgIjRSbpPxEDbo4ms6MBKFdc5fcrLPZYIcpiWIQpqBhPXZpUL-ZBcUIs3bu8dKLazFDgiQ"
    ],
    description: "L'Avenue Terrace captures the essence of a Parisian escape right in the heart of the city. As the golden hour hits, the marble surfaces begin to glow, creating an effortlessly chic atmosphere perfect for curated conversations. Known for its impeccable service and Insta-worthy corner views, it's where the sophisticated socialite comes to see and be seen.",
    vibeMetrics: [
      { value: "High", label: "Social Energy" },
      { value: "Soft", label: "Acoustics" },
      { value: "Warm", label: "Lighting" },
      { value: "$$$", label: "Price Range" }
    ],
    vibeTags: ["Business Casual", "Rooftop", "Sunset Views", "Craft Cocktails", "Live Jazz (Sat)"],
    address: "122 Fifth Avenue, 9th Floor\nNew York, NY 10011",
    hours: [
      "Mon - Thu: 11:00 AM - 11:00 PM",
      "Fri - Sat: 11:00 AM - 01:00 AM",
      "Sun: 10:00 AM - 10:00 PM"
    ],
    contact: "+1 (212) 555-0198",
    reviewCount: 124,
    reviews: [
      {
        id: "r_1",
        userName: "Elena R.",
        userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
        rating: 5,
        date: "2 days ago",
        text: "The mushroom tartine is to die for. Perfectly lit for photos, but honestly, the staff's kindness is what makes me come back.",
        tags: ["Quiet", "Insta-worthy"]
      },
      {
        id: "r_2",
        userName: "Sophia Chen",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        rating: 4.8,
        date: "1 week ago",
        text: "Lovely ambiance in the evening. Highly recommended for couples wanting a quiet cocktail with city light views.",
        tags: ["Romantic", "Rooftop"]
      }
    ]
  },
  {
    id: "2",
    name: "Velvet Room",
    location: "Soho, Manhattan",
    rating: 4.7,
    price: "$$",
    category: "Cocktail Bar",
    tags: ["Late Night"],
    images: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600",
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600"
    ],
    description: "An intimate dimly-lit lounge in Soho serving bespoke mixology cocktails, surrounded by dark velvet walls and soft jazz background music.",
    vibeMetrics: [
      { value: "Intimate", label: "Social Energy" },
      { value: "Muffled", label: "Acoustics" },
      { value: "Dim", label: "Lighting" },
      { value: "$$", label: "Price Range" }
    ],
    vibeTags: ["Late Night", "Cozy", "Classic Cocktails"],
    address: "88 Mercer St\nNew York, NY 10012",
    hours: [
      "Mon - Thu: 5:00 PM - 12:00 AM",
      "Fri - Sat: 5:00 PM - 2:00 AM",
      "Sun: 5:00 PM - 11:00 PM"
    ],
    contact: "+1 (212) 555-0155",
    reviewCount: 89,
    reviews: []
  },
  {
    id: "3",
    name: "Flora Terrace",
    location: "Chelsea, NYC",
    rating: 4.8,
    price: "$$",
    category: "Mediterranean",
    tags: ["Insta-worthy"],
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
    ],
    description: "Lush botanical roof terrace offering fresh Greek dishes and light wines with panoramic garden settings.",
    vibeMetrics: [
      { value: "Bively", label: "Social Energy" },
      { value: "Moderate", label: "Acoustics" },
      { value: "Sunlit", label: "Lighting" },
      { value: "$$", label: "Price Range" }
    ],
    vibeTags: ["Outdoor Seating", "Sunset Views", "Brunch"],
    address: "210 10th Ave\nNew York, NY 10011",
    hours: [
      "Mon - Sun: 11:00 AM - 10:00 PM"
    ],
    contact: "+1 (212) 555-0177",
    reviewCount: 64,
    reviews: []
  },
  {
    id: "4",
    name: "Metric Brew",
    location: "West Loop, Chicago",
    rating: 4.6,
    price: "$$",
    category: "Artisan Coffee",
    tags: ["Work-Friendly"],
    images: [
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600"
    ],
    description: "Industrial cafe featuring single-origin pour overs, robust roast profile coffee and power outlets at every seat.",
    vibeMetrics: [
      { value: "Quiet", label: "Social Energy" },
      { value: "Humming", label: "Acoustics" },
      { value: "Bright", label: "Lighting" },
      { value: "$$", label: "Price Range" }
    ],
    vibeTags: ["WiFi", "Laptop Friendly", "Fast Service"],
    address: "912 W Randolph St\nChicago, IL 60607",
    hours: [
      "Mon - Fri: 7:00 AM - 6:00 PM",
      "Sat - Sun: 8:00 AM - 5:00 PM"
    ],
    contact: "+1 (312) 555-0144",
    reviewCount: 112,
    reviews: []
  },
  {
    id: "5",
    name: "Chapter One",
    location: "Back Bay, Boston",
    rating: 4.9,
    price: "$$$",
    category: "Tea & Spirits",
    tags: ["Quiet", "Cozy"],
    images: [
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600"
    ],
    description: "A dark library-like study with floor-to-ceiling bookshelves serving specialty loose-leaf teas and vintage spirits.",
    vibeMetrics: [
      { value: "Silent", label: "Social Energy" },
      { value: "Soft", label: "Acoustics" },
      { value: "Dim", label: "Lighting" },
      { value: "$$$", label: "Price Range" }
    ],
    vibeTags: ["Quiet Study", "Cozy Corner", "Rare Spirits"],
    address: "305 Newbury St\nBoston, MA 02115",
    hours: [
      "Mon - Sun: 12:00 PM - 11:00 PM"
    ],
    contact: "+1 (617) 555-0133",
    reviewCount: 94,
    reviews: []
  }
];

export const MOCK_SIMILAR_SPOTS = [
  {
    id: "similar_1",
    name: "The Conservatory",
    category: "Modern American",
    distance: "0.4 mi",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=100"
  },
  {
    id: "similar_2",
    name: "Vins & Co",
    category: "Wine Bar",
    distance: "1.2 mi",
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=100"
  }
];

export const MOCK_COLLECTIONS = [
  {
    id: "c_1",
    title: "Study Spots",
    description: "Quiet nooks with great WiFi and even better espresso.",
    mainImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
    sideImage: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=300",
    extraCount: 12,
    tag: "Focused",
    updatedText: "Updated yesterday"
  },
  {
    id: "c_2",
    title: "Friday Night Sushi",
    description: "Upscale date spots and lively omakase counters.",
    mainImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    sideImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300",
    extraCount: 5,
    tag: "Lively",
    updatedText: "Updated 3 days ago"
  },
  {
    id: "c_3",
    title: "Quiet Cafes",
    description: "The best places to hide away with a book or a friend.",
    mainImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
    sideImage: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=300",
    extraCount: 8,
    tag: "Chill",
    updatedText: "Updated 1 week ago"
  }
];

export const MOCK_SUGGESTIONS = [
  {
    id: "sug_1",
    source: 'Based on "Friday Night Sushi"',
    title: "Rooftop Tapas",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=100"
  },
  {
    id: "sug_2",
    source: "Trending in Brooklyn",
    title: "Hidden Bars",
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=100"
  }
];

export const MOCK_USER = {
  name: "Elena Rodriguez",
  location: "New York, NY",
  bio: "Avid coffee seeker and sunset chaser. Always on the hunt for the perfect quiet corner.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
  coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000",
  stats: {
    spotsShared: 54,
    reviewsWritten: 128,
    followers: "1.2k"
  },
  badges: [
    { id: "b1", label: "Early Adopter", color: "bg-teal-500/10 text-teal-600 border border-teal-500/20", icon: "check_circle" },
    { id: "b2", label: "Vibe Curator", color: "bg-orange-500/10 text-orange-600 border border-orange-500/20", icon: "auto_awesome" },
    { id: "b3", label: "Cafe Critic", color: "bg-yellow-500/10 text-yellow-600 border border-yellow-500/20", icon: "restaurant" },
    { id: "b4", label: "50+ Spots Shared", color: "bg-blue-500/10 text-blue-600 border border-blue-500/20", icon: "map" }
  ],
  reviews: [
    {
      id: "ur_1",
      spotTitle: "L'Avenue",
      spotImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200",
      rating: 5,
      date: "Oct 12, 2024",
      text: "The mushroom tartine at L'Avenue is to die for. The crust is perfectly flaky, and the thyme-infused cream is just the right amount of savory. Perfect spot for a quiet Sunday morning.",
      tags: ["QUIET", "INSTA-WORTHY"]
    },
    {
      id: "ur_2",
      spotTitle: "The Pour Over Bar",
      spotImage: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=200",
      rating: 5,
      date: "Oct 08, 2024",
      text: "Finally found a place that takes their light roasts seriously. A bit noisy during the lunch rush, but the atmosphere is unbeatable for deep work.",
      tags: ["CREATIVE", "WORK-FRIENDLY"]
    },
    {
      id: "ur_3",
      spotTitle: "Amber Lounge",
      spotImage: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=200",
      rating: 5,
      date: "Sep 30, 2024",
      text: "Best martinis in Chelsea. The music volume is low enough for a real conversation. A true hidden gem that feels very exclusive.",
      tags: ["LATE NIGHT", "COZY"]
    }
  ]
};

// Admin Mock Data
export const MOCK_ADMIN_STATS = {
  pendingPlaces: 148,
  offensiveReviews: 32,
  newUsers: 1204,
  healthScore: 98.2
};

export const MOCK_PENDING_PLACES = [
  {
    id: "p_1",
    name: "The Hearthstone Café",
    location: "Brooklyn, NY",
    submittedBy: "@urban_explorer",
    spotsApproved: 42,
    date: "Oct 24, 10:45 AM",
    description: "A quiet oasis hidden in a historic brownstone. Perfect for reading, light laptop work, or intimate conversation. Their lavender lattes are legendary, and the acoustic playlist is curated by local DJs.",
    tags: ["Cozy", "Quiet", "Historic", "Plant-friendly"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
    status: "Pending",
    flags: "CLEAR"
  },
  {
    id: "p_2",
    name: "Skyline Social Club",
    location: "Queens, NY",
    submittedBy: "@nyc_vibes",
    spotsApproved: 18,
    date: "Oct 24, 09:12 AM",
    description: "A sophisticated rooftop deck overlooking the Queensboro bridge. Excellent late-night cocktails.",
    tags: ["Late Night", "Views"],
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600",
    status: "Pending",
    flags: "DUPLICATE?"
  },
  {
    id: "p_3",
    name: "The Creative Nook",
    location: "Manhattan, NY",
    submittedBy: "@workaholic",
    spotsApproved: 5,
    date: "Oct 23, 11:58 PM",
    description: "A shared studio-cafe that boosts focus and output.",
    tags: ["Productive"],
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600",
    status: "Pending",
    flags: "CLEAR"
  }
];

export const MOCK_ADMIN_REVIEWS = [
  {
    id: "ar_1",
    venueName: "The Neon Loft",
    submittedBy: "@alex_vibe_seeker",
    userReviewsCount: 12,
    date: "2 hours ago",
    text: "The staff here are absolute [REDACTED] and treated us like trash. I hope this place burns down. Worst experience in the city by far. Don't go here if you value your dignity.",
    flagType: "OFFENSIVE CONTENT",
    flagReason: "Flagged by System AI",
    status: "Flagged",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=200"
  },
  {
    id: "ar_2",
    venueName: "Golden Crumb Bakery",
    submittedBy: "@user_992144",
    userReviewsCount: 1,
    date: "5 hours ago",
    text: "GREAT SERVICE BEST PLACE IN TOWN I LOVE GOLDEN CRUMB BAKERY THE SERVICE WAS EXCELLENT AND THE FOOD WAS AMAZING. GREAT SERVICE BEST PLACE IN TOWN I LOVE GOLDEN CRUMB BAKERY...",
    flagType: "POSSIBLE FAKE",
    flagReason: "Pattern Match: 'Review Bot Alpha'",
    status: "Flagged",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200"
  },
  {
    id: "ar_3",
    venueName: "Whispering Pages Cafe",
    submittedBy: "@clara_reads",
    userReviewsCount: 45,
    date: "Yesterday",
    text: "The perfect spot for a rainy Sunday. The chai is authentic and the quiet policy actually works. Highly recommend the almond croissant.",
    flagType: "STANDARD REVIEW",
    flagReason: "No issues detected",
    status: "Clean",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=200"
  }
];

export const MOCK_ADMIN_ACTIVITY = [
  { id: "a1", type: "user_banned", title: "User Banned", detail: "@troll_master42 was permanently banned for offensive reviews.", time: "2 MINS AGO" },
  { id: "a2", type: "place_approved", title: "Place Approved", detail: "'Golden Hour Bistro' is now live on the platform.", time: "18 MINS AGO" },
  { id: "a3", type: "content_alert", title: "Content Alert", detail: "High volume of reports in 'Soho' region. Investigation recommended.", time: "1 HOUR AGO" }
];

export const MOCK_ADMIN_USERS = [
  { id: "u1", name: "Sophia Chen", email: "sophia.c@example.com", joinDate: "Oct 12, 2023", spots: 24, reviews: 89, status: "Active", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
  { id: "u2", name: "Marcus Thorne", email: "m.thorne@design.io", joinDate: "Nov 05, 2023", spots: 156, reviews: 412, status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
  { id: "u3", name: "SpamBot99", email: "bot99@trashmail.org", joinDate: "Dec 20, 2023", spots: 0, reviews: 0, status: "Banned", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
  { id: "u4", name: "Arthur Sterling", email: "a.sterling@vantage.com", joinDate: "Jan 14, 2024", spots: 42, reviews: 15, status: "Active", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" }
];
