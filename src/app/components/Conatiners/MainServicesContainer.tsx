'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import SwitcherContainer from "../Buttons/Switchers/SwitcherContainer";
import ContainerComp from "./ContainerComp";
import MainServicesSwiper from "../Swiper/MainServicesSwiper";
import { useAppSelector, useAppDispatch } from '@/store/hooks'

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
        <SwitcherContainer buttons={buttons} contextSrction='servicesSection' />
        <MainServicesSwiper />
      </ContainerComp>
    </MainServicesComponent>
  );
}