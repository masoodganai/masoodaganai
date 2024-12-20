import React, { useState } from "react";
import axios from "axios";
import img5 from "../img/img5.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber:"",
    subject: "",
    message: "",
  });

  const [formStatus, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target; 
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://masoodaganai-4q6m.vercel.app//api/send-email", formData);
      setStatus("Your message was sent successfully!");
      setFormData({ name: "", email: "", phoneNumber:"", subject:"",message: "" }); // Clear form after submission
    } catch (error) {
      setStatus("There was an error sending your message please contact through instagram linkedin links are present in footer.");
    }
  };

  // Inline styles
  const sectionStyle = {
    backgroundImage: {img5}, // Replace with your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 20px",
    color: "#fff", // White text for contrast
  }; 

  const formContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark transparent background
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
    backgroundColor: "#3498db", // Primary button color
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

  const buttonHoverStyle = {
    backgroundColor: "#2980b9", // Darker shade on hover
  };

  const successMessageStyle = {
    color: "#2ecc71", // Success green
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
              {formStatus && <div style={successMessageStyle}>{formStatus}</div>}
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="novalidate"
                onSubmit={handleSubmit}
              >
                <div className="control-group">
                  <input
                    type="text"
                    style={inputStyle}
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    style={inputStyle}
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="control-group">
                  <input
                    type="phoneNumber"
                    style={inputStyle}
                    id="phoneNumber"
                    placeholder="Phone Number"
                    required="required"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    style={inputStyle}
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="control-group">
                  <textarea
                    style={{
                      ...inputStyle,
                      height: "100px",
                      resize: "none",
                    }}
                    id="message"
                    placeholder="Message"
                    required="required"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <button
                    className="btn"
                    type="submit"
                    id="sendMessageButton"
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
