'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './MainServicesSwiper.module.css'
import 'swiper/css/free-mode';
import Image from 'next/image';
import { useContext, useEffect, useRef , useState} from 'react';
import { Box, Typography } from '@mui/material';
// import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import SSliderContainer from '../Conatiners/ServicesContainers/SSliderContainer';
import SSliderPromotionContainer from '../Conatiners/ServicesContainers/SSliderPromotionContainer';

export default function MainServicesSwiper(){
  const swiperRef = useRef<any | null>(null);
  const theme = useTheme();
  const isPopular = useAppSelector((state) => state.mainPage!.servicesSection!.buttons.btn1.active);
  const allSlides = useAppSelector((state) => state.mainPage.servicesSection.slides);
  const promotoionSlides = useAppSelector((state) => state.mainPage.servicesSection.slides).filter(el => el.promotion);
  const slides =  isPopular ? allSlides : promotoionSlides;   

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
  
  const breakpoints = {
    100: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    [theme.breakpoints.values.xs]: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    500: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    740: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    [theme.breakpoints.values.sm]: {
      slidesPerView: 1.5,
      spaceBetween: 26
    },
    [theme.breakpoints.values.md]: {
      slidesPerView: 2,
      spaceBetween: 26
    },
    [theme.breakpoints.values.lg]: {
      slidesPerView: 2.5,
      spaceBetween: 26
    },
    [theme.breakpoints.values.xl]: {
      slidesPerView: 3,
      spaceBetween: 26
    }
  }

  return (
    <Box position={'relative'} >
      <Swiper
        className={css.main_services_swiper}
        spaceBetween={26}
        slidesPerView={3}
        // centeredSlides={true}
        ref={swiperRef}
        loop={true}
        observer={true}
        navigation={{
          nextEl: '.services_swiper-button-next',
          prevEl: '.services_swiper-button-prev'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        >
        
        { slides.map(slide => 
          <SwiperSlide  className={css.slide} key={slide.id}>
            {slide.promotion ? <SSliderPromotionContainer container={slide} /> 
                             : <SSliderContainer container={slide}/>
            }
          </SwiperSlide>
        )} 
        </Swiper>

        <div className={css["services_swiper-button-prev"]} onClick={handlePrev}>
          <Image src='/assets/ico/left_arrow.svg' alt="arrow" width={27} height={23} />  
        </div>
        <div className={css["services_swiper-button-next"]} onClick={handleNext}>
          <Image src='/assets/ico/right_arrow.svg' alt="arrow" width={27} height={23} />
        </div>
    </Box>
  );
};