import { render, screen } from "@testing-library/react";
import App from "./App";

<<<<<<< HEAD
test('renders John Fuller heading', () => {
=======
test("renders learn react link", () => {
>>>>>>> 48bdbf4 (center final project card)
  render(<App />);
  const heading = screen.getByText(/john fuller/i);
  expect(heading).toBeInTheDocument();
});
