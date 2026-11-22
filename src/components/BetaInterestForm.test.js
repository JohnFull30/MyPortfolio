import { render, screen } from "@testing-library/react";
import BetaInterestForm, { betaInterestHref } from "./BetaInterestForm";

test.each(["Leave On Time", "Route Planner", "HabitSquares"])(
  "%s requires a valid email and supports email autofill",
  (appName) => {
    render(<BetaInterestForm appName={appName} recipient="support@example.com" />);
    const email = screen.getByRole("textbox", { name: /email address/i });
    expect(email).toBeRequired();
    expect(email).toHaveAttribute("autocomplete", "email");
    expect(email.checkValidity()).toBe(false);
    email.value = "invalid";
    expect(email.checkValidity()).toBe(false);
    email.value = "tester@example.com";
    expect(email.checkValidity()).toBe(true);
    expect(screen.getByRole("heading", { name: `Help shape ${appName}.` })).toBeInTheDocument();
  },
);

test.each(["Leave On Time", "Route Planner", "HabitSquares"])(
  "%s includes the app and entered invitation email in its request",
  (appName) => {
    const href = betaInterestHref(appName, "support@example.com", " tester+beta@example.com ");
    expect(href.startsWith("mailto:support@example.com?")).toBe(true);
    const query = new URLSearchParams(href.split("?")[1]);
    expect(query.get("subject")).toBe(`${appName} beta testing interest`);
    expect(query.get("body")).toContain("Invitation email: tester+beta@example.com");
    expect(query.get("body")).toContain(`I'd like to beta test ${appName}.`);
  },
);
