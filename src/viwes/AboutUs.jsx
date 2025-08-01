
import "../assets/css/AboutUs.css";

import owner from "../assets/images/owner/owner.webp";

const AboutUs = () => {
  return (


    
    <div className="bg-light-purple">
    <div className="container">
      {/* Hero Section with Owner */}
      <div className="hero-section">
        {/* Owner Image */}
        <div className="owner-image">
          <div className="image-container">
            <img
              src= {owner}
              alt="Owner's - Owner of Fresh Flowers"
              className="owner-photo"
            />
            {/* <div className="established-badge">
              <p>Est. 2025</p>
            </div> */}
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">
          <h1 className="heading">About Fresh Flowers</h1>
          <div className="owner-details">
            <h2 className="owner-name">Owner's Name</h2>
            <p className="title">Founder & Lead Florist</p>
          </div>
          <div className="text-content">
            <p>
              Welcome to LavenderLove Paradise, where every bloom tells a story. As the
              founder and lead florist, I have dedicated my life to sharing the
              beauty and joy of fresh flowers with our community.
            </p>
            <p>
              My journey began in my garden, where I learned the
              art of flower care and arrangement. After studying botany and
              floral design, I opened Fresh Flowers with a simple mission: to
              bring nature s finest blooms to your special moments.
            </p>
            <p>
              Today, we work with local growers to provide the freshest, most
              beautiful flowers for any occasion. Whether it s a wedding,
              celebration, or just because, we put our heart into every
              arrangement we create.
            </p>
          </div>
          {/* Contact Button */}
          {/* <div className="contact-btn">
            <a href="#" className="btn">
              Get in Touch
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
