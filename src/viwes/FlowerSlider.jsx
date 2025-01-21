import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../assets/css/FlowerSlider.css";

// import owner from "../assets/images/owner/owner.jpg";
import alstroemeria from '../assets/images/flowers/img1.jpg';
import babysBreath from "../assets/images/flowers/img2.jpg";
import chrysanthemum from "../assets/images/flowers/img3.jpg";
import daisy from "../assets/images/flowers/img4.jpg";
import hydrangea from "../assets/images/flowers/img5.jpg";
import ivy from "../assets/images/flowers/img6.jpg";
import kapuru from "../assets/images/flowers/img7.jpg";
import lily from "../assets/images/flowers/img8.jpg";
import rose from "../assets/images/flowers/img9.jpg";
import superDaisy from "../assets/images/flowers/img10.jpg";
import tigerLily from "../assets/images/flowers/img11.jpg";
// import { img } from "framer-motion/client";
const FlowerSlider = () => {
  const flowers = [
    {
      name: "Alstroemeria",
      image: alstroemeria,
      description: "Known for its vibrant and multicolored petals.",
    },
    {
      name: "Baby's Breath",
      image: babysBreath,
      description: "Delicate and small white flowers often used as fillers.",
    },
    {
      name: "Chrysanthemum",
      image: chrysanthemum,
      description: "Symbolizes longevity and joy with its intricate petals.",
    },
    {
      name: "Daisy",
      image: daisy,
      description: "Bright and cheerful flowers that symbolize innocence.",
    },
    {
      name: "Hydrangea",
      image: hydrangea,
      description: "Known for its large and showy flower clusters.",
    },
    {
      name: "Ivy",
      image: ivy,
      description: "Represents fidelity and affection with its trailing vines.",
    },
    {
      name: "Kapuru",
      image: kapuru,
      description: "A beautiful and unique flower known for its vibrant hues.",
    },
    {
      name: "Lily",
      image: lily,
      description: "Elegant flowers that symbolize purity and refined beauty.",
    },
    {
      name: "Rose",
      image: rose,
      description: "Classic symbol of love and passion in various shades.",
    },
    {
      name: "Super Daisy",
      image: superDaisy,
      description: "A large and striking variation of the classic daisy.",
    },
    {
      name: "Tiger Lily",
      image: tigerLily,
      description: "Bright orange flowers with black spots, symbolizing wealth.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flowers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flowers.length) % flowers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="slide-image"
            />
            <div className="slide-content">
              <h2 className="slide-title">{flower.name}</h2>
              <p className="slide-description">{flower.description}</p>
            </div>
          </div>
        ))}

        <div className="slider-nav">
          <button className="nav-button" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-button" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="thumbnails">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            <img src={flower.image} alt={flower.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerSlider;
