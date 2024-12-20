import React from "react";

const Footer = () => {
  // Inline style objects
  const footerStyle = {
    backgroundColor: "#2C3E50", // Dark background for the footer
    padding: "40px 0",
    color: "#ECF0F1", // Light text color
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const footerInfoStyle = {
    marginBottom: "30px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const subheadingStyle = {
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "20px",
    color: "#BDC3C7", // Softer text color
  };

  const contactStyle = {
    fontSize: "14px",
    marginBottom: "10px",
    color: "#ECF0F1",
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "#ECF0F1",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const iconHoverStyle = {
    color: "#E74C3C", // Red color on hover
  };

  const copyrightStyle = {
    fontSize: "14px",
    color: "#95A5A6", // Muted text color
    marginTop: "20px",
  };

  return (
    <div style={footerStyle} className="footer wow fadeIn" data-wow-delay="0.3s">
      <div style={containerStyle}>
        <div style={footerInfoStyle}>
          <h1 style={subheadingStyle}>Masood Ganai</h1>
          <h3 style={subheadingStyle}>Sunjwan Jammu And Kashmir 180011</h3>
          <div style={contactStyle}>
            <p>+91 6005134523</p>
            <p>ahamedmasood12@gamil.com</p>
          </div>
          <div style={socialIconsStyle}>
            <a href="https://x.com/masoodGanai1" aria-label="Twitter" style={iconStyle} onMouseEnter={(e) => (e.target.style.color = iconHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = iconStyle.color)}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/masoodganai.tk" aria-label="Facebook" style={iconStyle} onMouseEnter={(e) => (e.target.style.color = iconHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = iconStyle.color)}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/@masoodslens" aria-label="YouTube" style={iconStyle} onMouseEnter={(e) => (e.target.style.color = iconHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = iconStyle.color)}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/masoodaganai/" aria-label="Instagram" style={iconStyle} onMouseEnter={(e) => (e.target.style.color = iconHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = iconStyle.color)}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/masood-ahamed-6a2a21200/" aria-label="LinkedIn" style={iconStyle} onMouseEnter={(e) => (e.target.style.color = iconHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = iconStyle.color)}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div>
          <p style={copyrightStyle}>
            &copy; <a href="#" style={{ color: "#ECF0F1", textDecoration: "none" }}>masoodaganai</a>. All Right Reserved || Designed By{" "}
            <a href="" target="_blank" rel="noopener noreferrer" style={{ color: "#E74C3C", textDecoration: "none" }}>
              Masood Ganai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
