import { useEffect, useState } from "react";
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

function App() {
  const [route, setRoute] = useState(getRouteFromHash());
  const normalizedRoute = route.toLowerCase();

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (normalizedRoute === "/projects/habitsquares") {
    return <HabitSquaresPage />;
  }

  if (normalizedRoute === "/projects/habitsquares/privacy") {
    return <HabitSquaresPrivacyPage />;
  }

  if (normalizedRoute === "/projects/habitsquares/support") {
    return <HabitSquaresSupportPage />;
  }

  return <PortfolioHome />;
}

export default App;
