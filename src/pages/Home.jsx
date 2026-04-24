import profileImg from "../assets/portfolio.jpg";
function Home() {
  return (
    <div className="container">
      <div className="hero">
        <img src={profileImg} alt="Profile" className="profile" />
        <div className="hero-text">
          <h1>Rishabh Mahendra</h1>
          <p className="tagline">
            Artificial Intelligence Student at Mahindra University focused on software
            development, AI, and practical tech projects.
          </p>
            <div className="hero-links">
            <a href="https://www.linkedin.com/in/mahendrarishabh/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span> • </span>
            <a href="https://github.com/rishabhm005" target="_blank" rel="noreferrer">GitHub</a>
            <span> • </span>
            <a href="mailto:rishabh.mahendra05@gmail.com" target="_blank" rel="noreferrer">Email</a>
          </div>
        </div>
      </div>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I enjoy building useful software, exploring machine learning, and
          solving technical problems through clean and efficient solutions.
        </p>
      </section>

      <section className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>Graph Neural Networks</li>
          <li>Explainable AI</li>
          <li>Data Analytics</li>
          <li>Web Technologies</li>
        </ul>
      </section>

      <section className="card">
        <h2>Personal Details</h2>
        <p>Name: Rishabh Mahendra</p>
        <p>Contact: Available upon request</p>
        <p>Email: rishabh.mahendra05@gmail.com</p>
        <p>College Email: se23uari102@mahindrauniversity.edu.in</p>
        <p>Skills: React, JavaScript, Python, SQL, HTML, CSS</p>
      </section>
    </div>
  );
}

export default Home;