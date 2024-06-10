'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import SwitcherContainer from "../Buttons/Switchers/SwitcherContainer";
import ContainerComp from "./ContainerComp";
import MainServicesSwiper from "../Swiper/MainServicesSwiper";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { MainButtonTypes } from "@/Interfaces/Types";

const MainServicesComponent = styled(Box,{
    name: 'MainServicesComponent',
    slot: 'root',
})(({}) => ({
    
}));

export default function MainServicesContainer() {
  const buttons = useAppSelector((state) => state.mainPage.servicesSection.buttons)
  return (
    <MainServicesComponent>
      <ContainerComp>
        <SwitcherContainer buttons={buttons} contextSection={MainButtonTypes.IsServices} />
        <MainServicesSwiper />
      </ContainerComp>
    </MainServicesComponent>
  );
}