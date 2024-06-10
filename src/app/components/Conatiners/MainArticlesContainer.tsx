'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import SwitcherContainer from "../Buttons/Switchers/SwitcherContainer";
import ContainerComp from "./ContainerComp";
import { MainButtonTypes } from "@/Interfaces/Types";
import MainArticlesSwiper from "../Swiper/MainArticlesSwiper";

const MainArticlesComponent = styled(Box,{
    name: 'MainArticlesComponent',
    slot: 'root',
})(({}) => ({
    
}));

export default function MainArticlesContainer() {
  const buttons = useAppSelector((state) => state.mainPage.articleSection.buttons)
  return (
    <MainArticlesComponent>
        <ContainerComp>
          <SwitcherContainer buttons={buttons} contextSection={MainButtonTypes.IsArticles} /> 
          <MainArticlesSwiper />
        </ContainerComp>
    </MainArticlesComponent>
  );
}