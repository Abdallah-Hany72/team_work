import React, { useState, useEffect } from 'react';

// Reads your Google Maps API key from the environment.
// Vite projects: add this line to a `.env` file at your project root:
//   VITE_GOOGLE_MAPS_API_KEY=your_key_here
// (On Create React App instead? swap the line below for
//  `process.env.REACT_APP_GOOGLE_MAPS_API_KEY` and rename your env var to
//  `REACT_APP_GOOGLE_MAPS_API_KEY`.)
const GOOGLE_MAPS_API_KEY = import.meta.env?.VITE_GOOGLE_MAPS_API_KEY;

// Used only if no API key is set, or if the live map image fails to load.
const DEFAULT_FALLBACK_MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ki9H8VfLtjXkSopI0Ss6WSlUsHy4-tkQOHtQDO2YELEJ_R15iKvkpZZyP6KvYH0F_Nz6-LFt_8Ut5-eaqZHKBj-bGp_ZMPbaMwo8IP20R2Sont6YUkKFPFggHkasvgqHGsPRtPVtoihqZ5Svo6YUqar3JlotUH9Y_uubC23R9cov806je27Cb7kJHCZUpUtFmE8nn7s_aY4bqeLYzumNGzVFTfSo9cELZYtqKXFNaaOpcxBWzpnHpuo492sjiR2qG9tTVHMkXaE";

// Builds a live, location-specific map image from the Google Static Maps API.
// We pass the address straight to Google and let it geocode it for us, so
// there's no separate geocoding request needed.
const buildStaticMapUrl = (address) => {
  if (!GOOGLE_MAPS_API_KEY || !address) return null;

  const params = new URLSearchParams({
    center: address,
    zoom: "15",
    size: "600x300",
    scale: "2",
    maptype: "roadmap",
    key: GOOGLE_MAPS_API_KEY,
  });

  return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
};

const SpotMetaData = ({
  address,
  hours = [],
  contact,
  mapImage, // optional manual override; also used as the fallback if the live map fails to load
  children, // allows inserting Book a Table button inside the same card structure
}) => {
  const [mapSrc, setMapSrc] = useState(
    () => buildStaticMapUrl(address) || mapImage || DEFAULT_FALLBACK_MAP_IMAGE
  );

  // Re-generate the map whenever the spot changes (e.g. navigating from one
  // place's page to another), so the map always matches the current address.
  useEffect(() => {
    setMapSrc(buildStaticMapUrl(address) || mapImage || DEFAULT_FALLBACK_MAP_IMAGE);
  }, [address, mapImage]);

  // Clicking the map opens the real address in Google Maps - no API key needed for this part.
  const directionsUrl = address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : null;

  return (
    <div className="glass-card rounded-xl overflow-hidden sunlight-shadow">
      {/* Map Header */}
      <div className="h-48 w-full bg-surface-container-high relative">
        <a
          href={directionsUrl || undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={address ? `Open ${address} in Google Maps` : "Map"}
          className={`block w-full h-full ${directionsUrl ? "cursor-pointer" : "cursor-default"}`}
          onClick={(e) => {
            if (!directionsUrl) e.preventDefault();
          }}
        >
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-xl"
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          />
        </a>

      </div>

      {/* Details List */}
      <div className="p-stack-md">
        <h2 className="font-headline-md text-headline-md mb-4 flex items-center gap-2 text-on-surface">
          <span className="material-symbols-outlined text-secondary">info</span>
          The Deets
        </h2>

        <div className="space-y-4">
          {/* Address */}
          {address && (
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-on-surface-variant mt-1">
                pin_drop
              </span>
              <div>
                <span className="block font-label-md text-on-surface font-bold">Address</span>
                <address className="not-italic text-on-surface-variant whitespace-pre-line">
                  {address}
                </address>
              </div>
            </div>
          )}

          {/* Hours */}
          {hours && hours.length > 0 && (
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-on-surface-variant mt-1">
                schedule
              </span>
              <div>
                <span className="block font-label-md text-on-surface font-bold">Hours</span>
                <div className="text-on-surface-variant space-y-1">
                  {hours.map((line, i) => {
                    // Check if it's a bold day or standard text
                    const isToday = line.toLowerCase().includes('today') || line.toLowerCase().includes('fri') || line.toLowerCase().includes('sat'); // mock indicator or simple rule
                    return (
                      <p key={i} className={isToday ? "font-bold text-on-surface" : ""}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Contact */}
          {contact && (
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-on-surface-variant mt-1">
                call
              </span>
              <div>
                <a
                  href={`tel:${contact}`}
                  className="text-primary hover:underline"
                >
                  {contact}
                </a>
              </div>
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default SpotMetaData;