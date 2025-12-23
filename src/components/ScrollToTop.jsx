import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // requestAnimationFrame se smooth scroll bhi safe ho jata hai
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
