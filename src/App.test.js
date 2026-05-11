import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders John Fuller heading', () => {
  render(<App />);
  const heading = screen.getByText(/john fuller/i);
  expect(heading).toBeInTheDocument();
});
