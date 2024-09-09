// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slide() {
    return (
        <div className='header-slide-container'>
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
                className=""
            >
                <SwiperSlide className='header-slide-area'>
                    <img src="https://fastly.picsum.photos/id/13/1200/450.jpg?hmac=l70-su6w4Yh1RJztPgbcs6kaZTrjxLN993IfxSHcY1s" />
                </SwiperSlide>
                <SwiperSlide className='header-slide-area'>
                    <img src="https://fastly.picsum.photos/id/664/1200/450.jpg?hmac=WFY4nsFWBpylV7dtaIMOhwqaLnN5uIr3j8XcX0AJQ20" />
                </SwiperSlide>
                <SwiperSlide className='header-slide-area'>
                    <img src="https://fastly.picsum.photos/id/427/1200/450.jpg?hmac=V6Ra80Iqm5J_7j4CTOcQb6xuu700Xd5sAoZ8gtzUwLM" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
