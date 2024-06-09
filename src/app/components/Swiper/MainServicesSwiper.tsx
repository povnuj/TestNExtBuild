'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './MainServicesSwiper.module.css'
import 'swiper/css/free-mode';
import Image from 'next/image';
import { useContext, useEffect, useRef , useState} from 'react';
import { Box, Typography } from '@mui/material';
import { UiStates } from '@/context/Ui-States';
// import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { Colors } from '@/app/theme/colors';
import PriceButtonBlack from '../Buttons/PriceButtonBlack';
import PriceButtonGreen from '../Buttons/PriceButtonGreen';

export default function MainServicesSwiper(){
  const swiperRef = useRef<any | null>(null);
  const uiContext = useContext(UiStates);
  const theme = useTheme();
  const isPopular = useAppSelector((state) => state.mainPage!.servicesSection.buttons.btn1.active)
  const slides =  isPopular ? useAppSelector((state) => state.mainPage.servicesSection.popularSlides)
                            : useAppSelector((state) => state.mainPage.servicesSection.newSlides);   

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
        className={css.main_services_swiper}
        spaceBetween={26}
        slidesPerView={3}
        centeredSlides={true}
        ref={swiperRef}
        loop={true}
        navigation={{
          nextEl: '.services_swiper-button-next',
          prevEl: '.services_swiper-button-prev'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        >
        
        { slides.map(slide => 
          <SwiperSlide  className={css.slide} key={slide.title}>
            {slide.promotion ? <Image className={css.promotion} src={'/assets/ico/promotion.svg'} width={135} height={138} alt='promotion logo'/> : '' }
           <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'} justifyContent={slide.promotion ? 'flex-start' : 'space-between'} alignItems={'center'}>
                <Box sx={{padding: '6px 18px',marginRight: '15px', borderRadius: 29, background: Colors.lightGray, display: 'flex', alignItems: 'center'}}>
                  <Typography variant="servicesSliderText1">{slide.type}</Typography>
                </Box>
                <Typography variant="servicesSliderText1">{slide.code}</Typography>
              </Box>

              <Typography variant='SlidersTitle' marginTop={slide.promotion ? '39px' : '17px'}>{slide.title}</Typography>
              <Typography variant='servicesSliderText2' marginTop={'2px'}>{slide.description}</Typography>

              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={slide.promotion ? '27px' : '21px'}>
                <Typography variant="servicesSliderText1">{`Термін виконання: `}<span>{slide.dueDate}</span><br/>+забір біоматеріалу</Typography>
                {slide.promotion ? <PriceButtonGreen buttonProps = {{ price: slide.price, oldPrice: slide.oldPrice, url: '/'}}/>
                                 : <PriceButtonBlack buttonProps = {{ price: slide.price, url: '/'}}/>
                }
              </Box>
           </Box>
            
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