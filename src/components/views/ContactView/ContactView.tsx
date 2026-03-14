import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import "./ContactView.css";

/**
 * RESPONSIBILITY: Display contact information and methods
 * Provides multiple ways for visitors to reach out
 */
const ContactView: React.FC = () => {
  return (
    <div className="view contact-view">
      <header className="contact-header">
        <h1>Get In Touch</h1>
      </header>

      {/* Introduction Section */}
      <section className="contact-intro">
        <p>
          I'm always interested in hearing about new projects, opportunities, and interesting ideas.
          Whether you have a question or just want to say hello, feel free to reach out—I'll do my
          best to get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Methods */}
      <div className="contact-container">
        <section className="contact-card">
          <h3 className="contact-title">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </h3>
          <p className="contact-method">
            <a href="mailto:sascha.coding2406@gmail.com" className="contact-link">
              sascha.coding2406@gmail.com
            </a>
          </p>
          <p className="contact-note">Best for professional inquiries and project discussions</p>
        </section>

        <section className="contact-card">
          <h3 className="contact-title">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </h3>
          <p className="contact-method">
            <a
              href="https://www.linkedin.com/in/sascha-fischer-657900356"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/sascha-fischer-657900356
            </a>
          </p>
          <p className="contact-note">Connect to see my professional background</p>
        </section>

        <section className="contact-card">
          <h3 className="contact-title">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </h3>
          <p className="contact-method">
            <a
              href="https://github.com/DolanCoding"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/DolanCoding
            </a>
          </p>
          <p className="contact-note">Check out my repositories and contributions</p>
        </section>

        <section className="contact-card">
          <h3 className="contact-title">
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </h3>
          <p className="contact-method">
            <a
              href="https://discord.com/channels/@dolan.coding"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              discord.com/channels/@dolan.coding
            </a>
          </p>
          <p className="contact-note">
            Join me on Discord for quick chat, collaboration, or community discussions
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <section className="contact-cta">
        <p>
          Whether it's a collaboration opportunity, feedback on my work, or just a friendly chat
          about technology — I'm here to connect. Let's build something amazing together!
        </p>
      </section>
    </div>
  );
};

export default ContactView;
