import "./AboutMe.scss";
import aboutMeImage from "../../assets/hari1.png";
import { useState } from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<
    "skills" | "experience" | "education"
  >("skills");

  const tabContent = {
    skills: (
      <div>
        <h3>Language:</h3>
        <p>JavaScript, TypeScript, HTML, CSS</p>
        <h3>Frameword & Libraries:</h3>
        <p>
          React, Redux , React-Router, Node, Express, Tailwind CSS, SASS,
          Bootstrap, Material UI
        </p>
        <h3>Database:</h3>
        <p>Mongodb, Mysql</p>
      </div>
    ),
    experience: (
      <div>
        <h3>Internship Experience:</h3>
        <p>
          <strong>Company:</strong> Axios Softwork, Banepa
        </p>
        <p>
          <strong>Position:</strong> React Intern
        </p>
        <p>
          <strong>Duration:</strong> June 2023 to September 2023 (3 months)
        </p>
        <p>
          <strong>Description:</strong> During my internship at Axios Softwork,
          I had the opportunity to work as a React Intern. I actively
          contributed to projects, collaborated with the development team, and
          gained practical experience in building React applications. This
          experience enhanced my skills in frontend development and provided
          valuable insights into real-world software development practices.
        </p>
      </div>
    ),

    education: (
      <div>
        <h3>Bachelor's Degree:</h3>
        <p>
          <strong>Program:</strong> Computer Science
        </p>
        <p>
          <strong>Institution:</strong> NIST College, Banepa
        </p>
        <p>
          <strong>Completion:</strong> December,2023
        </p>
        <p>
          <strong>Details:</strong> I successfully completed my Bachelor's
          degree in Computer Science from NIST College, Banepa. The program
          equipped me with a solid foundation in computer science principles and
          practical skills, preparing me for a career in software development.
        </p>
      </div>
    ),
  };
  return (
    <div className="about-main">
      <div className="main-section">
        <div className="first">
          <img
            src={aboutMeImage}
            alt="about me image"
            className="aboutme-image"
          />
        </div>
        <div className="second">
          <h1>About Me</h1>
          <div>
            👋 Hello there! I'm Hari Sharan Chaulagain, a passionate and
            creative computer science graduate from NIST College, Banepa. Armed
            with a Bachelor's degree and a zest for coding, I bring a diverse
            skill set to the table.
          </div>
          <div className="tab-section">
            <button
              onClick={() => setActiveTab("skills")}
              className={activeTab === "skills" ? "active" : ""}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={activeTab === "experience" ? "active" : ""}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={activeTab === "education" ? "active" : ""}
            >
              Education
            </button>
          </div>
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
