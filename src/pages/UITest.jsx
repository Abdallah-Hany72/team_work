import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

// Import all UI components
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";
import InputField from "../Components/Ui/Form/InputField";
import SearchBar from "../Components/Ui/SearchBar/SearchBar";
import TagBadge from "../Components/Ui/TagBadge/TagBadge";
import SectionHeader from "../Components/Ui/SectionHeader/SectionHeader";

import SpotCard from "../Components/Ui/SpotCard/SpotCard";
import MoodFilter from "../Components/discover/MoodFilter";
import CuisineFilter from "../Components/discover/CuisineFilter";
import FiltersSidebar from "../Components/discover/FiltersSidebar";
import SortDropdown from "../Components/discover/SortDropdown";
import SpotList from "../Components/discover/SpotList";

import NearbySuggestions from "../Components/AddSpot/NearbySuggestions.jsx";
import RecentSearches from "../Components/AddSpot/RecentSearches";
import SpotForm from "../Components/AddSpot/SpotForm";
import PhotoUploader from "../Components/AddSpot/PhotoUploader";
import OperatingHoursForm from "../Components/AddSpot/OperatingHoursForm";
import SuccessBanner from "../Components/AddSpot/SuccessBanner";
import SpotPreviewCard from "../Components/AddSpot/SpotPreviewCard";
import ShareSpotSection from "../Components/AddSpot/ShareSpotSection";
import NextActions from "../Components/AddSpot/NextActions";
import ManualAddPrompt from "../Components/AddSpot/ManualAddPrompt";
import FormStepper from "../Components/AddSpot/FormStepper";
import VibeSelector from "../Components/AddSpot/VibeSelector";

import PasswordField from "../Components/auth/PasswordField";
import AuthFooterLink from "../Components/auth/AuthFooterLink";
import AgreementCheckbox from "../Components/auth/AgreementCheckbox";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  ShieldCheck,
  MapPin,
  Users,
  LogIn,
  UserPlus,
  BarChart3,
  Settings,
  Radio,
  MessageSquare,
  ShieldAlert,
  LayoutGrid,
  AlertCircle
} from "lucide-react";

// Person 2 Imports
import HeroSection from "../Components/Person 2/HeroSection";
import FeaturedSpot from "../Components/Person 2/FeaturedSpot";
import TrendingVibes from "../Components/Person 2/TrendingVibes";

// Person 4 Imports
import SpotGallery from "../Components/Person 4/SpotGallery";
import SpotInfo from "../Components/Person 4/SpotInfo";
import SpotMetaData from "../Components/Person 4/SpotMetaData";
import ReservationSection from "../Components/Person 4/ReservationSection";
import CommunityReviews from "../Components/Person 4/CommunityReviews";

// Person 6 Imports
import ProfileHeader from "../Components/Person 6/ProfileHeader";
import UserStats from "../Components/Person 6/UserStats";
import CollectionsGrid from "../Components/Person 6/CollectionsGrid";
import UserReviews from "../Components/Person 6/UserReviews";

// Footer Import
import Footer from "../Components/Ui/Footer/Footer";

// Audited Component Imports (QA Expansion)
import AdminLayout from "../Components/admin/AdminLayout";
import AdminSidebar from "../Components/admin/AdminSidebar";
import AdminTopbar from "../Components/admin/AdminTopbar";
import PendingPlaceListItem from "../Components/admin/PendingPlaceListItem";
import PlaceDetailPanel from "../Components/admin/PlaceDetailPanel";
import ReviewModerationCard from "../Components/admin/ReviewModerationCard";
import StatCard from "../Components/admin/StatCard";
import UsersTable from "../Components/admin/UsersTable";

import SmartMatchingBanner from "../Components/Person 2/SmartMatchingBanner";
import SimilarCurations from "../Components/Person 4/SimilarCurations";
import BadgesGrid from "../Components/Person 6/BadgesGrid";
import CollectionCard from "../Components/Person 6/CollectionCard";

import ReviewCard from "../Components/reviews/ReviewCard";

import AdminNavbar from "../Components/shared/AdminNavbar";
import AdminSidebarShared from "../Components/shared/AdminSidebar";
import Navbar from "../Components/shared/Navbar";
import SearchBarShared from "../Components/shared/SearchBar";
import SectionHeaderShared from "../Components/shared/SectionHeader";
import TagBadgeShared from "../Components/shared/TagBadge";

import Form from "../Components/Ui/Form/Form";

import {
  MOCK_PENDING_PLACES,
  MOCK_ADMIN_REVIEWS,
  MOCK_ADMIN_USERS,
  MOCK_COLLECTIONS,
  MOCK_ADMIN_STATS,
  MOCK_SPOTS

} from "../constants/mockData";


// StatusBadge Replica (Original StatusBadge has a broken dependency on non-existent Badge component)
function StatusBadgeReplica({ status = "active" }) {
  const statusConfig = {
    active: { variant: "success", dot: "bg-green-600" },
    banned: { variant: "danger", dot: "bg-red-600" },
    pending: { variant: "warning", dot: "bg-yellow-600" },
  };
  const config = statusConfig[status] || statusConfig.active;

  return (
    <TagBadge variant={config.variant} size="sm" className="flex items-center gap-1.5 w-fit">
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </TagBadge>
  );
}

export default function UITest() {
  // Inject Google Fonts and Material Symbols for visual fidelity
  useEffect(() => {
    const links = [
      {
        id: "google-fonts",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
      },
      {
        id: "material-symbols",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
      },
    ];

    links.forEach(({ id, href }) => {
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  // State to test interactive elements
  const [interactiveText, setInteractiveText] = useState("");
  const [passwordValue, setPasswordValue] = useState("secret123");
  const [focusedInput, setFocusedInput] = useState(false);
  const inputRef = useRef(null);

  // Person 2 Search State
  const [person2Search, setPerson2Search] = useState("");

  // Programmatic focus triggers
  const handleFocusClick = () => {
    inputRef.current?.focus();
    setFocusedInput(true);
  };

  const [selectedMoods, setSelectedMoods] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [sortValue, setSortValue] = useState("Rating");
  const [sidebarFilters, setSidebarFilters] = useState({
    moods: [],
    cuisine: "All Cuisines",
  });

 

  const [pwTest, setPwTest] = useState("");
  const [agreedTest, setAgreedTest] = useState(false);

  // QA Audit Component States
  const [activePlaceId, setActivePlaceId] = useState(MOCK_PENDING_PLACES[0]?.id || "");
  const rawSelectedPlace = MOCK_PENDING_PLACES.find((p) => p.id === activePlaceId);

  // Format selectedPlace to match what PlaceDetailPanel expects (avoids undefined checks/contributor crashes)
  const selectedPlaceForAudit = rawSelectedPlace ? {
    ...rawSelectedPlace,
    vibeTags: rawSelectedPlace.tags || [],
    contributor: {
      name: rawSelectedPlace.submittedBy || "@moderator",
      badge: "Top Contributor",
      spotsApproved: rawSelectedPlace.spotsApproved || 5
    },
    checks: {
      locationVerified: true,
      contactAccurate: true,
      photoRights: false,
      communityStandards: true
    }
  } : null;

  const [adminReviewsForAudit, setAdminReviewsForAudit] = useState(
    MOCK_ADMIN_REVIEWS.map(r => ({
      ...r,
      venue: r.venueName,
      user: r.submittedBy,
      reviewCount: r.userReviewsCount,
      flaggedBy: "System Flags",
      timeAgo: r.date,
      flagType: r.flagType === "OFFENSIVE CONTENT" ? "offensive" : r.flagType === "POSSIBLE FAKE" ? "fake" : "standard"
    }))
  );

  const usersForAudit = MOCK_ADMIN_USERS.map(u => ({
    ...u,
    status: (u.status || "active").toLowerCase()
  }));

  const handleDismissReview = (id) => {
    setAdminReviewsForAudit(prev => prev.filter(r => r.id !== id));
  };
  const handleDeleteReview = (id) => {
    setAdminReviewsForAudit(prev => prev.filter(r => r.id !== id));
  };
  const handleFlagReview = (id) => {
    alert(`Review ${id} flagged manually!`);
  };
  const handleArchiveReview = (id) => {
    alert(`Review ${id} archived!`);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md pt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 mb-12">
        {/* PAGE HEADER */}
        <header className="border-b border-outline-variant/30 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              Frontend Development Kit
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight mt-2 text-on-surface font-display-lg">
              Design System Showcase & UI Test Page
            </h1>
            <p className="text-on-surface-variant/80 mt-2 text-body-lg max-w-3xl">
              An interactive visual catalog to review and verify variants,
              sizes, states, and edge-cases of all components. Built using
              Tailwind v4 styling.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-xs font-semibold px-3 py-2 bg-surface-container-high rounded-lg text-on-surface-variant border border-outline-variant/20">
              Vite Dev Server Running
            </span>
            <span className="text-xs font-semibold px-3 py-2 bg-primary text-on-primary rounded-lg shadow-sm">
              React 19
            </span>
          </div>
        </header>

        {/* Start Abdallah Hany UI Test Components */}

        {/* ---------------------------------------------------- */}
        {/* SECTION 1: SECTION HEADER */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SectionHeader Component Tests"
            subtitle="Testing title formats, layout alignments, sizes, and long-text behaviors."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Title Only */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Title Only
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader title="This is a Title Only Header" />
              </div>
            </div>

            {/* Test 2: Title + Subtitle */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Title + Subtitle
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader
                  title="Discover Quiet Spaces"
                  subtitle="Explore libraries, work-friendly cafes, and hidden gardens in your city."
                />
              </div>
            </div>

            {/* Test 3: Long Title Truncation/Wrap */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Edge Case — Extreme Long Title
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader
                  title="A Highly Detailed Section Header for Categorizing Places that have an Exceptionally High Concentration of Quiet Studying Cafes and Outdoors Working Stations"
                  subtitle="Standard sub-title explanation goes here."
                />
              </div>
            </div>

            {/* Test 4: Long Subtitle Text */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Edge Case — Extreme Long Subtitle
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SectionHeader
                  title="Standard Header Title"
                  subtitle="This subtitle contains a very long paragraph to verify the max-width wrapping behaviors. It is designed to check how multiple sentences read when rendered inside the header layout, ensuring it does not stretch the line length to an unreadable width on ultra-wide screens. By default, it uses a max-w-3xl constraint to keep text legible."
                />
              </div>
            </div>

            {/* Test 5: Alignments */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 5: Alignments (Left / Center / Right)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-xs text-on-surface-variant/55 block mb-4">
                    [align="left"] (default)
                  </span>
                  <SectionHeader
                    title="Left Align"
                    subtitle="Aligned to the left start point"
                    align="left"
                  />
                </div>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-xs text-on-surface-variant/55 block mb-4">
                    [align="center"]
                  </span>
                  <SectionHeader
                    title="Center Align"
                    subtitle="Aligned to the absolute center"
                    align="center"
                  />
                </div>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <span className="text-xs text-on-surface-variant/55 block mb-4">
                    [align="right"]
                  </span>
                  <SectionHeader
                    title="Right Align"
                    subtitle="Aligned to the right end point"
                    align="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: PRIMARY BUTTON */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="PrimaryButton Component Tests"
            subtitle="Testing button types, sizes, icon alignments, states, and style overrides."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Variants */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Styles & Variants
              </span>
              <div className="flex flex-wrap gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="primary">Primary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="primary"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="secondary">Secondary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="secondary"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="outline">Outline</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="outline"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="ghost">Ghost</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="ghost"
                  </span>
                </div>
              </div>
            </div>

            {/* Test 2: Sizes */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Size Scales
              </span>
              <div className="flex flex-wrap items-end gap-6 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="sm">Small Size</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    size="sm"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="md">Medium Size</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    size="md" (default)
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="lg">Large Size</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    size="lg"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton size="xl">Extra Large</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    size="xl"
                  </span>
                </div>
              </div>
            </div>

            {/* Test 3: With Icons */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Button Icon Alignments
              </span>
              <div className="flex flex-wrap gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton icon="home" iconPosition="left">
                    Left Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    iconPosition="left"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton icon="arrow_forward" iconPosition="right">
                    Right Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    iconPosition="right" (default)
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton
                    variant="secondary"
                    icon="search"
                    iconPosition="left"
                  >
                    Secondary Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    Secondary + Left Icon
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="outline" icon="share">
                    Outline Icon
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    Outline + Right Icon
                  </span>
                </div>
              </div>
            </div>

            {/* Test 4: Disabled state */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Disabled State
              </span>
              <div className="flex flex-wrap gap-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton disabled>Disabled Primary</PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    disabled [primary]
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="secondary" disabled>
                    Disabled Secondary
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    disabled [secondary]
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="outline" disabled>
                    Disabled Outline
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    disabled [outline]
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PrimaryButton variant="ghost" disabled>
                    Disabled Ghost
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant">
                    disabled [ghost]
                  </span>
                </div>
              </div>
            </div>

            {/* Test 5: Custom className */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 5: Custom Class Override (Full width, custom
                gradients)
              </span>
              <div className="space-y-4 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div>
                  <PrimaryButton className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 py-4">
                    Full Width Custom Gradient Button
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant block mt-1">
                    className="w-full bg-linear-to-r from-purple-600
                    to-indigo-600 text-white font-bold rounded-xl py-4"
                  </span>
                </div>
                <div>
                  <PrimaryButton
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-50 hover:border-red-600"
                  >
                    Danger Outline Button
                  </PrimaryButton>
                  <span className="text-[11px] text-on-surface-variant block mt-1">
                    className="border-red-500 text-red-500 hover:bg-red-50"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 3: INPUT FIELD */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="InputField Component Tests"
            subtitle="Testing inputs, labels, validation states, inputs with icons, and edge cases."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Grid layout for basic combinations */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic input */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 1: Basic Input (No Label)
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField placeholder="Placeholder only..." />
                </div>
              </div>

              {/* Input with label */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 2: With Label & Placeholder
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField label="User ID" placeholder="e.g. abdalla123" />
                </div>
              </div>

              {/* Input with icon */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 3: Input With Icon
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField
                    label="Location search"
                    placeholder="Search for library, cafe..."
                    icon="location_on"
                  />
                </div>
              </div>

              {/* Input with error message */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 4: Validation / Error State
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField
                    label="Username Registry"
                    placeholder="Enter unique name"
                    error="This username is already taken. Try another."
                    defaultValue="taken_name"
                  />
                </div>
              </div>

              {/* Disabled state */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 5: Disabled State
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField
                    label="System Identifier"
                    defaultValue="SYS-987-PRO"
                    disabled={true}
                    icon="lock"
                  />
                </div>
              </div>

              {/* Email Type */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 6: Email Type Validation
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="contact@spotly.com"
                    icon="mail"
                  />
                </div>
              </div>

              {/* Password Type */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 7: Password Type (Masked Value)
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField
                    label="Account Password"
                    type="password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    icon="key"
                  />
                </div>
              </div>

              {/* Long text value */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                  Test 8: Long Text Value (Truncation check)
                </span>
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                  <InputField
                    label="Extremely Long Text Input"
                    defaultValue="This is an incredibly long text string to check how the input handles overflowing content horizontally when the user continues typing beyond the layout constraints."
                  />
                </div>
              </div>
            </div>

            {/* Interactive Focus State Example */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 9: Programmatic & Focus State Example
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant/80">
                  Click the button below to programmatically focus the input
                  field, triggering its active styling (colored outline border
                  and shadow).
                </p>
                <div className="flex flex-col sm:flex-row items-end gap-4">
                  <InputField
                    ref={inputRef}
                    label="Interactive Focus Field"
                    placeholder="Click the focus trigger button..."
                    onFocus={() => setFocusedInput(true)}
                    onBlur={() => setFocusedInput(false)}
                    className="max-w-md"
                  />
                  <PrimaryButton
                    onClick={handleFocusClick}
                    className="w-full sm:w-auto h-[48px]"
                  >
                    Trigger Focus
                  </PrimaryButton>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-on-surface-variant">
                    Focus status:
                  </span>
                  <span
                    className={clsx(
                      "text-xs font-semibold px-2 py-0.5 rounded-md transition-colors",
                      focusedInput
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700",
                    )}
                  >
                    {focusedInput ? "FOCUSED (Active Outline)" : "BLURRED"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 4: SEARCH BAR */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SearchBar Component Tests"
            subtitle="Testing states and layouts. NOTE: Query state is fully internal to the component, so values must be entered manually."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Empty state (Default) & Large Variant */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Standard & Large Variants (Empty State)
              </span>
              <div className="grid grid-cols-1 gap-6 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="space-y-2">
                  <span className="text-xs text-on-surface-variant block">
                    Standard size (large={"{false}"})
                  </span>
                  <SearchBar
                    placeholder="Search for studying spots..."
                    large={false}
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-on-surface-variant block">
                    Large size (large={"{true}"})
                  </span>
                  <SearchBar
                    placeholder="Find a spot with fast Wi-Fi and power outlets..."
                    large={true}
                  />
                </div>
              </div>
            </div>

            {/* Test 2: Responsiveness (Mobile vs Desktop) */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Width Constraints & Responsiveness
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant/70 block">
                    Mobile Width Container (max-w-[360px])
                  </span>
                  <p className="text-[11px] text-on-surface-variant/60">
                    Testing how elements fit inside narrow screens (e.g. mobile
                    viewport).
                  </p>
                  <div className="max-w-[360px] border border-outline/10 p-2 rounded-2xl bg-background/50">
                    <SearchBar placeholder="Search spots..." large={false} />
                  </div>
                </div>

                <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant/70 block">
                    Desktop Width Container (Full Width / Max 800px)
                  </span>
                  <p className="text-[11px] text-on-surface-variant/60">
                    Testing how elements expand to fit desktop screens.
                  </p>
                  <div className="max-w-[800px] border border-outline/10 p-2 rounded-3xl bg-background/50">
                    <SearchBar
                      placeholder="Search local work and study spots..."
                      large={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Test 3: Simulation & Limitations Explanation */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Interactive Demo & State Simulation
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant/80">
                  Type a query below to test search mechanics. Since the
                  SearchBar component uses internal states and React Router's{" "}
                  <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">
                    useNavigate
                  </code>
                  , submitting this form will navigate to{" "}
                  <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">
                    /discover?q=[query]
                  </code>
                  .
                </p>
                <div className="max-w-2xl bg-background p-4 rounded-2xl border border-outline-variant/30">
                  <SearchBar placeholder="Type text here and hit Search..." />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl text-xs space-y-1">
                  <span className="font-bold block">
                    ⚠️ API Limitation Notice:
                  </span>
                  <p>
                    The current SearchBar component does not accept a{" "}
                    <code className="font-semibold">value</code> or{" "}
                    <code className="font-semibold">defaultValue</code> prop.
                    Its input state is entirely self-contained, meaning it
                    cannot be pre-filled programmatically or controlled from the
                    outside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 5: TAG BADGE */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="TagBadge Component Tests"
            subtitle="Testing colors, text lengths, sizes, and state representations (active vs inactive)."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Color Variants */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Color Variants
              </span>
              <div className="flex flex-wrap gap-4 items-center bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="default">Default</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="default"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="secondary">Secondary</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="secondary"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="success">Success</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="success"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="warning">Warning</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="warning"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge variant="danger">Danger</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    variant="danger"
                  </span>
                </div>
              </div>
            </div>

            {/* Test 2: Sizes */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Size Scales
              </span>
              <div className="flex flex-wrap gap-6 items-end bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-center gap-2">
                  <TagBadge size="sm" variant="default">
                    Small Size
                  </TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    size="sm"
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge size="md" variant="default">
                    Medium Size
                  </TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    size="md" (default)
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TagBadge size="lg" variant="default">
                    Large Size
                  </TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    size="lg"
                  </span>
                </div>
              </div>
            </div>

            {/* Test 3: Text Lengths */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Text Lengths (Short vs Extreme Long)
              </span>
              <div className="flex flex-wrap gap-4 items-center bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex flex-col items-start gap-2">
                  <TagBadge>A</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    Single Char
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <TagBadge>Wi-Fi</TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    Short Text
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <TagBadge>
                    Outdoor Seating with Shaded Pergola and Garden Views
                  </TagBadge>
                  <span className="text-[11px] text-on-surface-variant">
                    Long Text (Wrapping test)
                  </span>
                </div>
              </div>
            </div>

            {/* Test 4: Active vs Inactive State Representations */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Active vs Inactive States
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant/80">
                  Since TagBadge does not have an explicit{" "}
                  <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">
                    active
                  </code>{" "}
                  boolean prop, we can test state representations using built-in
                  variants or styling classes:
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* Variant-based Representation */}
                  <div className="flex flex-col items-center gap-2 border border-outline-variant/20 p-4 rounded-xl bg-background">
                    <div className="flex gap-2">
                      <TagBadge variant="default">Active</TagBadge>
                      <TagBadge variant="secondary">Inactive</TagBadge>
                    </div>
                    <span className="text-[11px] font-semibold text-on-surface-variant block mt-1">
                      Using Variants (default / secondary)
                    </span>
                  </div>

                  {/* ClassName-based Representation */}
                  <div className="flex flex-col items-center gap-2 border border-outline-variant/20 p-4 rounded-xl bg-background">
                    <div className="flex gap-2">
                      <TagBadge className="bg-primary text-on-primary ring-2 ring-primary/20">
                        Active Filter
                      </TagBadge>
                      <TagBadge className="bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                        Inactive Filter
                      </TagBadge>
                    </div>
                    <span className="text-[11px] font-semibold text-on-surface-variant block mt-1">
                      Using Custom className overrides
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End Abdallah Hany UI Test Components */}

        {/* Start Joudy Wessam UI Test Components */}
        {/* ---------------------------------------------------- */}
        {/* SECTION 6: SPOT CARD */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SpotCard Component Tests"
            subtitle="Testing variants, saved state, tag overflow, and missing data edge cases."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Default Variant */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Default Variant (Standard Grid Cards)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <SpotCard
                    spot={{
                      id: "1",
                      image:
                        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
                      name: "The Glass Pavilion",
                      location: "Williamsburg, Brooklyn",
                      rating: 4.9,
                      price: "$$$",
                      category: "Modern American",
                      tags: ["#Quiet", "#OutdoorSeating"],
                    }}
                  />
                  <SpotCard
                    spot={{
                      id: "2",
                      image:
                        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600",
                      name: "Velvet Room",
                      location: "Soho, Manhattan",
                      rating: 4.7,
                      price: "$$",
                      category: "Cocktail Bar",
                      tags: ["#LateNight"],
                    }}
                  />
                  <SpotCard
                    spot={{
                      id: "3",
                      image:
                        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600",
                      name: "Metric Brew",
                      location: "West Loop, Chicago",
                      rating: 4.6,
                      price: "$$",
                      category: "Artisan Coffee",
                      tags: ["#Insta-worthy"],
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Test 2: Featured Variant */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Featured Variant (Large Hero Card)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-2 gap-4">
                  <SpotCard
                    variant="featured"
                    spot={{
                      id: "1",
                      image:
                        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
                      name: "The Glass Pavilion",
                      location: "Williamsburg, Brooklyn",
                      rating: 4.9,
                      price: "$$$",
                      category: "Modern American",
                      tags: ["#Quiet", "#OutdoorSeating"],
                    }}
                  />
                  <div className="flex flex-col gap-4">
                    <SpotCard
                      spot={{
                        id: "2",
                        image:
                          "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600",
                        name: "Velvet Room",
                        location: "Soho, Manhattan",
                        rating: 4.7,
                        price: "$$",
                        category: "Cocktail Bar",
                        tags: ["#LateNight"],
                      }}
                    />
                    <SpotCard
                      spot={{
                        id: "3",
                        image:
                          "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600",
                        name: "Metric Brew",
                        location: "West Loop, Chicago",
                        rating: 4.6,
                        price: "$$",
                        category: "Artisan Coffee",
                        tags: ["#WorkFriendly"],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Test 3: Bookmark Toggle */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Bookmark Toggle (Click the bookmark icon)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="max-w-xs">
                  <SpotCard
                    spot={{
                      id: "4",
                      image:
                        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
                      name: "Flora Terrace",
                      location: "Chelsea, NYC",
                      rating: 4.8,
                      price: "$",
                      category: "Mediterranean",
                      tags: ["#Insta-worthy"],
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Test 4: Tag Overflow */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: Edge Case — Many Tags (Overflow Behavior)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="max-w-xs">
                  <SpotCard
                    spot={{
                      id: "5",
                      image:
                        "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600",
                      name: "Chapter One",
                      location: "Back Bay, Boston",
                      rating: 4.9,
                      price: "$$$",
                      category: "Tea & Spirits",
                      tags: [
                        "#Quiet",
                        "#LateNight",
                        "#Cozy",
                        "#WorkFriendly",
                        "#Insta-worthy",
                      ],
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Test 5: Missing Data */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 5: Edge Case — Missing / Empty Data
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <p className="text-xs text-on-surface-variant/80 mb-4">
                  No image, no tags, no price or rating. This tests how the card
                  handles incomplete data gracefully without breaking the layout
                  or functionality.
                </p>
                <div className="max-w-xs">
                  <SpotCard
                    spot={{
                      id: "6",
                      image: "",
                      name: "Unknown Venue",
                      location: "",
                      rating: null,
                      price: "",
                      category: "",
                      tags: [],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 7: FILTERS SUBCOMPONENTS */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Filters Subcomponents Tests"
            subtitle="Testing MoodFilter, CuisineFilter individually then combined in FiltersSidebar."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* MoodFilter */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: MoodFilter (Multi-select toggle)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-sm">
                <MoodFilter
                  selected={selectedMoods}
                  onChange={setSelectedMoods}
                />
                <p className="text-xs text-on-surface-variant mt-3">
                  Selected:{" "}
                  <span className="text-primary font-medium">
                    {selectedMoods.join(", ") || "none"}
                  </span>
                </p>
              </div>
            </div>

            {/* CuisineFilter */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: CuisineFilter (Dropdown select)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-sm">
                <CuisineFilter
                  value={selectedCuisine}
                  onChange={setSelectedCuisine}
                />
                <p className="text-xs text-on-surface-variant mt-3">
                  Selected:{" "}
                  <span className="text-primary font-medium">
                    {selectedCuisine}
                  </span>
                </p>
              </div>
            </div>

            {/* FiltersSidebar */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: FiltersSidebar (All filters combined)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <FiltersSidebar
                  filters={sidebarFilters}
                  onChange={setSidebarFilters}
                  onApply={() =>
                    alert(
                      `Applied!\nMoods: ${sidebarFilters.moods.join(", ") || "none"}\nCuisine: ${sidebarFilters.cuisine}`,
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 8: SORT DROPDOWN */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SortDropdown Component Tests"
            subtitle="Testing sort options and active selection state."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Default */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Default Sort Dropdown
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 flex items-center gap-4">
                <SortDropdown value={sortValue} onChange={setSortValue} />
                <p className="text-xs text-on-surface-variant">
                  Current:{" "}
                  <span className="text-primary font-medium">{sortValue}</span>
                </p>
              </div>
            </div>

            {/* Test 2: Inside header row like DiscoverPage */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: In Context (Like DiscoverPage Header Row)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-on-surface">
                    Found 12 "Quiet" spots
                  </h2>
                  <SortDropdown value={sortValue} onChange={setSortValue} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 9: SPOT LIST */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SpotList Component Tests"
            subtitle="Testing full grid layout with featured first card, and empty state."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Test 1: Full List */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Full SpotList (5 spots — first card featured)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SpotList spots={MOCK_SPOTS} />
              </div>
            </div>

            {/* Test 2: Single Spot */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Single Spot (Edge Case)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SpotList spots={[MOCK_SPOTS[0]]} />
              </div>
            </div>

            {/* Test 3: Empty State */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Empty State (No Results)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <SpotList spots={[]} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 10: AUTH SUBCOMPONENTS */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Auth Subcomponents Tests"
            subtitle="Testing PasswordField, AgreementCheckbox, and AuthFooterLink individually."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* PasswordField */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: PasswordField (Visibility Toggle)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-sm">
                <PasswordField
                  label="Password"
                  value={pwTest}
                  onChange={(e) => setPwTest(e.target.value)}
                />
              </div>
            </div>

            {/* PasswordField with error */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: PasswordField — Error State
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-sm">
                <PasswordField
                  label="Password"
                  value="123"
                  onChange={() => {}}
                  error="Password must be at least 8 characters."
                />
              </div>
            </div>

            {/* AgreementCheckbox */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: AgreementCheckbox
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-sm space-y-2">
                <AgreementCheckbox
                  checked={agreedTest}
                  onChange={setAgreedTest}
                />
                <p className="text-xs text-on-surface-variant">
                  Checked:{" "}
                  <span className="text-primary font-medium">
                    {agreedTest ? "yes" : "no"}
                  </span>
                </p>
              </div>
            </div>

            {/* AuthFooterLink */}
            <div className="pt-6 space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: AuthFooterLink (Requires Router context)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-sm">
                <AuthFooterLink
                  text="Don't have an account?"
                  linkText="Sign Up"
                  to="/signup"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION 11: FULL PAGE PREVIEWS */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Full Page Previews"
            subtitle="Live preview of SignInPage and SignUpPage rendered inside a contained browser frame."
          />

          <div className="space-y-10">
            {/* SignInPage Preview */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Preview: SignInPage
              </span>
              <div className="rounded-2xl border border-outline-variant/30 overflow-hidden shadow-md">
                {/* Fake browser bar */}
                <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-outline-variant/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-on-surface-variant">
                    spotly.app/signin
                  </span>
                </div>
                {/* Contained scrollable preview */}
                <div className="relative h-[750px] overflow-y-auto">
                  <SignInPage />
                </div>
              </div>
            </div>

            {/* SignUpPage Preview */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Preview: SignUpPage
              </span>
              <div className="rounded-2xl border border-outline-variant/30 overflow-hidden shadow-md">
                <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-outline-variant/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-on-surface-variant">
                    spotly.app/signup
                  </span>
                </div>
                <div className="relative h-[800px] overflow-y-auto">
                  <SignUpPage />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------------------------------------------- */}
        {/* SECTION 12: PAGE NAVIGATION */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Page Navigation"
            subtitle="Quick links to jump to each real page on its own route."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              to="/signin"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <LogIn size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">Sign In</p>
                <p className="text-xs text-on-surface-variant">/signin</p>
              </div>
            </Link>

            <Link
              to="/signup"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <UserPlus size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">Sign Up</p>
                <p className="text-xs text-on-surface-variant">/signup</p>
              </div>
            </Link>

            <Link
              to="/admin"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <LayoutDashboard size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  Admin Overview
                </p>
                <p className="text-xs text-on-surface-variant">/admin</p>
              </div>
            </Link>

            <Link
              to="/admin/moderation"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  Review Moderation
                </p>
                <p className="text-xs text-on-surface-variant">
                  /admin/moderation
                </p>
              </div>
            </Link>

            <Link
              to="/admin/places"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  Content Moderation
                </p>
                <p className="text-xs text-on-surface-variant">/admin/places</p>
              </div>
            </Link>

            <Link
              to="/admin/users"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <Users size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  User Management
                </p>
                <p className="text-xs text-on-surface-variant">/admin/users</p>
              </div>
            </Link>
            <Link
              to="/discovery"
              className="flex items-center gap-3 p-4 rounded-xl border border-outline-variant/20 bg-surface-container hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="p-2 rounded-lg bg-primary/10 text-primary">
                <Users size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  discover
                </p>
                <p className="text-xs text-on-surface-variant">/discover</p>
              </div>
            </Link>
          </div>
        </section>
        {/* End Joudy Wessam UI Test Components */}

        {/* Start Nour  UI Test Components */}
        {/*nearyby suggestions component test*/}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="NearbySuggestions Component Test"
            subtitle="Testing the Nearby Suggestions component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <NearbySuggestions />
          </div>
        </section>
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Recent Searches Component Test"
            subtitle="Testing the Recent Searches component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <RecentSearches />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Manual Add Prompt Component Test"
            subtitle="Testing the Manual Add Prompt component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <ManualAddPrompt />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="ShareSpotSection Component Test"
            subtitle="Testing the main hero section."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <ShareSpotSection />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="NextActions Component Test"
            subtitle="Testing the Next Actions component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <NextActions />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SuccessBanner Component Test"
            subtitle="Testing the success banner component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <SuccessBanner />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="FormStepper Component Test"
            subtitle="Testing the multi-step navigation component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <FormStepper />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="VibeSelector Component Test"
            subtitle="Testing vibe selection interactions."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <VibeSelector />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SpotPreviewCard Component Test"
            subtitle="Testing the preview card shown after a successful submission."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 flex justify-center">
            <SpotPreviewCard />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="PhotoUploader Component Test"
            subtitle="Testing the photo upload component."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <PhotoUploader />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="OperatingHoursForm Component Test"
            subtitle="Testing business hours inputs."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <OperatingHoursForm />
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="SpotForm Component Test"
            subtitle="Testing the full spot creation form."
          />

          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
            <SpotForm />
          </div>
        </section>

        {/* End Nour  UI Test Components */}

        {/* ---------------------------------------------------- */}
        {/* SECTION: PERSON 2 COMPONENTS */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Person 2 Components Test"
            subtitle="Testing HeroSection, FeaturedSpot, SmartMatchingBanner, and TrendingVibes."
          />
          {/* HeroSection Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider p-4 border-b border-outline-variant/10">
              HeroSection
            </span>
            <HeroSection
              searchValue={person2Search}
              onSearchValueChange={setPerson2Search}
              onSearchSubmit={(val) => alert(`Searching for: ${val}`)}
            />
          </div>

          {/* FeaturedSpot Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider p-4 border-b border-outline-variant/10">
              FeaturedSpot & SmartMatchingBanner
            </span>
            <FeaturedSpot />
          </div>

          {/* TrendingVibes Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider p-4 border-b border-outline-variant/10">
              TrendingVibes
            </span>
            <div className="py-20">
              <TrendingVibes
                onVibeSelect={(vibe) => alert(`Selected Vibe: ${vibe}`)}
              />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION: PERSON 4 COMPONENTS */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Person 4 Components Test (Spot Details)"
            subtitle="Testing SpotGallery, SpotInfo, SpotMetaData, ReservationSection, and CommunityReviews."
          />

          {/* SpotGallery Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden p-6 bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider mb-4">
              SpotGallery
            </span>
            <SpotGallery
              images={[
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
                "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600",
                "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600",
              ]}
              tags={["Quiet", "WiFi", "Cozy"]}
            />
          </div>

          {/* SpotInfo and MetaData combined layout (like a Spot Details page) */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden p-6 bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider mb-6">
              SpotInfo & SpotMetaData & ReservationSection
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SpotInfo
                  title="The Glass Pavilion"
                  rating={4.9}
                  reviewCount={124}
                  category="Modern American Cafe"
                  description="Voted best brunch view in the city three years running. Perfect for golden hour celebrations, remote work sessions, and intimate chats."
                  vibeMetrics={[
                    { value: "95%", label: "Quiet Zone" },
                    { value: "Fast", label: "WiFi Speed" },
                    { value: "Ample", label: "Power Outlets" },
                    { value: "4.8/5", label: "Coffee Quality" },
                  ]}
                  vibeTags={["Focus Mode", "Outdoor", "Aesthetic"]}
                  onShare={() => alert("Shared!")}
                  onSave={() => alert("Saved!")}
                />
              </div>
              <div>
                <SpotMetaData
                  address={"123 Williamsburg Blvd\nBrooklyn, NY 11211"}
                  hours={[
                    "Monday - Friday: 7am - 8pm (Today)",
                    "Saturday: 8am - 10pm",
                    "Sunday: 8am - 6pm",
                  ]}
                  contact="+1 (718) 555-0199"
                >
                  <ReservationSection onBook={() => alert("Table Booked!")} />
                </SpotMetaData>
              </div>
            </div>
          </div>

          {/* CommunityReviews Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden p-6 bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider mb-4">
              CommunityReviews
            </span>
            <CommunityReviews
              reviews={[
                {
                  id: "1",
                  name: "Sarah Jenkins",
                  avatar:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                  rating: 5,
                  date: "2 days ago",
                  text: "Absolutely stunning view! The glass pavilion feels like an oasis in the middle of Brooklyn. Internet is super fast.",
                  tags: ["#FocusMode", "#WiFi"],
                },
                {
                  id: "2",
                  name: "Marcus Aurelius",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                  rating: 4,
                  date: "1 week ago",
                  text: "Great coffee and pastries. Can get a little crowded around noon, but earlier in the morning it's perfect for studying.",
                  tags: ["#Quiet", "#Coffee"],
                },
              ]}
            />
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* SECTION: PERSON 6 COMPONENTS */}
        {/* ---------------------------------------------------- */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-6">
          <SectionHeader
            title="Person 6 Components Test (User Profile)"
            subtitle="Testing ProfileHeader, UserStats, CollectionsGrid, and UserReviews."
          />

          {/* ProfileHeader Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden bg-background p-4">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider mb-4">
              ProfileHeader
            </span>
            <ProfileHeader
              name="Judy Wessam"
              location="Cairo, Egypt"
              bio="Design enthusiast, coffee lover, and weekend explorer. Always on the lookout for study-friendly cafes and beautiful library spaces."
              avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
              coverImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000"
              onEdit={() => alert("Edit Profile Clicked")}
              onShare={() => alert("Share Profile Clicked")}
            />
          </div>

          {/* UserStats & CollectionsGrid Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden p-6 bg-background space-y-6">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
              UserStats & CollectionsGrid
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <UserStats
                  stats={{
                    spotsShared: 24,
                    reviewsWritten: 45,
                    followers: "1.2k",
                  }}
                />
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">
                  Curated Collections
                </h3>
                <CollectionsGrid
                  collections={[
                    {
                      id: "c1",
                      title: "Cairo Quiet Workspaces",
                      description:
                        "My favorite spots to focus and get code written. Excellent WiFi and quiet vibes.",
                      mainImage:
                        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
                      sideImage:
                        "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=300",
                      extraCount: 4,
                      tag: "Work-Friendly",
                      updatedText: "Updated 2 days ago",
                    },
                    {
                      id: "c2",
                      title: "Late Night Study Cafes",
                      description:
                        "Cafes open past midnight with cozy lighting and good study tables.",
                      mainImage:
                        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
                      sideImage:
                        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=300",
                      extraCount: 2,
                      tag: "Late Night",
                      updatedText: "Updated 1 week ago",
                    },
                  ]}
                  onCollectionClick={(coll) =>
                    alert(`Collection Clicked: ${coll.title}`)
                  }
                />
              </div>
            </div>
          </div>

          {/* UserReviews Test */}
          <div className="border border-outline-variant/10 rounded-2xl overflow-hidden p-6 bg-background">
            <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider mb-4">
              UserReviews
            </span>
            <UserReviews
              reviews={[
                {
                  id: "r1",
                  spotTitle: "The Glass Pavilion",
                  spotImage:
                    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200",
                  rating: 5,
                  date: "June 20, 2026",
                  text: "The morning light here is incredible. Truly the best spot in Williamsburg for reading or answering emails early in the day.",
                  tags: ["Outdoor Seating", "Great View"],
                },
                {
                  id: "r2",
                  spotTitle: "Metric Brew",
                  spotImage:
                    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=200",
                  rating: 4.5,
                  date: "May 14, 2026",
                  text: "Industrial vibe with great single-origin pour-overs. Coffee is exceptional, but tables can be hard to get.",
                  tags: ["Artisan Coffee", "Laptop Friendly"],
                },
              ]}
              onLoadMore={() => alert("Load More Clicked")}
            />
          </div>
        </section>

        {/* ==================================================== */}
        {/* QA COMPONENT TESTING AUDIT: EXTRA AUDITED SECTIONS */}
        {/* ==================================================== */}

        {/* SECTION 13: ADMIN COMPONENTS */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-8">
          <SectionHeader
            title="QA Component Testing Audit - Admin Panel Components"
            subtitle="Testing AdminLayout, AdminSidebar, AdminTopbar, PendingPlaceListItem, PlaceDetailPanel, ReviewModerationCard, StatCard, UsersTable, and replica StatusBadge."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* StatCard & StatusBadge */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: StatCard (Grid Layout & Trends) & StatusBadge Replica
              </span>
              <div className="space-y-6 bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard icon={LayoutGrid} label="Pending Review" value={MOCK_ADMIN_STATS.pendingPlaces} trend={12.5} />
                  <StatCard icon={AlertCircle} label="Offensive Content Reports" value={MOCK_ADMIN_STATS.offensiveReviews} trend={-4.2} />
                  <StatCard icon={Users} label="Total Registrations" value={MOCK_ADMIN_STATS.newUsers} trend={8.1} />
                  <StatCard icon={BarChart3} label="Service Health Score" value={`${MOCK_ADMIN_STATS.healthScore}%`} trend={0.5} highlight={true} />
                </div>
                
                <div className="border-t border-outline-variant/20 pt-4 space-y-2">
                  <span className="text-xs text-on-surface-variant block">
                    StatusBadge Replica (Demonstrating Active, Banned, and Pending states):
                  </span>
                  <div className="flex gap-4 items-center">
                    <StatusBadgeReplica status="active" />
                    <StatusBadgeReplica status="banned" />
                    <StatusBadgeReplica status="pending" />
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl text-xs mt-2">
                    <span className="font-bold block">⚠️ QA Code Quality Notice:</span>
                    <p>
                      The original <code>StatusBadge</code> component contains a broken import <code>import Badge from "../Ui/Badge/Badge";</code> referencing a file that does not exist in the codebase.
                      We render a StatusBadge replica here to avoid breaking compile/build outputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AdminTopbar */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: AdminTopbar
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <AdminTopbar
                  title="Auditing Analytics"
                  subtitle="Platform moderation queue & diagnostic indicators"
                  placeholder="Filter activity stream..."
                  onSearch={(q) => console.log("Searching topbar query:", q)}
                />
              </div>
            </div>

            {/* PendingPlaceListItem & PlaceDetailPanel */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: PendingPlaceListItem (List Selection) & PlaceDetailPanel (Action Interface)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-6">
                <p className="text-xs text-on-surface-variant">
                  Select a pending place from the list to view its complete moderation details in the details panel:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* List items column */}
                  <div className="space-y-3">
                    <span className="text-xs text-on-surface-variant/60 uppercase font-bold tracking-wider block">Pending Queue</span>
                    {MOCK_PENDING_PLACES.map((place) => (
                      <PendingPlaceListItem
                        key={place.id}
                        place={{
                          ...place,
                          isNew: place.id === "p_1"
                        }}
                        active={activePlaceId === place.id}
                        onClick={() => setActivePlaceId(place.id)}
                      />
                    ))}
                  </div>

                  {/* Details column */}
                  <div className="lg:col-span-2 border border-outline-variant/20 rounded-2xl p-6 bg-background">
                    <span className="text-xs text-on-surface-variant/60 uppercase font-bold tracking-wider block mb-4">Moderation Panel</span>
                    <PlaceDetailPanel
                      place={selectedPlaceForAudit}
                      onApprove={(id) => alert(`Approved Place: ${id}`)}
                      onEdit={(id) => alert(`Edit requested for: ${id}`)}
                      onReject={(id) => alert(`Rejected Place: ${id}`)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ReviewModerationCard */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: ReviewModerationCard (Action States & Interactive Deletes)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant">
                  The following list shows offensive, possible fake, and standard reviews in the platform monitoring queue. Clicking "Dismiss" or "Delete" will remove the review from this test view:
                </p>
                <div className="space-y-4">
                  {adminReviewsForAudit.length === 0 ? (
                    <div className="p-8 text-center text-xs text-on-surface-variant/60 bg-surface-container-high rounded-xl">
                      No reviews left in the queue. Refresh the page to reload them.
                    </div>
                  ) : (
                    adminReviewsForAudit.map((review) => (
                      <ReviewModerationCard
                        key={review.id}
                        review={review}
                        onDismiss={handleDismissReview}
                        onDelete={handleDeleteReview}
                        onFlag={handleFlagReview}
                        onArchive={handleArchiveReview}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* UsersTable */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 5: UsersTable (Data Presentation & Multi-Row)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <UsersTable users={usersForAudit} />
              </div>
            </div>

            {/* AdminLayout & AdminSidebar */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 6: AdminLayout & AdminSidebar Frame Preview
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-4">
                <p className="text-xs text-on-surface-variant">
                  A preview of the layout container structure with side navigation and system telemetry.
                </p>
                <div className="h-[450px] border border-outline-variant/30 rounded-2xl overflow-hidden shadow-md">
                  <AdminLayout>
                    <div className="p-8 space-y-6">
                      <h2 className="text-2xl font-bold text-on-surface">Dashboard Sub-View</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
                          <h4 className="font-bold text-sm text-primary">Content Queue</h4>
                          <p className="text-xs text-on-surface-variant/80 mt-1">12 items pending verification audits.</p>
                        </div>
                        <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
                          <h4 className="font-bold text-sm text-primary">User Reports</h4>
                          <p className="text-xs text-on-surface-variant/80 mt-1">3 active user reports flagged.</p>
                        </div>
                      </div>
                    </div>
                  </AdminLayout>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 14: SHARED LAYOUT COMPONENTS */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-8">
          <SectionHeader
            title="QA Component Testing Audit - Shared Layout Components"
            subtitle="Testing shared Navigation components: Navbar, AdminNavbar, and Shared AdminSidebar."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* Navbar */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Shared Navbar (Main Layout)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="border border-outline-variant/20 rounded-2xl overflow-hidden shadow-sm bg-background">
                  <Navbar />
                </div>
              </div>
            </div>

            {/* AdminNavbar */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: Shared AdminNavbar
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="border border-outline-variant/20 rounded-2xl overflow-hidden shadow-sm bg-background">
                  <AdminNavbar title="Moderator Control Center" />
                </div>
              </div>
            </div>

            {/* AdminSidebarShared */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: Shared AdminSidebar (Shared Alternative Design)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 flex justify-center">
                <div className="h-[450px] w-64 border border-outline-variant/30 rounded-2xl overflow-hidden bg-background">
                  <AdminSidebarShared />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 15: CARD, REVIEW & BADGE COMPONENTS */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-8">
          <SectionHeader
            title="QA Component Testing Audit - Card, Review & Badge Components"
            subtitle="Testing CollectionCard, ReviewCard, SmartMatchingBanner, SimilarCurations, and BadgesGrid."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            {/* CollectionCard */}
            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: CollectionCard (Multiple variants and sizes)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Populated CollectionCard */}
                  <div className="space-y-2">
                    <span className="text-xs text-on-surface-variant block">Populated Collection State</span>
                    <CollectionCard
                      title={MOCK_COLLECTIONS[0].title}
                      description={MOCK_COLLECTIONS[0].description}
                      mainImage={MOCK_COLLECTIONS[0].mainImage}
                      sideImage={MOCK_COLLECTIONS[0].sideImage}
                      extraCount={MOCK_COLLECTIONS[0].extraCount}
                      tag={MOCK_COLLECTIONS[0].tag}
                      updatedText={MOCK_COLLECTIONS[0].updatedText}
                      onClick={() => alert("Clicked populated collection card!")}
                    />
                  </div>

                  {/* Empty/Minimal CollectionCard */}
                  <div className="space-y-2">
                    <span className="text-xs text-on-surface-variant block">Minimal/Empty Collection State (Missing Optional Data)</span>
                    <CollectionCard
                      title="New Vibe Curations"
                      description="An empty collection workspace awaiting recommendations."
                      mainImage=""
                      sideImage=""
                      extraCount={0}
                      tag=""
                      updatedText="Created just now"
                      onClick={() => alert("Clicked empty collection card!")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ReviewCard */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 2: ReviewCard (Simple & Profile Variants, Different Ratings)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Simple Variant */}
                  <div className="space-y-2">
                    <span className="text-xs text-on-surface-variant block">variant="simple" (Standard customer review)</span>
                    <ReviewCard
                      variant="simple"
                      name="Sophia Jenkins"
                      avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                      date="3 days ago"
                      rating={4.8}
                      text="Great coffee and pastries. Can get a little crowded around noon, but earlier in the morning it's perfect for studying."
                      tags={["Quiet", "WiFi", "Coffee"]}
                    />
                  </div>

                  {/* Profile Variant */}
                  <div className="space-y-2">
                    <span className="text-xs text-on-surface-variant block">variant="profile" (User profile contribution log)</span>
                    <ReviewCard
                      variant="profile"
                      spotTitle="The Glass Pavilion"
                      spotImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200"
                      date="June 20, 2026"
                      rating={5.0}
                      text="Absolutely stunning view! The glass pavilion feels like an oasis in the middle of Brooklyn. Internet is super fast."
                      tags={["Focus Mode", "Outdoor"]}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SmartMatchingBanner */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 3: SmartMatchingBanner
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="max-w-xl mx-auto">
                  <SmartMatchingBanner />
                </div>
              </div>
            </div>

            {/* SimilarCurations & BadgesGrid */}
            <div className="pt-6 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 4: SimilarCurations & BadgesGrid
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-xs text-on-surface-variant block">SimilarCurations</span>
                    <SimilarCurations />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs text-on-surface-variant block">BadgesGrid</span>
                    <BadgesGrid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 16: FORM COMPONENT */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-8">
          <SectionHeader
            title="QA Component Testing Audit - Form Component Wrapper"
            subtitle="Testing the generic UI Form wrapper."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            <div className="pt-4 space-y-4">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: Form Wrapper (Filled & Interactive States)
              </span>
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 max-w-lg mx-auto">
                <Form title="Report Diagnostic Verdict" icon="analytics">
                  <div className="space-y-4">
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      This Form component wraps children inside a clean UI panel with a header, icon badge, and proper styling shadow constraints.
                    </p>
                    <InputField label="Inspector Sign-off" placeholder="Johnathan Doe, QA Auditor" />
                    <InputField label="Observations Summary" placeholder="Review quality standard validation results..." />
                    <div className="flex justify-end gap-3 pt-2">
                      <PrimaryButton variant="secondary" size="sm">Cancel</PrimaryButton>
                      <PrimaryButton variant="primary" size="sm" onClick={() => alert("Verdict Submitted!")}>Publish Verdict</PrimaryButton>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 17: SHARED COMPONENT ALIASES */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-sm space-y-8">
          <SectionHeader
            title="QA Component Testing Audit - Shared Component Aliases"
            subtitle="Testing components imported from the 'shared/' folder path directory to ensure correct re-export mapping."
          />

          <div className="space-y-8 divide-y divide-outline-variant/20">
            <div className="pt-4 space-y-6">
              <span className="text-xs font-semibold text-primary/70 block uppercase tracking-wider">
                Test Case 1: SectionHeaderShared, SearchBarShared, and TagBadgeShared
              </span>
              
              <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 space-y-6">
                <SectionHeaderShared
                  title="This is a Shared SectionHeader Alias"
                  subtitle="Imported via /Components/shared/SectionHeader"
                  align="left"
                />

                <div className="space-y-2">
                  <span className="text-xs text-on-surface-variant block">Shared SearchBar Alias:</span>
                  <SearchBarShared placeholder="Type to search via shared alias SearchBar..." />
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-on-surface-variant block">Shared TagBadge Alias:</span>
                  <div className="flex flex-wrap gap-2">
                    <TagBadgeShared variant="success">Shared Success Tag</TagBadgeShared>
                    <TagBadgeShared variant="warning">Shared Warning Tag</TagBadgeShared>
                    <TagBadgeShared variant="danger">Shared Danger Tag</TagBadgeShared>
                    <TagBadgeShared variant="secondary">Shared Secondary Tag</TagBadgeShared>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
