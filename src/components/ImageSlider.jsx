// import img1 from "../assets/sa1.jpeg";
import img2 from "../assets/sa2.jpeg";
import img3 from "../assets/sa3.jpeg";
import img4 from "../assets/sa4.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const cardData = [
  // {
  //   src: img1,
  // },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
];

const FullScreenImageSlider = () => {
  return (
    <div className="w-full flex gap-6 flex-col md:flex-row">
      <div className="w-[70%] hidden md:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cardData?.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  src={item?.src}
                  alt={idx}
                  className="h-full  md:h-[600px] lg:h-[800px] object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="md:w-[30%] relative">
        <img src="/assets/S1.jpeg" alt="" className=" md:h-[100%] w-full" />
        <p className="absolute text-white z-10 bottom-10 md:bottom-20 left-4 text-xl">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </p>
      </div>
    </div>
  );
};

export default FullScreenImageSlider;
