// src/Components/Person 6/BadgesGrid.jsx
import React from "react";
import { MOCK_USER } from "../../constants/mockData";

export default function BadgesGrid() {
  return (
    <div className="bg-surface-container-low p-5 rounded-xl shadow-sm border border-outline-variant/15">
      <h3 className="font-bold text-on-surface mb-4 text-headline-md text-[18px]">
        Badges
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {MOCK_USER.badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center justify-center p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/10 text-center"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${badge.color}`}>
              <span className="material-symbols-outlined text-[20px]">{badge.icon}</span>
            </div>
            <span className="text-[10px] font-bold text-on-surface-variant leading-tight block">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
