// src/__tests__/ArticleList.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  { id: 1, title: 'Components 101', date: 'December 15, 2020', preview: 'Test preview 1' },
  { id: 2, title: 'React Testing', date: 'January 1, 2021', preview: 'Test preview 2' },
];

test('renders a list of articles', () => {
  render(<ArticleList posts={posts} />);
  
  expect(screen.getByText('Components 101')).toBeInTheDocument();
  expect(screen.getByText('Test preview 1')).toBeInTheDocument();
  expect(screen.getByText('React Testing')).toBeInTheDocument();
  expect(screen.getByText('Test preview 2')).toBeInTheDocument();
});
