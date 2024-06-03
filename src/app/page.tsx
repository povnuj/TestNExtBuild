'use client'
import { useContext, useEffect, useState} from "react";
import { Breakpoint, Container, Typography } from "@mui/material";
import { UiStates } from "@/context/Ui-States";
import { UiStatesType } from "@/Interfaces/Types";
import MainBannerSwiper from "./component/Swiper/MainBannerSwiper";


export default function Home() {

  const uiContext = useContext(UiStates);
  
// console.log("home","================================",uiContext.breakpoints);

  return (
    <Container maxWidth={uiContext.breakpoints}>
      <MainBannerSwiper />
      {/* <Typography variant="h1">Home page</Typography> */}
    </Container>
  );
}
