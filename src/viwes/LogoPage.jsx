
import '../assets/css/LogoPage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Left side with logo */}
      <div className="logo-section animate-slide-right">
        {/* <div className="logo">LOGO</div> */}
      </div>

      {/* Right side with text */}
      <div className="content-section animate-slide-left" >
        <h1 className="title animate-fade-in">
          LavenderLove Paradise
        </h1>
        
        <p className="description animate-fade-in-delay" >
          Discover the natural beauty of our fresh, handpicked flowers. At LavenderLove Paradise, 
          we offer a stunning selection of blooms to brighten your day and add elegance to every occasion.
        </p>

        <button className="cta-button animate-fade-in-delay-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;