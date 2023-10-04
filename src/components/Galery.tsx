import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Mousewheel, Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

import Recepcao from '../assets/img/recepcao.jpg'
import Cirurgia from '../assets/img/sala_cirurgia.jpg'
import Espera from '../assets/img/sala_espera.jpg'


const Galery = () => {
  return (
    <div>
        <h1 className="text-5xl text-center py-4 mx-8">Estrutura</h1>
        <div className="swiper-container bg-white py-14 px-2 md:px-2 md:py-12">
        <Swiper effect="fade" speed={1500} spaceBetween={150} loop={true} navigation autoplay={{ delay: 3000}} pagination={{ clickable: true }} slidesPerView={1} onSlideChange={() => console.log('slide change')} modules={[Keyboard, Mousewheel, Pagination, Navigation, Autoplay, EffectCoverflow]}>
            <SwiperSlide>
                <div className="bg-white">
                    <img src={Recepcao} alt="" className="bg-white object-cover w-full" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white container relative">
                    <img src={Espera} alt="" className="object-cover w-max" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white container relative">
                    <img src={Cirurgia} alt="" />
                </div>
            </SwiperSlide>

        </Swiper>
    </div>


    </div>
  )
}

export default Galery