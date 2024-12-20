import React, { useState } from "react";
import axios from "axios";
import img5 from "../img/img5.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [formStatus, setStatus] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, subject, message } = formData;
    if (!name || !email || !phoneNumber || !subject || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://masoodaganai-26cd.vercel.app/send-email",
        formData
      );
      setStatus("Your message was sent successfully!");
      setFormData({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setStatus(error.response.data.error);
      } else {
        setStatus("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const sectionStyle = {
    backgroundImage: `url(${img5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 20px",
    color: "#fff",
  };

  const formContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#2980b9" : "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    textTransform: "uppercase",
    width: "100%",
    transition: "background 0.3s",
  };

  const successMessageStyle = {
    color: "#2ecc71",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "600",
  };

  const errorMessageStyle = {
    color: "#e74c3c",
    textAlign: "center",
    marginBottom: "15px",
    fontWeight: "600",
  };

  return (
    <div style={sectionStyle} id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div style={formContainerStyle}>
              {formStatus && (
                <div style={formStatus.startsWith("Your message") ? successMessageStyle : errorMessageStyle}>
                  {formStatus}
                </div>
              )}
              <form id="contactForm" noValidate="novalidate" onSubmit={handleSubmit}>
                <input
                  type="text"
                  style={inputStyle}
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  style={inputStyle}
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  style={inputStyle}
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  style={inputStyle}
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  style={{ ...inputStyle, height: "100px", resize: "none" }}
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  id="sendMessageButton"
                  style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

