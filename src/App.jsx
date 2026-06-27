import { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./Components/auth/AuthContext";
import UITest from "./pages/UITest";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AdminOverviewPage from "./pages/AdminOverviewPage";
import AdminModerationPage from "./pages/AdminModerationPage";
import AdminPlacesPage from "./pages/AdminPlacesPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";
import AddSpotFlow from "./pages/AddSpotFlow";
import AddSpotSuccess from "./pages/AddSpotSuccess";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import EditProfilePage from "./pages/EditProfilePage";
import ScrollToTop from "./Components/shared/ScrollToTop";

// Route wrapper for authenticated users (both admin and user role)
function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
}

// Route wrapper for admins only
function AdminRoute() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

// Route wrapper for unauthenticated/guest users only
function PublicRoute() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

// Special logout route to handle Sign In / Sign Out click from Navbar
function LogoutRedirect() {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
  }, [logout]);
  return <Navigate to="/signin" replace />;
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Routes>
        {/* Guest routes */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* Explicit Logout Route */}
        <Route path="/login" element={<LogoutRedirect />} />

        {/* Admin only routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminOverviewPage />} />
          <Route path="/admin/moderation" element={<AdminModerationPage />} />
          <Route path="/admin/places" element={<AdminPlacesPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Route>

        {/* Regular authenticated user routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
          <Route path="/add-spot" element={<AddSpotFlow />} />
          <Route path="/add-spot/success" element={<AddSpotSuccess />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

