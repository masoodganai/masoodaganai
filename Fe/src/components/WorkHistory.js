
// Experience.js
import React from 'react';


const WorkHistory = () => {
  const experiences = [
    {
      id: 1,
      date: "02/01/2023 – Present",
      title: "Full Stack Engineer",
      company: "Ganai Care Solutions Pvt. Ltd",
      description: `• Write micro services, debugged problems and corrected issues.
      • Write Micro services in Node.js and prepare helm chart for deployment to Kubernetes Cluster.
      • Write Front End Application using React Js.
      • Inspected equipment, assessed functionality and optimized controls.
      • Adjusted software parameters to boost performance and incorporate new features.`
    },
    {
      id: 2,
      date: "06/06/2020 – 01/06/2021",
      title: "Full Stack Developer (Internship)",
      company: "Apprify Digital IT Hub Solutions Private Ltd.",
      description: `• Worked on various projects using Node.js and ReactJS.
      • Created and integrated APIs using MERN Stack.`
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <header className="section-header text-center">
          <p></p>
          <h2>Working Experience</h2>
        </header>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={exp.id}
            >
              <div className="timeline-text">
                <div className="timeline-date">{exp.date}</div>
                <h2>{exp.title}</h2>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;