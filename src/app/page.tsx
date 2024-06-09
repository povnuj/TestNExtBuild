'use client'
import { useContext, useEffect, useState} from "react";
import { Box, Breakpoint, Container, Typography } from "@mui/material";
import { UiStates } from "@/context/Ui-States";
import { UiStatesType } from "@/Interfaces/Types";
import MainBannerSwiper from "./components/Swiper/MainBannerSwiper";
import ContainerComp from "./components/Conatiners/ContainerComp";
import ContainerGBtn from "./components/Conatiners/ContainerGBtn";
import SwitcherContainer from "./components/Buttons/Switchers/SwitcherContainer";
import MainServicesContainer from "./components/Conatiners/MainServicesContainer";
import { useAppSelector, useAppDispatch } from '@/store/hooks'

export default function Home() {
  // const uiContext = useContext(UiStates);
  // uiContext.setState!(UiStatesType.setMainBtnServicesState, {btn1: false, btn2: true});
  const nav = useAppSelector((state) => state.mainPage)
  return (
    <>
      <ContainerComp>
        <MainBannerSwiper /> 
        <ContainerGBtn />
      </ContainerComp>
      <MainServicesContainer />

    </>   
   
  );
}
