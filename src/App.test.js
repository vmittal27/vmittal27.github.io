import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main navigation items", () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /publications/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /resume/i })).toBeInTheDocument();
});
