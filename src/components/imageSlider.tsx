import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/600x400?text=Slide+1",
  "https://via.placeholder.com/600x400?text=Slide+2",
  "https://via.placeholder.com/600x400?text=Slide+3",
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={goToPreviousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full z-10"
      >
        Prev
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full z-10"
      >
        Next
      </button>
      <div className="relative">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            className={`w-full absolute top-0 left-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
