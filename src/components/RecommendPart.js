// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar, Keyboard, Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

import noIMG from '../img/No_Image_Available.jpg';
import recomTourData from '../data/recomTourData';
import recomCulData from '../data/recomCulData';
import recomEventData from '../data/recomEventData';
import recomHotelData from '../data/recomHotelData';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RecommendPart() {
  const [tourData, setTourData] = useState(recomTourData)

  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className='recommand-wrap'>
      <p>관광지 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // onSlideChange={null}
        // onSwiper={null}

        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
        className="recommand-tour-container"
      >

        {
          tourData.map((v, i) => {
            return (
              <SwiperSlide>
                <div className="recommand-tour-area">
                  <img src={`/img/${v.fileName}`} onClick={
                    () =>
                      navigate(`/${v.tag}/detail/${v.contentid}`, {
                        state: v
                      })
                  } />
                  <div>
                    <p>{v.title}</p>
                    <p>{v.addr}</p></div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <p>행사/공연/축제 추천</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 1,     // 슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
          stretch: 5,   // 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
          depth: 150,     // 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
          modifier: 2,    // 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
          slideShadows: false, // 슬라이더 그림자 : 3D 효과를 강조하기 위한 회전시 흐릿한 효과
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="recommand-event-container"
      >
        {
          recomEventData.map((v, i) => {
            return (
              <SwiperSlide className='recommand-event-area'>
                <img src={`/img/${v.fileName}`} onClick={
                  ()=> navigate(`/${v.tag}/detail/${v.contentid}`, {
                    state: v
                  })
                }/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <p>문화시설 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // onSlideChange={null}
        // onSwiper={null}
        // scrollbar={{
        //   hide: false,
        // }}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="recommand-common-container"
      >
        {
          recomCulData.map((v, i) => {
            return (
              <SwiperSlide>
                <div className="recommand-common-area">
                  <div>
                    <img src={`/img/${v.fileName}`} onClick={
                      ()=> navigate(`/${v.tag}/detail/${v.contentid}`, {
                        state: v
                      })
                    }/>
                  </div>
                  <div>
                    <p>{v.title}</p>
                    <p>{v.addr}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      
      <p>숙박시설 추천</p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // onSlideChange={null}
        // onSwiper={null}
        // scrollbar={{
        //   hide: false,
        // }}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="recommand-common-container"
      >
        {
          recomHotelData.map((v, i) => {
            return (
              <SwiperSlide>
                <div className="recommand-common-area">
                  <div>
                    <img src={v.firstimage} onClick={
                      ()=> navigate(`/${v.tag}/detail/${v.contentid}`, {
                        state: v
                      })
                    }/>
                  </div>
                  <div>
                    <p>{v.title}</p>
                    <p>{v.addr}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}