import React from "react";

const About = () => {
  // Inline style objects
  const sectionStyle = {
    padding: "60px 0",
    backgroundColor: "#e7f3ff", // Light blue background for the section
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "30px",
    color: "#2c3e50", // Darker shade for heading
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#34495e", // Dark gray text color
    textAlign: "center",
    lineHeight: "1.8",
    marginBottom: "25px",
  };

  const skillNameStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#2c3e50", // Dark gray color for skill names
    marginTop: "15px",
  };

  const progressBarStyle = {
    height: "14px",
    borderRadius: "7px",
    backgroundColor: "#f4f6f7", // Lighter background for progress bar
    marginBottom: "30px", // More space between skills
  };

  const progressStyle = {
    borderRadius: "7px",
    transition: "width 2s ease-in-out",
  };

  // Unique color scheme for different skills
  const progressBarColors = {
    react: "#61DBFB", // React Blue
    node: "#68A063", // Node Green
    express: "#000000", // Express Black
    redux: "#764ABC", // Redux Purple
    mysql: "#00758F", // MySQL Blue
    api: "#E74C3C", // REST API Red
    mongoose: "#4A92D4", // Mongoose Blue
    heroku: "#430098", // Heroku Purple
    git: "#F05032", // Git Red
    npm: "#CB3837", // NPM Red
    passport: "#E5C200", // Passport JS Yellow
    kafka: "#1C1C1C", // Kafka Gray
    aws: "#FF9900", // AWS Orange
    microservices: "#27AE60", // Microservices Green
    deployment: "#FF6347", // Deployment Tomato
    cicd: "#007BFF", // CICD Blue
    jira: "#0A74DA", // Jira Blue
  };

  return (
    <div style={sectionStyle} className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-content">
              <div className="section-header text-left">
                <p style={paragraphStyle}>--Learn About Me --</p>
                <section id="professional-summary" className="section">
                  <h2 style={headingStyle}>About Me</h2>
                  <h1 style={paragraphStyle}>
                    I specialize in full-stack development, focusing on building scalable, performant applications using modern technologies like React, Node.js, Express.js, and MongoDB. I enjoy collaborating with cross-functional teams to deliver high-quality solutions.
                  </h1>
                  <p style={paragraphStyle}>• A full stack Developer with 2+ years of industrial experience in JavaScript, MERN, and micro services development.</p>
                  <p style={paragraphStyle}>• Worked with a team of 20 developers, QA engineers, and scrum masters.</p>
                  <p style={paragraphStyle}>• Optimized service layers, request queues, and MongoDB data models to handle high traffic.</p>
                  <p style={paragraphStyle}>• Developed and optimized 1000’s of RESTful APIs in Node and Express.</p>
                  <p style={paragraphStyle}>• Created reusable React JS components to improve development efficiency.</p>
                  <p style={paragraphStyle}>• Successfully delivered more than 4 projects using MERN stack technologies.</p>
                </section>
                <h2 style={headingStyle}>Skills</h2>
              </div>

              {/* Skills Section */}
              <div className="skills">
                {/* Skill 1: React */}
                <div style={skillNameStyle} className="skill-name">
                  <p>React JS</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "82%", backgroundColor: progressBarColors.react }} className="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* Skill 2: Node JS */}
                <div style={skillNameStyle} className="skill-name">
                  <p>Node JS</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "85%", backgroundColor: progressBarColors.node }} className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* Skill 3: Express JS */}
                <div style={skillNameStyle} className="skill-name">
                  <p>Express JS</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "79%", backgroundColor: progressBarColors.express }} className="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* Skill 4: Redux */}
                <div style={skillNameStyle} className="skill-name">
                  <p>Redux</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "80%", backgroundColor: progressBarColors.redux }} className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* Skill 5: MySQL */}
                <div style={skillNameStyle} className="skill-name">
                  <p>MySQL</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "82%", backgroundColor: progressBarColors.mysql }} className="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* Additional Skills */}
                <div style={skillNameStyle} className="skill-name">
                  <p>RESTful API (JSON)</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "85%", backgroundColor: progressBarColors.api }} className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>Jira</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "70%", backgroundColor: progressBarColors.jira }} className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>GIT</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "90%", backgroundColor: progressBarColors.git }} className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>NPM</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "80%", backgroundColor: progressBarColors.npm }} className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>Passport JS</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "75%", backgroundColor: progressBarColors.passport }} className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>Kafka</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "65%", backgroundColor: progressBarColors.kafka }} className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>AWS</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "80%", backgroundColor: progressBarColors.aws }} className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>Microservices</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "78%", backgroundColor: progressBarColors.microservices }} className="progress-bar" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>Deployment</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "85%", backgroundColor: progressBarColors.deployment }} className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div style={skillNameStyle} className="skill-name">
                  <p>CICD</p>
                </div>
                <div style={progressBarStyle} className="progress">
                  <div style={{ ...progressStyle, width: "90%", backgroundColor: progressBarColors.cicd }} className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
