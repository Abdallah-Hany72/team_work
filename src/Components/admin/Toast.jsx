// src/Components/admin/Toast.jsx
import { useCallback, useRef, useState } from "react";

/**
 * Shared toast hook for lightweight, non-blocking action feedback.
 * Usage: const [toast, showToast] = useToast();  ->  showToast("Review deleted");
 */
export function useToast(duration = 2600) {
  const [toast, setToast] = useState({ message: null, visible: false });
  const hideTimeout = useRef(null);
  const clearTimeout_ = useRef(null);

  const showToast = useCallback(
    (message) => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      if (clearTimeout_.current) clearTimeout(clearTimeout_.current);
      setToast({ message, visible: true });
      hideTimeout.current = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, duration);
      clearTimeout_.current = setTimeout(() => {
        setToast({ message: null, visible: false });
      }, duration + 300);
    },
    [duration]
  );

  return [toast, showToast];
}

export default function Toast({ toast }) {
  if (!toast?.message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        toast.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="bg-on-surface text-surface px-4 py-3 rounded-xl shadow-lg text-sm font-semibold">
        {toast.message}
      </div>
    </div>
  );
}