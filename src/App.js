import { useEffect, useState } from "react";
import "./App.css";

import PortfolioHome from "./pages/PortfolioHome";
import HabitSquaresPage from "./pages/HabitSquaresPage";
import HabitSquaresPrivacyPage from "./pages/HabitSquaresPrivacyPage";
import HabitSquaresSupportPage from "./pages/HabitSquaresSupportPage";

function getRouteFromHash() {
  const hash = window.location.hash;

  if (hash.startsWith("#/")) {
    return hash.slice(1);
  }

  return "/";
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "/projects/habitsquares") {
    return <HabitSquaresPage />;
  }

  if (route === "/projects/habitsquares/privacy") {
    return <HabitSquaresPrivacyPage />;
  }

  if (route === "/projects/habitsquares/support") {
    return <HabitSquaresSupportPage />;
  }

  return <PortfolioHome />;
}

export default App;
