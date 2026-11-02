import { useEffect } from 'react';
import { useLocation } from 'react-router';
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash
        ? document.getElementById(decodeURIComponent(hash.slice(1)))
        : null;
      if (target) target.scrollIntoView();
      else if (!hash) window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
