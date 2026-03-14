import React from "react";
import "./AboutView.css";

/**
 * RESPONSIBILITY: Display portfolio owner information
 * Shows personal bio and introduction
 */
const AboutView: React.FC = () => {
  return (
    <div className="view about-view">
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      {/* Introduction Section with Profile Image */}
      <section className="about-intro">
        <div className="intro-text">
          <h2>Hi, I'm a Full-Stack Developer</h2>
          <p>
            Welcome to my corner of the web! I'm passionate about creating elegant, functional web
            applications that solve real problems. Every line of code I write is a reflection of my
            commitment to quality and innovation.
          </p>
        </div>
        <div className="profile-image-container">
          <img src="/profile.png" alt="Profile" className="profile-image" />
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-story">
        <h3>My Journey</h3>
        <div className="story-content">
          <p>
            I'm a <span className="highlight">self-taught developer</span> who fell in love with
            coding because of the creative freedom it offers. Every skill I know has come through
            relentless practice, curiosity, and countless hours of learning and experimenting.
          </p>
          <p>
            What drives me is the ability to transform ideas into beautiful, interactive
            experiences. I believe that great software isn't just about functionality—it's about
            creating something that brings joy to users and takes pleasure in elegant code.
          </p>
          <p>
            <span className="highlight">Self-learning has taught me</span> more than any formal
            course ever could: discipline, problem-solving, resilience, and the importance of
            staying curious. I'm constantly exploring new technologies, methodologies, and best
            practices to improve my craft.
          </p>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="about-values">
        <h3>What Matters to Me</h3>
        <div className="values-grid">
          <div className="value-item">
            <span className="value-title">Clean Code</span>
            <p>Writing maintainable, readable code that future me will appreciate</p>
          </div>
          <div className="value-item">
            <span className="value-title">User Experience</span>
            <p>Building applications that are intuitive and delightful to use</p>
          </div>
          <div className="value-item">
            <span className="value-title">Continuous Learning</span>
            <p>Always growing, experimenting, and pushing my technical boundaries</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
