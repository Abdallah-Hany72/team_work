import React, { createContext, useContext, useState, useEffect } from "react";
import { MOCK_USER } from "../../constants/mockData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: MOCK_USER.name,
    location: MOCK_USER.location,
    bio: MOCK_USER.bio,
    avatar: MOCK_USER.avatar,
    coverImage: MOCK_USER.coverImage,
    favoriteSpots: ["Cafes", "Hidden gems"],
    favoriteAtmosphere: ["Quiet", "Casual"],
    preferredPriceRange: "Medium",
  });
  const [savedSpotIds, setSavedSpotIds] = useState(() => {
    const saved = localStorage.getItem("spotly_saved_places");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleSaveSpot = (spotId) => {
    setSavedSpotIds((prev) => {
      const isSaved = prev.includes(spotId);
      const updated = isSaved
        ? prev.filter((id) => id !== spotId)
        : [...prev, spotId];
      localStorage.setItem("spotly_saved_places", JSON.stringify(updated));
      return updated;
    });
  };

  const isSpotSaved = (spotId) => {
    return savedSpotIds.includes(spotId);
  };

  useEffect(() => {
    // Clear legacy localStorage user sessions to prevent auto-login on new visits
    localStorage.removeItem("spotly_user");

    const saved = sessionStorage.getItem("spotly_user");
    if (saved) {
      try {
        const parsedUser = JSON.parse(saved);
        setUser(parsedUser);
        const savedProfile = localStorage.getItem(`spotly_profile_${parsedUser.username || parsedUser.email}`);
        if (savedProfile) {
          setProfile(JSON.parse(savedProfile));
        }
      } catch (e) {
        console.error("Failed to parse saved user", e);
      }
    }
    setLoading(false);
  }, []);

  const login = (usernameOrEmail, password) => {
    let foundUser = null;
    const cleanUsername = usernameOrEmail.trim().toLowerCase();

    // Check demo accounts
    if (cleanUsername === "admin" && password === "123") {
      foundUser = { username: "admin", email: "admin@example.com", role: "admin" };
    } else if (cleanUsername === "user" && password === "123") {
      foundUser = { username: "user", email: "user@example.com", role: "user" };
    } else {
      // Check localStorage for registered users
      const registered = localStorage.getItem("spotly_registered_users");
      if (registered) {
        const users = JSON.parse(registered);
        const match = users.find(
          (u) =>
            (u.email.trim().toLowerCase() === cleanUsername ||
              u.fullName.trim().toLowerCase() === cleanUsername) &&
            u.password === password
        );
        if (match) {
          foundUser = { username: match.fullName, email: match.email, role: "user" };
        }
      }
    }

    if (foundUser) {
      sessionStorage.setItem("spotly_user", JSON.stringify(foundUser));
      setUser(foundUser);
      const savedProfile = localStorage.getItem(`spotly_profile_${foundUser.username || foundUser.email}`);
      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      } else {
        setProfile({
          name: foundUser.username === "admin" ? "Admin User" : MOCK_USER.name,
          location: foundUser.username === "admin" ? "San Francisco, CA" : MOCK_USER.location,
          bio: foundUser.username === "admin" ? "Spotly Platform Administrator." : MOCK_USER.bio,
          avatar: foundUser.username === "admin" ? "https://i.pravatar.cc/200" : MOCK_USER.avatar,
          coverImage: MOCK_USER.coverImage,
          favoriteSpots: foundUser.username === "admin" ? ["Restaurants", "Nightlife"] : ["Cafes", "Hidden gems"],
          favoriteAtmosphere: foundUser.username === "admin" ? ["Luxury", "Casual"] : ["Quiet", "Casual"],
          preferredPriceRange: foundUser.username === "admin" ? "Premium" : "Medium",
        });
      }
      return { success: true, user: foundUser };
    }
    return { success: false, error: "Invalid username/email or password" };
  };

  const signup = (fullName, email, password) => {
    const registered = localStorage.getItem("spotly_registered_users");
    const users = registered ? JSON.parse(registered) : [];

    const cleanEmail = email.trim().toLowerCase();

    if (users.some((u) => u.email.trim().toLowerCase() === cleanEmail)) {
      return { success: false, error: "Email address is already registered." };
    }

    // Demo account emails safety check
    if (cleanEmail === "admin@example.com" || cleanEmail === "user@example.com") {
      return { success: false, error: "Email is reserved for demo accounts." };
    }

    const newUser = { fullName, email: cleanEmail, password, role: "user" };
    users.push(newUser);
    localStorage.setItem("spotly_registered_users", JSON.stringify(users));
    return { success: true };
  };

  const logout = () => {
    sessionStorage.removeItem("spotly_user");
    setUser(null);
  };

  const updateProfile = (updatedData) => {
    setProfile((prev) => {
      const newProfile = { ...prev, ...updatedData };
      if (user) {
        localStorage.setItem(`spotly_profile_${user.username || user.email}`, JSON.stringify(newProfile));
      }
      return newProfile;
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, savedSpotIds, toggleSaveSpot, isSpotSaved, profile, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
