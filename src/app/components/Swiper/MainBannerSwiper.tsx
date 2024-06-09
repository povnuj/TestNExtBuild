'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './MainBannerSwiper.module.css'
import Image from 'next/image';
import {useRef} from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import Link from 'next/link';

export default function MainBannerSwiper(){
  const swiperRef = useRef<any | null>(null);
  const theme = useTheme();
  const slides = useAppSelector((state) => state.mainPage.bannerSection.slides) ; 

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };


  return (
    <Box position={'relative'} >
      <Swiper
        className={css.main_baner_swiper}
        spaceBetween={0}
        centeredSlides={true}
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.promotions_swiper-button-next',
          prevEl: '.promotions_swiper-button-prev'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
        >
        { slides.map(slide => 
          <SwiperSlide key={slide.name}>
            <Link href={slide.url}>
              <Image 
              className={css.slider_img} 
              src={slide.img} 
              alt="Baner" 
              sizes={`(max-width: ${theme.breakpoints.values.md}px) 850px, (max-width: ${theme.breakpoints.values.lg}px) 1142px, 1598px`}
              width={1598} 
              height={550} />
            </Link>
          </SwiperSlide>
        )} 
        </Swiper>

        <div className={css["promotions_swiper-button-prev"]} onClick={handlePrev}>
          <Image src='/assets/ico/left_arrow.svg' alt="arrow" width={27} height={23} />  
        </div>
        <div className={css["promotions_swiper-button-next"]} onClick={handleNext}>
          <Image src='/assets/ico/right_arrow.svg' alt="arrow" width={27} height={23} />
        </div>
    </Box>
  );
};