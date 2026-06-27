import React, { createContext, useContext, useState, useEffect } from "react";
import { MOCK_USER } from "../../constants/mockData";
import { MOCK_SPOTS } from "../../data/mockData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("spotly_user");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });
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
  const [savedSpotIds, setSavedSpotIds] = useState([]);
  const [collections, setCollections] = useState([]);
  const [spots, setSpots] = useState(() => {
    const saved = localStorage.getItem("spotly_spots");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return MOCK_SPOTS;
      }
    }
    return MOCK_SPOTS;
  });

  const updateSpot = (id, updatedFields) => {
    setSpots((prevSpots) => {
      const updated = prevSpots.map((spot) => {
        if (spot.id === id) {
          return { ...spot, ...updatedFields };
        }
        return spot;
      });
      localStorage.setItem("spotly_spots", JSON.stringify(updated));
      return updated;
    });
  };

  const deleteSpot = (id) => {
    setSpots((prevSpots) => {
      const updated = prevSpots.filter((spot) => spot.id !== id);
      localStorage.setItem("spotly_spots", JSON.stringify(updated));
      return updated;
    });
    // Clean up bookmarks
    setSavedSpotIds((prev) => {
      const updated = prev.filter((sid) => sid !== id);
      const userKey = user ? (user.username || user.email) : "anonymous";
      localStorage.setItem(`spotly_saved_places_${userKey}`, JSON.stringify(updated));
      return updated;
    });
    // Clean up collections
    setCollections((prevCols) => {
      const updatedCols = prevCols.map((col) => ({
        ...col,
        spotIds: col.spotIds.filter((sid) => sid !== id),
      }));
      const userKey = user ? (user.username || user.email) : "anonymous";
      localStorage.setItem(`spotly_collections_${userKey}`, JSON.stringify(updatedCols));
      return updatedCols;
    });
  };

  const addSpot = (newSpot) => {
    setSpots((prevSpots) => {
      const updated = [...prevSpots, newSpot];
      localStorage.setItem("spotly_spots", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const userKey = user ? (user.username || user.email) : "anonymous";
    const saved = localStorage.getItem(`spotly_saved_places_${userKey}`);
    setSavedSpotIds(saved ? JSON.parse(saved) : []);

    const savedCols = localStorage.getItem(`spotly_collections_${userKey}`);
    setCollections(savedCols ? JSON.parse(savedCols) : []);
  }, [user]);

  const toggleSaveSpot = (spotId) => {
    const userKey = user ? (user.username || user.email) : "anonymous";
    setSavedSpotIds((prev) => {
      const isSaved = prev.includes(spotId);
      const updated = isSaved
        ? prev.filter((id) => id !== spotId)
        : [...prev, spotId];
      
      localStorage.setItem(`spotly_saved_places_${userKey}`, JSON.stringify(updated));

      // Clean up from collections if unbookmarked completely
      if (isSaved) {
        setCollections((prevCols) => {
          const updatedCols = prevCols.map((col) => ({
            ...col,
            spotIds: col.spotIds.filter((id) => id !== spotId),
          }));
          localStorage.setItem(`spotly_collections_${userKey}`, JSON.stringify(updatedCols));
          return updatedCols;
        });
      }
      return updated;
    });
  };

  const isSpotSaved = (spotId) => {
    return savedSpotIds.includes(spotId);
  };

  const getCollectionsForSpot = (spotId) => {
    const isSaved = savedSpotIds.includes(spotId);
    const list = [];
    if (isSaved) {
      list.push("general");
    }
    collections.forEach((col) => {
      if (col.spotIds.includes(spotId)) {
        list.push(col.id);
      }
    });
    return list;
  };

  const addSpotToCollections = (spotId, collectionIds) => {
    const userKey = user ? (user.username || user.email) : "anonymous";
    
    // Ensure spot is saved (bookmarked) first
    if (!savedSpotIds.includes(spotId)) {
      setSavedSpotIds((prev) => {
        const updated = [...prev, spotId];
        localStorage.setItem(`spotly_saved_places_${userKey}`, JSON.stringify(updated));
        return updated;
      });
    }

    setCollections((prevCols) => {
      const updatedCols = prevCols.map((col) => {
        const shouldHave = collectionIds.includes(col.id);
        const hasIt = col.spotIds.includes(spotId);
        
        let newSpotIds = col.spotIds;
        if (shouldHave && !hasIt) {
          newSpotIds = [...col.spotIds, spotId];
        } else if (!shouldHave && hasIt) {
          newSpotIds = col.spotIds.filter((id) => id !== spotId);
        }
        
        return {
          ...col,
          spotIds: newSpotIds,
        };
      });
      localStorage.setItem(`spotly_collections_${userKey}`, JSON.stringify(updatedCols));
      return updatedCols;
    });
  };

  const createCollection = ({ name, description, coverImage, color }) => {
    const userKey = user ? (user.username || user.email) : "anonymous";
    
    const exists = collections.some((col) => col.name.toLowerCase() === name.toLowerCase()) || 
                   name.toLowerCase() === "general";
    if (exists) {
      return { success: false, error: "A collection with this name already exists." };
    }

    const newCol = {
      id: `col_${Date.now()}`,
      name,
      description: description || "",
      coverImage: coverImage || "",
      color: color || "",
      spotIds: [],
    };

    setCollections((prev) => {
      const updated = [...prev, newCol];
      localStorage.setItem(`spotly_collections_${userKey}`, JSON.stringify(updated));
      return updated;
    });

    return { success: true, collection: newCol };
  };

  const updateCollection = (collectionId, { name, description, coverImage, color }) => {
    const userKey = user ? (user.username || user.email) : "anonymous";

    const exists = collections.some((col) => col.id !== collectionId && col.name.toLowerCase() === name.toLowerCase()) || 
                   name.toLowerCase() === "general";
    if (exists) {
      return { success: false, error: "A collection with this name already exists." };
    }

    setCollections((prev) => {
      const updated = prev.map((col) => {
        if (col.id === collectionId) {
          return {
            ...col,
            name,
            description: description || "",
            coverImage: coverImage || "",
            color: color || "",
          };
        }
        return col;
      });
      localStorage.setItem(`spotly_collections_${userKey}`, JSON.stringify(updated));
      return updated;
    });

    return { success: true };
  };

  const deleteCollection = (collectionId) => {
    const userKey = user ? (user.username || user.email) : "anonymous";
    setCollections((prev) => {
      const updated = prev.filter((col) => col.id !== collectionId);
      localStorage.setItem(`spotly_collections_${userKey}`, JSON.stringify(updated));
      return updated;
    });
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
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        savedSpotIds,
        toggleSaveSpot,
        isSpotSaved,
        profile,
        updateProfile,
        collections,
        createCollection,
        updateCollection,
        deleteCollection,
        addSpotToCollections,
        getCollectionsForSpot,
        spots,
        addSpot,
        updateSpot,
        deleteSpot,
      }}
    >
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

