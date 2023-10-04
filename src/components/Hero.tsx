import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Mousewheel, Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

import Phisician1 from '../assets/img/medico1.jpg'
import Woman1 from '../assets/img/mulher1.jpg'
import Family1 from '../assets/img/familia1.jpg'


const Hero = () => {
  return (
    <div className="swiper-container bg-white pt-24 pb-8 px-2 md:px-2 md:py-12 w-full">
        <Swiper effect="fade" speed={1500} spaceBetween={800} loop={true} navigation autoplay={{ delay: 3000}} pagination={{ clickable: true }} slidesPerView={1} modules={[Keyboard, Mousewheel, Pagination, Navigation, Autoplay, EffectCoverflow]}>
            <SwiperSlide>
                <div className="bg-white relative">
                    <img src={Phisician1} alt="" className="absolute top-0 left-0 object-cover" />
                    <div className="top-36 left-4 md:left-14 absolute z-10 bg-opacity-20 bg-gray-500 text-white p-4 rounded-xl text-xl md:text-5xl">
                        <p>Cuide de Você</p>
                    </div>                
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white relative">
                    <img src={Woman1} alt=""  className="absolute top-0 left-0 object-cover"/>
                    <div className="top-36 right-4 md:left-18 md:top-80 absolute z-10 bg-opacity-50 bg-green-800 text-white p-4 rounded-xl text-xl md:text-6xl">
                        <p>Viva com qualidade</p>
                    </div>  

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white relative">
                    <img src={Family1} alt="" className="abolute top-0 object-cover" />
                    <div className="top-36 right-4 left-4  md:top-96md:left-14 absolute z-10 bg-opacity-20 bg-gray-500 text-white p-4 rounded-xl text-xl md:text-5xl grid justify-items-end md:place-content-end">
                        <p>Família é aqui</p>
                    </div>   
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Hero