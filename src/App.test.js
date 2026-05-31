import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio home page", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /john fuller/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /proof of design, product thinking, and shipped interfaces/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getAllByText(/HabitSquares/i).length).toBeGreaterThan(0);
});
