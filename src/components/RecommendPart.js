// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function RecommendPart() {


  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="recommand-container"
    >
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
      <SwiperSlide className='recommand-card-area'>Slide 1</SwiperSlide>
    </Swiper>
  )
}