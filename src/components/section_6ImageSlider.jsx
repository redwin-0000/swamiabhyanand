import img2 from "../assets/sa2.jpeg";
import img3 from "../assets/sa3.jpeg";
import img4 from "../assets/sa4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cardData = [
  { src: img2 },
  { src: img3 },
  { src: img4 },
];

const Section_6ImageSlider = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-3xl">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          className="flex justify-center items-center"
        >
          {cardData.map((item, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center">
              <img
                src={item.src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[280px] object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section_6ImageSlider;
