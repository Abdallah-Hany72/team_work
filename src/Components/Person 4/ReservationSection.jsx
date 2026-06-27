import React from "react";

const ReservationSection = ({ bookingUrl }) => {
  const handleBook = () => {
    if (bookingUrl) {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Online reservations are not available for this place.");
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-outline-variant/30">
      <button
        onClick={handleBook}
        className="w-full bg-primary hover:bg-primary-container text-on-primary py-4 rounded-xl font-headline-md flex items-center justify-center gap-3 sunlight-shadow transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <span className="material-symbols-outlined">
          calendar_today
        </span>

        {bookingUrl ? "Book a Table" : "Reservations Unavailable"}
      </button>

      <p className="text-center text-label-md text-on-surface-variant mt-3">
        {bookingUrl
          ? "Reserve online instantly"
          : "Please call the venue to reserve"}
      </p>
    </div>
  );
};

export default ReservationSection;