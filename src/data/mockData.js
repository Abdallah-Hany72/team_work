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
    "id": 1,
    "name": "Trianon Café",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.2,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "Cozy",
      "Classic",
      "Historic",
      "Romantic"
    ],
    "description": "A legendary Alexandria landmark since 1905, serving classic coffee, pastries, and French-inspired breakfast.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Classic",
      "Historic"
    ],
    "address": "Ramleh Square, El Mansheya, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010000000",
    "bookingUrl": null,
    "reviewCount": 50,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Délices Alexandria",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.4,
    "price": "$$",
    "category": "Dessert",
    "cuisine": "Artisan Coffee",
    "tags": [
      "Cozy",
      "Classic",
      "Sweet",
      "Historic"
    ],
    "description": "Famous Greek pastry shop and tearoom founded in 1922, known for royal sweets and sea views.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Classic",
      "Sweet"
    ],
    "address": "46 Saad Zaghloul St, Ramleh Station, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010007919",
    "bookingUrl": null,
    "reviewCount": 165,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Cilantro Café",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560053508-2b502cd8b89a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.5,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "WorkFriendly",
      "Cozy",
      "Study Place"
    ],
    "description": "Pioneer of contemporary Egyptian cafes, offering quiet spots, books, and study corners.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Cozy",
      "Study Place"
    ],
    "address": "Sporting Seaside, Corniche Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010015838",
    "bookingUrl": null,
    "reviewCount": 280,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Starbucks (Four Seasons)",
    "image": "https://images.unsplash.com/photo-1588196749597-9e07b73c681d?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588196749597-9e07b73c681d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541019087-32b09b58269e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506084868270-3d5f4c40b8a1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.7,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "WorkFriendly",
      "Cozy",
      "WiFi"
    ],
    "description": "Spacious cafe layout, high-speed WiFi, and standard craft coffees in San Stefano.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Cozy",
      "WiFi"
    ],
    "address": "San Stefano Grand Plaza, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010023757",
    "bookingUrl": null,
    "reviewCount": 395,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Costa Coffee (Gleem Bay)",
    "image": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521474701967-8fa404f4b68e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508708191393-7f6fcb5eac97?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.9,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "WorkFriendly",
      "Cozy",
      "WiFi",
      "Scenic"
    ],
    "description": "Stunning shorefront seating, cozy corners, and workspace tables for remote workers.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Cozy",
      "WiFi"
    ],
    "address": "Gleem Bay, Corniche Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010031676",
    "bookingUrl": null,
    "reviewCount": 510,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "Brew & Chew (Sporting)",
    "image": "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.3,
    "price": "$$",
    "category": "Dessert",
    "cuisine": "International",
    "tags": [
      "Cozy",
      "Sweet",
      "Family Friendly"
    ],
    "description": " Molten cakes, gourmet chocolates, and savory bites in a lively family setting.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Sweet",
      "Family Friendly"
    ],
    "address": "Sporting Corniche, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010039595",
    "bookingUrl": null,
    "reviewCount": 625,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "Carlos Café (Tivoli)",
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.4,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "International",
    "tags": [
      "Cozy",
      "Outdoor",
      "WorkFriendly"
    ],
    "description": "Trendy seaside cafe featuring comfortable lounges, outdoor decks, and light meals.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Outdoor",
      "WorkFriendly"
    ],
    "address": "Tivoli Dome, Sporting Sea Side, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010047514",
    "bookingUrl": null,
    "reviewCount": 740,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "Bruxie's Alexandria",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.6,
    "price": "$$",
    "category": "Breakfast",
    "cuisine": "Modern American",
    "tags": [
      "Cozy",
      "Sweet",
      "Lively"
    ],
    "description": "Famous for waffle sandwiches, crispy chicken breakfast combos, and artisan tea blends.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Sweet",
      "Lively"
    ],
    "address": "Kafr Abdo, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010055433",
    "bookingUrl": null,
    "reviewCount": 855,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "Espresso Lab (Zizinia)",
    "image": "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570122223067-be31e33d4538?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527529482775-470a02d21f2d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1463797224155-25a3a4fe8078?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.8,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "WorkFriendly",
      "Quiet",
      "Modern"
    ],
    "description": "Third-wave specialty coffee laboratory with isolated laptop study benches.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Quiet",
      "Modern"
    ],
    "address": "El Horeya Road, Zizinia, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010063352",
    "bookingUrl": null,
    "reviewCount": 970,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 10,
    "name": "Koffee Kulture (Kafr Abdo)",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.9,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "Cozy",
      "Artistic",
      "Quiet"
    ],
    "description": "Minimalist coffee bar with courtyard garden seating, serving hand-brewed filter coffees.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Artistic",
      "Quiet"
    ],
    "address": "Kafr Abdo, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010071271",
    "bookingUrl": null,
    "reviewCount": 1085,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 11,
    "name": "Latte Art (Loran)",
    "image": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.3,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "Cozy",
      "Study Place",
      "WiFi"
    ],
    "description": "A cozy retreat offering craft coffee drinks, board games, and quiet reading desks.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Study Place",
      "WiFi"
    ],
    "address": "Loran Sea Side, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010079190",
    "bookingUrl": null,
    "reviewCount": 1200,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 12,
    "name": "Second Cup (San Stefano)",
    "image": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.5,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "WorkFriendly",
      "Cozy",
      "WiFi"
    ],
    "description": "Premium Canadian coffee branch serving specialty espresso and warm pastries in quiet surroundings.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Cozy",
      "WiFi"
    ],
    "address": "Four Seasons Complex, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010087109",
    "bookingUrl": null,
    "reviewCount": 1315,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 13,
    "name": "White & Blue Greek Club",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.6,
    "price": "$$$",
    "category": "Restaurants",
    "cuisine": "Mediterranean",
    "tags": [
      "Scenic",
      "Outdoor",
      "Greek",
      "Romantic"
    ],
    "description": "Perched over the harbor, offering Greek dining, fresh seafood, and views of fishing docks.",
    "vibeMetrics": [
      {
        "value": "Scenic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Scenic",
      "Outdoor",
      "Greek"
    ],
    "address": "Bahary, next to Qaitbay Citadel, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010095028",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 1430,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Scenic"
        ]
      }
    ]
  },
  {
    "id": 14,
    "name": "Sea Gull Restaurant",
    "image": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592861956120-e524c4899750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.8,
    "price": "$$$",
    "category": "Restaurants",
    "cuisine": "Seafood",
    "tags": [
      "Outdoor",
      "Seafood",
      "Scenic"
    ],
    "description": "Built like a coastal fort on the sea, serving fresh local fish and traditional sea dishes.",
    "vibeMetrics": [
      {
        "value": "Outdoor",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Outdoor",
      "Seafood",
      "Scenic"
    ],
    "address": "El Max Street, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010102947",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 1545,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Outdoor"
        ]
      }
    ]
  },
  {
    "id": 15,
    "name": "Balbaa Village (Sporting)",
    "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 5,
    "price": "$$",
    "category": "Restaurants",
    "cuisine": "Egyptian",
    "tags": [
      "Lively",
      "Family Friendly",
      "Local Food"
    ],
    "description": "Legendary multi-floor dining village serving authentic Egyptian grills, kofta, and sea catches.",
    "vibeMetrics": [
      {
        "value": "Lively",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Lively",
      "Family Friendly",
      "Local Food"
    ],
    "address": "Sporting, Corniche Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010110866",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 160,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Lively"
        ]
      }
    ]
  },
  {
    "id": 16,
    "name": "Mohamed Ahmed Restaurant",
    "image": "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526232759585-79737c5a9247?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525615921742-f607c390f77b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.4,
    "price": "$",
    "category": "Breakfast",
    "cuisine": "Egyptian",
    "tags": [
      "Historic",
      "Lively",
      "Local Food"
    ],
    "description": "Since 1957, serving Alexandria's most famous foul, falafel, shakshuka, and local breakfast dip dishes.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Lively",
      "Local Food"
    ],
    "address": "17 Shakour St, Ramleh Station, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010118785",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 275,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 17,
    "name": "Gad (Corniche)",
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.5,
    "price": "$",
    "category": "Restaurants",
    "cuisine": "Egyptian",
    "tags": [
      "Lively",
      "Fast Food",
      "Family Friendly"
    ],
    "description": "Popular fast-casual spot serving local shawarma, feteer, and breakfast options around the clock.",
    "vibeMetrics": [
      {
        "value": "Lively",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Lively",
      "Fast Food",
      "Family Friendly"
    ],
    "address": "Corniche Road, Mahatet El Raml, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010126704",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 390,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Lively"
        ]
      }
    ]
  },
  {
    "id": 18,
    "name": "Kadoura (Bahary)",
    "image": "https://images.unsplash.com/photo-1530243622473-b31c94d0cf1f?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1530243622473-b31c94d0cf1f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531973979-373f7c469b82?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.7,
    "price": "$$",
    "category": "Restaurants",
    "cuisine": "Seafood",
    "tags": [
      "Seafood",
      "Lively",
      "Local Food"
    ],
    "description": "A famous local seafood house. Pick your fresh fish raw from the counter and have it grilled to order.",
    "vibeMetrics": [
      {
        "value": "Seafood",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Seafood",
      "Lively",
      "Local Food"
    ],
    "address": "Bahary Waterfront St, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010134623",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 505,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Seafood"
        ]
      }
    ]
  },
  {
    "id": 19,
    "name": "Fish Market (Loran)",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.9,
    "price": "$$$",
    "category": "Restaurants",
    "cuisine": "Seafood",
    "tags": [
      "Scenic",
      "Outdoor",
      "Seafood",
      "Romantic"
    ],
    "description": "Gourmet sea-dining complex with outdoor terraces extending directly over Mediterranean waves.",
    "vibeMetrics": [
      {
        "value": "Scenic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Scenic",
      "Outdoor",
      "Seafood"
    ],
    "address": "Loran Sea Side Complex, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010142542",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 620,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Scenic"
        ]
      }
    ]
  },
  {
    "id": 20,
    "name": "Jeeda's Burger",
    "image": "https://images.unsplash.com/photo-1481070795723-adf1f3e82197?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1481070795723-adf1f3e82197?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485962395865-3209c483d7c6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502301197279-6677f52d5952?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.2,
    "price": "$$",
    "category": "Restaurants",
    "cuisine": "International",
    "tags": [
      "Cozy",
      "Lively",
      "Fast Food"
    ],
    "description": "Boutique burger diner serving gourmet charcoal-grilled patties and fresh milkshakes.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Lively",
      "Fast Food"
    ],
    "address": "Kafr Abdo, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010150461",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 735,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 21,
    "name": "Santa Lucia",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.4,
    "price": "$$$$",
    "category": "Restaurants",
    "cuisine": "International",
    "tags": [
      "Historic",
      "Romantic",
      "Quiet"
    ],
    "description": "Alexandria's premier classic upscale restaurant since 1932, serving European dishes under soft lighting.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Romantic",
      "Quiet"
    ],
    "address": "40 Safia Zaghloul St, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010158380",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 850,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 22,
    "name": "Sky Roof Windsor Palace",
    "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589302168068-9646c2e9d511?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.6,
    "price": "$$$",
    "category": "Entertainment",
    "cuisine": "Cocktail Bar",
    "tags": [
      "Scenic",
      "Outdoor",
      "Rooftop",
      "Romantic",
      "LateNight"
    ],
    "description": "Stunning rooftop lounge with views of Eastern Harbor, presenting gourmet meals and cocktails.",
    "vibeMetrics": [
      {
        "value": "Scenic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Scenic",
      "Outdoor",
      "Rooftop"
    ],
    "address": "17 El Shohada St, Ramleh Station, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010166299",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 965,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Scenic"
        ]
      }
    ]
  },
  {
    "id": 23,
    "name": "Tivoli Dome Alexandria",
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.7,
    "price": "$$$",
    "category": "Entertainment",
    "cuisine": "International",
    "tags": [
      "Outdoor",
      "Family Friendly",
      "Lively"
    ],
    "description": "Open-air seaside food complex hosting global franchises, restaurants, and lounges.",
    "vibeMetrics": [
      {
        "value": "Outdoor",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Outdoor",
      "Family Friendly",
      "Lively"
    ],
    "address": "Sporting Seaside, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010174218",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 1080,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Outdoor"
        ]
      }
    ]
  },
  {
    "id": 24,
    "name": "Bibliotheca Alexandrina",
    "image": "https://images.unsplash.com/photo-1563918073571-a58536653526?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1563918073571-a58536653526?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590244921951-3a3a1f7dbfc7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580537659444-2453e9ec49b6?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.9,
    "price": "$",
    "category": "Libraries",
    "cuisine": "Mediterranean",
    "tags": [
      "Quiet",
      "Historic",
      "WorkFriendly",
      "Educational"
    ],
    "description": "Majestic modern library and cultural center. Offers silent reading rooms and architectural views.",
    "vibeMetrics": [
      {
        "value": "Quiet",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Quiet",
      "Historic",
      "WorkFriendly"
    ],
    "address": "Port Said St, El Shatby, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010182137",
    "bookingUrl": null,
    "reviewCount": 1195,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Quiet"
        ]
      }
    ]
  },
  {
    "id": 25,
    "name": "Maktab Coworking Space",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531535934027-667f6db8a8ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.3,
    "price": "$$",
    "category": "Coworking Spaces",
    "cuisine": "Modern American",
    "tags": [
      "WorkFriendly",
      "Productive",
      "Quiet",
      "WiFi"
    ],
    "description": "Historic building converted into a quiet workspace for freelancers, featuring fast internet.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Productive",
      "Quiet"
    ],
    "address": "Fouad St, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010190056",
    "bookingUrl": null,
    "reviewCount": 1310,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 26,
    "name": "Regus Alexandria (Sporting)",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.5,
    "price": "$$$",
    "category": "Coworking Spaces",
    "cuisine": "Modern American",
    "tags": [
      "WorkFriendly",
      "Productive",
      "Quiet"
    ],
    "description": "Premium serviced offices and workspaces with panoramic coastal views of the Mediterranean.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Productive",
      "Quiet"
    ],
    "address": "Sporting, Corniche Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010197975",
    "bookingUrl": null,
    "reviewCount": 1425,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 27,
    "name": "The Hive Workspace",
    "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507537297825-7b824021b0dc?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.6,
    "price": "$$",
    "category": "Coworking Spaces",
    "cuisine": "Modern American",
    "tags": [
      "WorkFriendly",
      "Productive",
      "WiFi"
    ],
    "description": "Modern collaborative study space offering meeting rooms, high-speed WiFi, and unlimited coffee.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Productive",
      "WiFi"
    ],
    "address": "Saba Pasha, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010205894",
    "bookingUrl": null,
    "reviewCount": 1540,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 28,
    "name": "Citadel of Qaitbay",
    "image": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464694312210-2ca7517400ec?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.8,
    "price": "$",
    "category": "Museums",
    "cuisine": "Mediterranean",
    "tags": [
      "Historic",
      "Scenic",
      "Outdoor"
    ],
    "description": "15th-century defensive fortress built on the ruins of the Pharos Lighthouse.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Scenic",
      "Outdoor"
    ],
    "address": "Bahary, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010213813",
    "bookingUrl": null,
    "reviewCount": 155,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 29,
    "name": "Stanley Bridge",
    "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 5,
    "price": "$",
    "category": "Entertainment",
    "cuisine": "Mediterranean",
    "tags": [
      "Scenic",
      "Outdoor",
      "Historic"
    ],
    "description": "Iconic ocean-bridge walkway offering sunset strolls and sea view towers.",
    "vibeMetrics": [
      {
        "value": "Scenic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Scenic",
      "Outdoor",
      "Historic"
    ],
    "address": "Stanley Corniche Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010221732",
    "bookingUrl": null,
    "reviewCount": 270,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Scenic"
        ]
      }
    ]
  },
  {
    "id": 30,
    "name": "Montaza Palace Gardens",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473116763269-255f74a75f6c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.3,
    "price": "$",
    "category": "Parks",
    "cuisine": "Mediterranean",
    "tags": [
      "Outdoor",
      "Historic",
      "Scenic",
      "Family Friendly"
    ],
    "description": "370 acres of royal gardens, pine forests, and sandy beaches surrounding the royal palaces.",
    "vibeMetrics": [
      {
        "value": "Outdoor",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Outdoor",
      "Historic",
      "Scenic"
    ],
    "address": "Mandara, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010229651",
    "bookingUrl": null,
    "reviewCount": 385,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Outdoor"
        ]
      }
    ]
  },
  {
    "id": 31,
    "name": "Alexandria National Museum",
    "image": "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518638150341-db706e86654e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601961405399-801fb1f345ac?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.5,
    "price": "$",
    "category": "Museums",
    "cuisine": "Mediterranean",
    "tags": [
      "Historic",
      "Educational",
      "Indoor"
    ],
    "description": "Italianate palace museum displaying Alexandria's artifacts and sunken marine treasures.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Educational",
      "Indoor"
    ],
    "address": "110 El Horreya Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010237570",
    "bookingUrl": null,
    "reviewCount": 500,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 32,
    "name": "Roman Amphitheatre",
    "image": "https://images.unsplash.com/photo-1566121318-8f83030b65f3?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1566121318-8f83030b65f3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599940798782-9df7283626e2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503177119275-0aa32b31d458?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.7,
    "price": "$",
    "category": "Museums",
    "cuisine": "Mediterranean",
    "tags": [
      "Historic",
      "Educational",
      "Outdoor"
    ],
    "description": "Restored 2nd-century Roman marble galleries and amphitheater ruins in central Alexandria.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Educational",
      "Outdoor"
    ],
    "address": "Kom El Deka, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010245489",
    "bookingUrl": null,
    "reviewCount": 615,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 33,
    "name": "Pompey's Pillar",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533854775446-65c4a3765e9f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.8,
    "price": "$",
    "category": "Museums",
    "cuisine": "Mediterranean",
    "tags": [
      "Historic",
      "Educational",
      "Outdoor"
    ],
    "description": "A massive 27-meter red Aswan granite column erected in honor of Emperor Diocletian.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Educational",
      "Outdoor"
    ],
    "address": "Karmouz, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010253408",
    "bookingUrl": null,
    "reviewCount": 730,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 34,
    "name": "Catacombs of Kom El Shoqafa",
    "image": "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558582452-c5822904c2db?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548625361-155de0cbb558?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.2,
    "price": "$",
    "category": "Museums",
    "cuisine": "Mediterranean",
    "tags": [
      "Historic",
      "Educational",
      "Indoor"
    ],
    "description": "Ancient Roman-Egyptian underground catacombs carved three levels deep into solid rock.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Educational",
      "Indoor"
    ],
    "address": "Karmouz, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010261327",
    "bookingUrl": null,
    "reviewCount": 845,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 35,
    "name": "Alexandria Corniche",
    "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509043513363-dbf240bc0bc4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520520731441-99c844165a5d?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.4,
    "price": "$",
    "category": "Parks",
    "cuisine": "Mediterranean",
    "tags": [
      "Scenic",
      "Outdoor",
      "Lively"
    ],
    "description": "The famous seaside promenade stretching along the Mediterranean shore of Alexandria.",
    "vibeMetrics": [
      {
        "value": "Scenic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Scenic",
      "Outdoor",
      "Lively"
    ],
    "address": "Corniche Road, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010269246",
    "bookingUrl": null,
    "reviewCount": 960,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Scenic"
        ]
      }
    ]
  },
  {
    "id": 36,
    "name": "San Stefano Grand Plaza",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1471922694254-483739454c7c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.5,
    "price": "$$$$",
    "category": "Shopping",
    "cuisine": "International",
    "tags": [
      "Modern",
      "Family Friendly",
      "Indoor"
    ],
    "description": "Grand seaside skyscraper housing a luxury mall, dining court, and Four Seasons hotel.",
    "vibeMetrics": [
      {
        "value": "Modern",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Modern",
      "Family Friendly",
      "Indoor"
    ],
    "address": "San Stefano, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010277165",
    "bookingUrl": null,
    "reviewCount": 1075,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Modern"
        ]
      }
    ]
  },
  {
    "id": 37,
    "name": "Royal Jewelry Museum",
    "image": "https://images.unsplash.com/photo-1563918073571-a58536653526?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1563918073571-a58536653526?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590244921951-3a3a1f7dbfc7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580537659444-2453e9ec49b6?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Alexandria, Egypt",
    "rating": 4.7,
    "price": "$$",
    "category": "Museums",
    "cuisine": "Mediterranean",
    "tags": [
      "Historic",
      "Scenic",
      "Indoor"
    ],
    "description": "Stunning palace housing precious crown jewels and gold masterpieces of the Muhammad Ali Dynasty.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Scenic",
      "Indoor"
    ],
    "address": "Zizinia, Alexandria",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010285084",
    "bookingUrl": null,
    "reviewCount": 1190,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 38,
    "name": "Khan El Khalili Bazaar",
    "image": "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464694312210-2ca7517400ec?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.9,
    "price": "$$",
    "category": "Shopping",
    "cuisine": "Egyptian",
    "tags": [
      "Historic",
      "Outdoor",
      "Lively",
      "Cultural"
    ],
    "description": "World-famous medieval street market filled with lanterns, silver, and historic cafés.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Outdoor",
      "Lively"
    ],
    "address": "Old Cairo, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010293003",
    "bookingUrl": null,
    "reviewCount": 1305,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 39,
    "name": "Al Azhar Park",
    "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.3,
    "price": "$",
    "category": "Parks",
    "cuisine": "Egyptian",
    "tags": [
      "Outdoor",
      "Scenic",
      "Family Friendly",
      "Greenery"
    ],
    "description": "74-acre park offering green hills, fountains, and panoramas of Islamic Cairo.",
    "vibeMetrics": [
      {
        "value": "Outdoor",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Outdoor",
      "Scenic",
      "Family Friendly"
    ],
    "address": "Salah Salem Rd, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010300922",
    "bookingUrl": null,
    "reviewCount": 1420,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Outdoor"
        ]
      }
    ]
  },
  {
    "id": 40,
    "name": "Holm Café (Zamalek)",
    "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560053508-2b502cd8b89a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.4,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "Cozy",
      "WorkFriendly",
      "Artistic",
      "Quiet"
    ],
    "description": "Minimalist specialty coffee lounge with quiet workspaces in elegant Zamalek.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "WorkFriendly",
      "Artistic"
    ],
    "address": "Zamalek Island, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010308841",
    "bookingUrl": null,
    "reviewCount": 1535,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  },
  {
    "id": 41,
    "name": "Beano's Café (Maadi)",
    "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588196749597-9e07b73c681d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541019087-32b09b58269e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506084868270-3d5f4c40b8a1?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.6,
    "price": "$$",
    "category": "Cafés",
    "cuisine": "Artisan Coffee",
    "tags": [
      "WorkFriendly",
      "Cozy",
      "Study Place"
    ],
    "description": "Remote work hotspot with study tables, power sockets, and strong coffee.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Cozy",
      "Study Place"
    ],
    "address": "Road 9, Maadi, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010316760",
    "bookingUrl": null,
    "reviewCount": 150,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 42,
    "name": "Osana Family Wellness",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430eb094?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.8,
    "price": "$$$",
    "category": "Coworking Spaces",
    "cuisine": "Mediterranean",
    "tags": [
      "Quiet",
      "Outdoor",
      "Healthy",
      "Cozy"
    ],
    "description": "Historic villa garden coworking hub, yoga studio, and healthy restaurant.",
    "vibeMetrics": [
      {
        "value": "Quiet",
        "label": "Social Energy"
      },
      {
        "value": "Soft",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Quiet",
      "Outdoor",
      "Healthy"
    ],
    "address": "Maadi, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010324679",
    "bookingUrl": null,
    "reviewCount": 265,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Quiet"
        ]
      }
    ]
  },
  {
    "id": 43,
    "name": "District 5 Mall",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473116763269-255f74a75f6c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.9,
    "price": "$$$",
    "category": "Shopping",
    "cuisine": "International",
    "tags": [
      "Modern",
      "Family Friendly",
      "Outdoor"
    ],
    "description": "Upscale lifestyle hub featuring outdoor restaurants, shopping, and weekly bazaars.",
    "vibeMetrics": [
      {
        "value": "Modern",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Modern",
      "Family Friendly",
      "Outdoor"
    ],
    "address": "Sokhna Highway, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010332598",
    "bookingUrl": null,
    "reviewCount": 380,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Modern"
        ]
      }
    ]
  },
  {
    "id": 44,
    "name": "Cairo Festival City",
    "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509043513363-dbf240bc0bc4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520520731441-99c844165a5d?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.3,
    "price": "$$$$",
    "category": "Shopping",
    "cuisine": "International",
    "tags": [
      "Modern",
      "Family Friendly",
      "Entertainment"
    ],
    "description": "Massive shopping destination with a dancing fountain amphitheater and theme parks.",
    "vibeMetrics": [
      {
        "value": "Modern",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Modern",
      "Family Friendly",
      "Entertainment"
    ],
    "address": "New Cairo, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010340517",
    "bookingUrl": null,
    "reviewCount": 495,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Modern"
        ]
      }
    ]
  },
  {
    "id": 45,
    "name": "The Greek Campus",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531535934027-667f6db8a8ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.5,
    "price": "$$",
    "category": "Coworking Spaces",
    "cuisine": "Modern American",
    "tags": [
      "WorkFriendly",
      "Productive",
      "Modern",
      "WiFi"
    ],
    "description": "Startup tech hub offering co-working setups and fiber internet.",
    "vibeMetrics": [
      {
        "value": "WorkFriendly",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "WorkFriendly",
      "Productive",
      "Modern"
    ],
    "address": "Downtown Cairo, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010348436",
    "bookingUrl": null,
    "reviewCount": 610,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "WorkFriendly"
        ]
      }
    ]
  },
  {
    "id": 46,
    "name": "The Tap East",
    "image": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592861956120-e524c4899750?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Cairo, Egypt",
    "rating": 4.7,
    "price": "$$$",
    "category": "Entertainment",
    "cuisine": "Cocktail Bar",
    "tags": [
      "Lively",
      "LateNight",
      "Music"
    ],
    "description": "Lively pub stage featuring live bands, wings, games, and cold drafts.",
    "vibeMetrics": [
      {
        "value": "Lively",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Lively",
      "LateNight",
      "Music"
    ],
    "address": "New Cairo, Cairo",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010356355",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 725,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Lively"
        ]
      }
    ]
  },
  {
    "id": 47,
    "name": "Pyramids of Giza & Sphinx",
    "image": "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1545562131-255562547d34?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518638150341-db706e86654e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601961405399-801fb1f345ac?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Giza, Egypt",
    "rating": 4.8,
    "price": "$$",
    "category": "Museums",
    "cuisine": "Egyptian",
    "tags": [
      "Historic",
      "Scenic",
      "Outdoor",
      "Iconic"
    ],
    "description": "Ancient wonder of the world housing Pyramids of Khufu and Sphinx monument.",
    "vibeMetrics": [
      {
        "value": "Historic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Historic",
      "Scenic",
      "Outdoor"
    ],
    "address": "Al Haram Road, Giza",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010364274",
    "bookingUrl": null,
    "reviewCount": 840,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Historic"
        ]
      }
    ]
  },
  {
    "id": 48,
    "name": "Arkan Plaza (Zayed)",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1471922694254-483739454c7c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "Giza, Egypt",
    "rating": 5,
    "price": "$$$$",
    "category": "Shopping",
    "cuisine": "International",
    "tags": [
      "Modern",
      "Outdoor",
      "Lively"
    ],
    "description": "Open-air dining promenade and retail center in Giza's Sheikh Zayed area.",
    "vibeMetrics": [
      {
        "value": "Modern",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Modern",
      "Outdoor",
      "Lively"
    ],
    "address": "Sheikh Zayed, Giza",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010372193",
    "bookingUrl": null,
    "reviewCount": 955,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Modern"
        ]
      }
    ]
  },
  {
    "id": 49,
    "name": "Marassi Beach Resort",
    "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "North Coast, Egypt",
    "rating": 4.4,
    "price": "$$$$",
    "category": "Beaches",
    "cuisine": "Mediterranean",
    "tags": [
      "Outdoor",
      "Beaches",
      "Luxury",
      "Summer"
    ],
    "description": "Luxury summer coastal beaches, turquoise lagoons, and upscale marina lifestyle.",
    "vibeMetrics": [
      {
        "value": "Outdoor",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Outdoor",
      "Beaches",
      "Luxury"
    ],
    "address": "Km 125 Matrouh Road, Sidi Abdel Rahman",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010380112",
    "bookingUrl": null,
    "reviewCount": 1070,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Outdoor"
        ]
      }
    ]
  },
  {
    "id": 50,
    "name": "Hacienda Bay Resort",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473116763269-255f74a75f6c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "North Coast, Egypt",
    "rating": 4.5,
    "price": "$$$$",
    "category": "Beaches",
    "cuisine": "Mediterranean",
    "tags": [
      "Outdoor",
      "Beaches",
      "Luxury",
      "Summer"
    ],
    "description": "Premium summer resort with sandy beaches, golf course, and exclusive lagoons.",
    "vibeMetrics": [
      {
        "value": "Outdoor",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Outdoor",
      "Beaches",
      "Luxury"
    ],
    "address": "Sidi Abdel Rahman, North Coast",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010388031",
    "bookingUrl": null,
    "reviewCount": 1185,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Outdoor"
        ]
      }
    ]
  },
  {
    "id": 51,
    "name": "Abu Tig Marina",
    "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509043513363-dbf240bc0bc4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520520731441-99c844165a5d?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "El Gouna, Egypt",
    "rating": 4.7,
    "price": "$$$$",
    "category": "Shopping",
    "cuisine": "International",
    "tags": [
      "Scenic",
      "Outdoor",
      "Romantic",
      "Luxury"
    ],
    "description": "Red Sea marina promenade featuring fine-dining, yachts, and sunset views.",
    "vibeMetrics": [
      {
        "value": "Scenic",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Scenic",
      "Outdoor",
      "Romantic"
    ],
    "address": "Red Sea Marina, El Gouna",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010395950",
    "bookingUrl": null,
    "reviewCount": 1300,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Scenic"
        ]
      }
    ]
  },
  {
    "id": 52,
    "name": "Zia Amelia Italian",
    "image": "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80",
    "images": [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80"
    ],
    "location": "El Gouna, Egypt",
    "rating": 4.9,
    "price": "$$$",
    "category": "Restaurants",
    "cuisine": "Italian",
    "tags": [
      "Cozy",
      "Romantic",
      "Italian"
    ],
    "description": "Intimate Italian kitchen serving wood-fired pizza and handmade pastas.",
    "vibeMetrics": [
      {
        "value": "Cozy",
        "label": "Social Energy"
      },
      {
        "value": "Lively",
        "label": "Acoustics"
      },
      {
        "value": "$$$",
        "label": "Price Range"
      }
    ],
    "vibeTags": [
      "Cozy",
      "Romantic",
      "Italian"
    ],
    "address": "Downtown Square, El Gouna",
    "hours": [
      "Daily: 9:00 AM - 11:30 PM"
    ],
    "contact": "+20 1010403869",
    "bookingUrl": "https://www.opentable.com/",
    "reviewCount": 1415,
    "reviews": [
      {
        "id": 1,
        "userName": "Yassine",
        "userAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "rating": 5,
        "date": "3 days ago",
        "text": "Absolutely stunning environment. High quality amenities and super helpful staff.",
        "tags": [
          "Cozy"
        ]
      }
    ]
  }
];
