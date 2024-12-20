import React from "react";
import img1 from "../img/portfolio-1.jpg";
import img2 from "../img/portfolio-2.jpg";
import img6 from "../img/portfolio-6.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: "filter-1",
      title: "eCommerce Website",
      imgSrc: img1,
      delay: "0.0s",
    },
    {
      id: 2,
      category: "filter-2",
      title: "Product Landing Page",
      imgSrc: img2,
      delay: "0.2s",
    },
 

  
    {
      id: 6,
      category: "filter-3",
      title: "Company Website",
      imgSrc: img6,
      delay: "1.0s",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>My Portfolio</p>
          <h2>My Excellent Portfolio</h2>
        </div>

        {/* Portfolio Filters */}
        <div className="row">
          <div className="col-12">
            <ul id="portfolio-filter">
             
              <li data-filter=".filter-1">Web Design</li>
              
            </ul>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="row portfolio-container">
          {portfolioItems.map((item) => (
            <div
              className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.category} wow fadeInUp`}
              data-wow-delay={item.delay}
              key={item.id}
            >
              <div className="portfolio-wrap">
                <div className="portfolio-img">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="portfolio-text">
                  <h3>{item.title}</h3>
                  <a
                    className="btn"
                    href={item.imgSrc}
                    data-lightbox="portfolio"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

