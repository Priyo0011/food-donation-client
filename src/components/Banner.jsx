// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/d.img3.jpg'
import bgimg2 from '../assets/images/d.img1.jpg'
import bgimg3 from '../assets/images/d.img2.jpg'

export default function Banner() {
  return (
    <div className='md:py-10 py-4'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Build a Beautiful World.  Charity organizations.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='We Are Be aHand.  We Are a Helping Hand.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Helping Hand.  We Build a Fundraising For Help Less People.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}