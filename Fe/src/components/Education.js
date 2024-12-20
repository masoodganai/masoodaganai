import React from 'react';

const Education = () => {
  // Inline style object
  const sectionStyle = {
    padding: '60px 0',
    backgroundColor: '#f4f4f4',
  };

  const headingStyle = {
    fontSize: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '15px',
  };

  const degreeStyle = {
    fontWeight: 'bold',
    color: '#EF233C', // Red color for emphasis
  };

  const durationStyle = {
    fontStyle: 'italic',
    color: '#888',
  };

  return (
    <section id="education" style={sectionStyle}>
      <h2 style={headingStyle}>Education</h2>

      {/* MCA Details */}
      <div>
       
        <p style={paragraphStyle}>
          <span style={degreeStyle}>Master of Computer Applications (MCA):</span>{' '}
          Completed MCA in two years with 75% of overall score in 2023.
        </p>
        <p style={paragraphStyle}>Chandigarh University - Chandigarh, PB</p>
      </div>

      {/* BCA Details */}
      <div>
       
        <p style={paragraphStyle}>
          <span style={degreeStyle}>Bachelor of Computer Applications (BCA):</span>{' '}
          Completed BCA with an impressive 82% in 2020.
        </p>
        <p style={paragraphStyle}>MRSPTU - Punjab, PB</p>
      </div>
    </section>
  );
};

export default Education;
