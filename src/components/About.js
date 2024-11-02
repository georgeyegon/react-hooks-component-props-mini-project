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
