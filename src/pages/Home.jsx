function Home() {
  return (
    <div className="container">
      <img
        src="https://via.placeholder.com/180"
        alt="Profile"
        className="profile"
      />

      <h1>Rishabh Mahendra</h1>
      <p className="tagline">Computer Science Student | Developer | AI Enthusiast</p>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student at Mahindra University with interests in
          web development, machine learning, and software engineering.
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
        <p>LinkedIn: https://www.linkedin.com/in/mahendrarishabh/</p>
        <p>Email: rishabh.mahendra05@gmail.com</p>
        <p>College Email: se23uari102@mahindrauniversity.edu.in</p>
        <p>Skills: React, JavaScript, Python, SQL, HTML, CSS</p>
      </section>
    </div>
  );
}

export default Home;