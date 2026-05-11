import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

import PortfolioHome from "./pages/PortfolioHome.js";
import HabitSquaresPage from "./pages/HabitSquaresPage.js";
import HabitSquaresPrivacyPage from "./pages/HabitSquaresPrivacyPage.js";
import HabitSquaresSupportPage from "./pages/HabitSquaresSupportPage.js";

function getRouteFromHash() {
  const hash = window.location.hash;

  if (hash.startsWith("#/")) {
    return hash.slice(1);
  }

  return "/";
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top-button${isVisible ? " is-visible" : ""}`}
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash());
  const normalizedRoute = route.toLowerCase();
  const isHabitSquaresRoute = normalizedRoute.startsWith(
    "/projects/habitsquares",
  );

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useLayoutEffect(() => {
    if (isHabitSquaresRoute) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [isHabitSquaresRoute, normalizedRoute]);

  if (normalizedRoute === "/projects/habitsquares") {
    return (
      <>
        <HabitSquaresPage />
        <BackToTopButton />
      </>
    );
  }

  if (normalizedRoute === "/projects/habitsquares/privacy") {
    return (
      <>
        <HabitSquaresPrivacyPage />
        <BackToTopButton />
      </>
    );
  }

  if (normalizedRoute === "/projects/habitsquares/support") {
    return (
      <>
        <HabitSquaresSupportPage />
        <BackToTopButton />
      </>
    );
  }

  return <PortfolioHome />;
}

export default App;
