import React, { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Inline style objects
  const navStyle = {
    backgroundColor: "#2C3E50", // Dark background for navbar
    padding: "10px 20px",
  };

  const brandStyle = {
    color: "#ECF0F1",
    fontSize: "24px",
    fontWeight: "700",
    textDecoration: "none",
  };

  const navbarTogglerStyle = {
    border: "none",
    background: "transparent",
    color: "#ECF0F1",
    fontSize: "24px",
    cursor: "pointer",
    display: "block", // Default for mobile
  };

  const navLinkStyle = {
    color: "#ECF0F1",
    fontSize: "16px",
    fontWeight: "500",
    padding: "8px 15px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const navLinkActiveStyle = {
    color: "#E74C3C",
    fontWeight: "600",
  };

  const navbarCollapseStyle = {
    display: isCollapsed ? "none" : "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  // Media query for responsiveness
  const responsiveStyle = `
    @media (min-width: 992px) {
      .navbar-toggler {
        display: none !important; /* Ensure button is hidden */
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style> {/* Inject responsive styles */}
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid">
          <a href="/" className="navbar-brand" style={brandStyle}>
            𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇𝑀𝒶𝓈𝑜𝑜𝒹
          </a>
          <button
            type="button"
            className="navbar-toggler"
            style={navbarTogglerStyle}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            ☰
          </button>

          <div
            className="navbar-collapse"
            id="navbarCollapse"
            style={navbarCollapseStyle}
          >
            <div className="navbar-nav">
              <a
                href="/"
                className="nav-item nav-link active"
                style={{ ...navLinkStyle, ...navLinkActiveStyle }}
              >
                Dashboard
              </a>
              <a href="/about" className="nav-item nav-link" style={navLinkStyle}>
                About
              </a>
              <a href="/services" className="nav-item nav-link" style={navLinkStyle}>
                Services
              </a>
              <a href="/work-history" className="nav-item nav-link" style={navLinkStyle}>
                Work History
              </a>
              <a href="/portfolio" className="nav-item nav-link" style={navLinkStyle}>
                Portfolio
              </a>
              <a href="/education" className="nav-item nav-link" style={navLinkStyle}>
                Education
              </a>
              <a
                href="/major-projects"
                className="nav-item nav-link"
                style={navLinkStyle}
              >
                Major Projects
              </a>
              <a href="/contact" className="nav-item nav-link" style={navLinkStyle}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
