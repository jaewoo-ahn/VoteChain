// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardBack from "../components/CardBack";
// Import Swiper styles
import "swiper/css";

export default function VoteCarousel({ pollList }) {
  const listArray = pollList || [];
  const navigate = useNavigate();

  useEffect(() => {
    console.log("pollList");
    console.log(pollList);
  }, [pollList]);

  const handleCardClick = (cardId) => {
    // 카드 클릭 시 해당 카드 ID를 가진 페이지로 이동합니다.
    navigate(`../components/CardBack`);
  };

  return (
    // <Swiper
    //   spaceBetween={60}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    <>
      {listArray.map((list, index) => (
        // <SwiperSlide key={index}>
        <div
          key={index}
          className="bg-red-300  text-center  w-96  h-96 rounded-lg"
          onClick={() => {
            handleCardClick(list.number);
          }}
        >
          <div>번호: {list.number}</div>
          <div>제목: {list.title}</div>
          <div>{list.context}</div>
          <div>{list.regardingUsers}</div>
          <div>votetype: {list.votetype}</div>
        </div>
        // </SwiperSlide>
      ))}
    </>
    // </Swiper>
  );
}
