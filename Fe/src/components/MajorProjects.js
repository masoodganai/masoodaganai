import React from "react";
import styled from "styled-components";


// Styled components
const Section = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;

  h2 {
    font-size: 30px;
    font-weight: 600;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #777;
    line-height: 1.5;
    margin-top: 10px;
  }
`;

const Project = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
  }

  a {
    color: #ef233c;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .technologies,
  .duration {
    font-size: 14px;
    color: #888;
    margin-top: 10px;
  }
`;

const AboutImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MajorProjects = () => {
  return (
    <Section id="major-projects">
      <div className="container">
        <SectionHeader>
        
          <h2>Major Projects</h2>
        </SectionHeader>

        {/* Project 1 */}
        <Project>
          <h3>
            <a href="https://dev.wandrstar.com/" target="_blank" rel="noopener noreferrer">
              Project 1: https://dev.wandrstar.com/
            </a>
          </h3>
          <p>
            Full Stack developer. Developed and enhanced core features for Wandrstar, an Online Travel Agency platform...
          </p>
          <div className="technologies">Technologies Used: React Js, Nodejs, ExpressJS, MongoDB, AWS</div>
          <div className="duration">Duration: Ongoing</div>
        </Project>

        {/* Project 2 */}
        <Project>
          <h3>
            <a href="https://app.eventutti.io" target="_blank" rel="noopener noreferrer">
              Project 2: https://app.eventutti.io
            </a>
          </h3>
          <p>
            Full Stack developer. Contributed to the development of Eventutti.io, a platform designed to connect service providers...
          </p>
          <div className="technologies">Technologies Used: React Js, Nodejs, ExpressJS, MongoDB, AWS</div>
          <div className="duration">Duration: Completed</div>
        </Project>

        {/* Project 3 */}
        <Project>
          <h3>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Project 3: IndieTown
            </a>
          </h3>
          <p>
            Indie Town is the free, invite-only community that connects independent bands, artists, and music scenes...
          </p>
          <div className="technologies">Technologies Used: Nodejs, ExpressJS, React Js, Facebook API, Twilio</div>
          <div className="duration">Duration: 12 months</div>
        </Project>
      </div>
    </Section>
  );
};

export default MajorProjects;
