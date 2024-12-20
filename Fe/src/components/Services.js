import React from "react";

const Services = () => {
  const services = [
   
    {
      icon: "fa fa-laptop-code",
      title: "Web Development",
      description:
        "Developing robust, scalable, and high-performance websites using the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in creating dynamic, full-stack web applications tailored to meet client needs",
      delay: "0.2s",
    },
  
  ];

  return (
    <div className="service" id="service">
      <div className="container">
        {/* Section Header */}
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>What I do</p>
          <h2>Awesome Quality Services</h2>
        </div>

        {/* Services List */}
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
