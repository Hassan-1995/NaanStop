import Image from "next/image";
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

const avatars: ImageData[] = [
  {
    id: 1,
    src: "/logo.png",
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

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-hidden bg-red-700">
      <Slider {...settings}>
        {/* <div className="flex lg:w-full lg:h-screen"> */}
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className="transition-opacity bg-slate-400 flex duration-500 lg:w-full lg:h-screen"
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              layout="responsive"
              width={1}
              height={1}
              style={{ alignSelf: "center" }}
              priority // Ensures images are loaded faster
            />
          </div>
        ))}
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default Test;
