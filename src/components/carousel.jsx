// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";

export default function VoteCarousel({ pollList }) {
  const listArray = pollList || [];

  useEffect(() => {
    console.log("pollList");
    console.log(pollList);
  }, [pollList]);

  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {listArray.map((list, index) => (
        <SwiperSlide key={index}>
          <div className="bg-red-300 w-[20rem] h-[20rem] rounded-lg">
            <li>
              <div>번호: {list.number}</div>
              <div>제목: {list.title}</div>
              <div>{list.context}</div>
              <div>{list.regardingUsers}</div>
              <div>votetype: {list.votetype}</div>
            </li>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
