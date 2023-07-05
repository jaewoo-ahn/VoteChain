// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function VoteCarousel({ pollList }) {
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {pollList.map((list, index) => (
        <SwiperSlide key={index}>
          <div className="bg-bule-400  h-48 bg-white rounded-lg">
            <li>
              <div>제목: {list.title}</div>
              <div>{list.context}</div>
              <div>{list.regardingUsers}</div>
            </li>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
