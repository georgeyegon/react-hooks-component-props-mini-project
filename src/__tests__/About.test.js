// About.js
function About({ image = "https://via.placeholder.com/215", about = "Welcome to the blog!" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
// About.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders About page', () => {
  render(<About about="Welcome to the blog!" />);
  const aboutText = screen.getByText(/Welcome to the blog!/i);
  expect(aboutText).toBeInTheDocument();

  const logoElement = screen.getByAltText(/blog logo/i);
  expect(logoElement).toBeInTheDocument();
});
