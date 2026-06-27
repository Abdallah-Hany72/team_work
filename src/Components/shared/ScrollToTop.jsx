import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * ScrollToTop handles scroll restoration across page navigations.
 * It automatically scrolls the window to (0, 0) on new page transitions
 * (PUSH or REPLACE) but avoids overriding the browser's default behavior
 * during back/forward actions (POP).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll to the top on page transition (normal navigation)
    // Avoid overriding scroll on browser back/forward buttons (POP)
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}
