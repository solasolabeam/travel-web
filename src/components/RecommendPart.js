// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import noIMG from '../img/No_Image_Available.jpg';

export default function RecommendPart() {


  return (
    <div className='recommand-wrap'>
      <p>관광지 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('swiper', swiper)}

        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="recommand-container"
      >

        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
      </Swiper>

      <p>문화시설 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('swiper', swiper)}

        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="recommand-container"
      >

        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
      </Swiper>

      <p>행사/공연/축제 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('swiper', swiper)}

        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="recommand-container"
      >

        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
      </Swiper>

      <p>숙박 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('swiper', swiper)}

        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="recommand-container"
      >

        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
        <SwiperSlide><div className="recommand-card-area"><img src={noIMG} /></div></SwiperSlide>
      </Swiper>
    </div>
  )
}