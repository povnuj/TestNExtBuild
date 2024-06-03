'use client'
import { useContext, useEffect, useState} from "react";
import { Box, Breakpoint, Container, Typography } from "@mui/material";
import { UiStates } from "@/context/Ui-States";
import { UiStatesType } from "@/Interfaces/Types";
import MainBannerSwiper from "./component/Swiper/MainBannerSwiper";
import GreenSquareButton from "./component/Buttons/GreenSquareButton";


export default function Home() {
  const uiContext = useContext(UiStates);
  const ListButtons = [
    {text: "Отримати результати", url: '/', img: '/assets/ico/results.svg'},
    {text: "Програма лояльності", url: '/', img: '/assets/ico/results.svg'},
    {text: "Акції", url: '/', img: '/assets/ico/results.svg'},
    {text: "Виїзд на дім", url: '/', img: '/assets/ico/results.svg'},
    {text: "Аналізи дітям", url: '/', img: '/assets/ico/results.svg'},
  ]
  

  return (
    <>
        <Container maxWidth={uiContext.breakpoints}>
          <MainBannerSwiper /> 
          <Box display={'flex'} justifyContent={'space-between'} padding={'50px 0 83px 0'}>
            { ListButtons.map(el =>
              <GreenSquareButton key={el.text} buttonProps={el}/> 
            )}
          </Box>
        </Container>
    </>   
   
  );
}
