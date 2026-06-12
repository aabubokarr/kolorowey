import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component that resets the scroll position to the top of the viewport whenever the path changes
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window instantly to (0,0) coordinate
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}