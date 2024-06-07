'use client'
import { useContext, useEffect, useState} from "react";
import { Box, Breakpoint, Container, Typography } from "@mui/material";
import { UiStates } from "@/context/Ui-States";
import { UiStatesType } from "@/Interfaces/Types";
import MainBannerSwiper from "./components/Swiper/MainBannerSwiper";
import ContainerComp from "./components/Conatiners/ContainerComp";
import ContainerGBtn from "./components/Conatiners/ContainerGBtn";


export default function Home() {
  //const uiContext = useContext(UiStates);

  return (
    <>
      <ContainerComp>
      <section>
        <MainBannerSwiper /> 
        <ContainerGBtn />
      </section>
      </ContainerComp>

    </>   
   
  );
}
