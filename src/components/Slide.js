// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { changeBanner } from '../store/store';

export default function Slide() {
    let dispatch = useDispatch()
    return (
        <>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className='header-slide-container'
                onSlideChange={(e)=> dispatch(changeBanner(e.activeIndex))}
            >
                <SwiperSlide className='header-slide-area'>
                    <img src="/img/banner1.jpg" className='header-slide-img'/>
                </SwiperSlide>
                <SwiperSlide className='header-slide-area'>
                    <img src="/img/banner2.jpg" className='header-slide-img'/>
                </SwiperSlide>
                <SwiperSlide className='header-slide-area'>
                    <img src="/img/banner3.jpg" className='header-slide-img'/>
                </SwiperSlide>
                <SwiperSlide className='header-slide-area'>
                    <img src="/img/banner4.jpg" className='header-slide-img'/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
