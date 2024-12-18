"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  caption: string;
  subCaption: string;
}

const images: ImageData[] = [
  {
    id: 1,
    src: "/first.jpg",
    alt: "New York",
    caption: "New York",
    subCaption: "We love the Big Apple!",
  },
  {
    id: 2,
    src: "/second.jpg",
    alt: "Los Angeles",
    caption: "Los Angeles",
    subCaption: "Lights, Camera, Action!",
  },
  {
    id: 3,
    src: "/first.jpg",
    alt: "Chicago",
    caption: "Chicago",
    subCaption: "Windy City Vibes.",
  },
];

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="lg:h-screen w-screen justify-center items-center overflow-hidden">
      <Slider {...settings}>
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-full lg:h-screen overflow-hidden" // Add relative class to make it the positioning context
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="intrinsic" // Adjusts to fit proportionally
              width={800} // Placeholder width
              height={800} // Placeholder height
              style={{ width: "100%", opacity: 0.6 }}
              priority={true}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 p-4 text-white drop-shadow-lg">
              <h2 className="text-xl md:text-3xl font-bold">{image.caption}</h2>
              <p className="text-sm md:text-lg mt-2">{image.subCaption}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePage;
