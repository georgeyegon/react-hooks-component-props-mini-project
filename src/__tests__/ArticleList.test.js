// src/__tests__/ArticleList.test.js
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList"; // Ensure the path is correct

const posts = [
  { id: 1, title: 'Components 101', preview: 'Test preview 1' },
  { id: 2, title: 'React Testing', preview: 'Test preview 2' },
];

describe('ArticleList Component', () => {
  it('renders correctly with given posts', () => {
    const { getByText } = render(<ArticleList posts={posts} />);

    expect(getByText('Components 101')).toBeInTheDocument();
    expect(getByText('Test preview 1')).toBeInTheDocument();
    expect(getByText('React Testing')).toBeInTheDocument();
    expect(getByText('Test preview 2')).toBeInTheDocument();
  });
});
