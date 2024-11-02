import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  render(<Header />);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
