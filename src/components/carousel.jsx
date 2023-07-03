// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

export default function VoteCarousel() {
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="bg-red-400 w-[20rem] h-[20rem] rounded-lg">asdasd</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-blue-400 w-[20rem] h-[20rem] rounded-lg">asdasd</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-yellow-400 w-[20rem] h-[20rem] rounded-lg">
          asdasd
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-400 w-[20rem] h-[20rem] rounded-lg">asdasd</div>
      </SwiperSlide>
    </Swiper>
  );
}
