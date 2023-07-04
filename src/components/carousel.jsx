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
      {pollList.map(
        (
          list,
          index // 변수명 수정 (methods -> method)
        ) => (
          <SwiperSlide key={index}>
            <div className="bg-blue-400 w-[20rem] h-[20rem] rounded-lg">
              <li>
                <div>제목: {list.title}</div>
                <div>{list.context}</div>
              </li>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
