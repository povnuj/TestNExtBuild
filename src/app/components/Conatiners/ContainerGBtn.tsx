'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import GreenSquareButton from "../Buttons/GreenSquareButton";
import { useContext } from "react";
import { UiStates } from "@/context/Ui-States";
import { useAppSelector, useAppDispatch } from '@/store/hooks'

const ContainerGBtnComponent = styled(Box,{
    name: 'ContainerGBtnComponent',
    slot: 'root',
})(({}) => ({
    
}));

export default function ContainerGBtn() {
  const uiContext = useContext(UiStates);
  const buttons = useAppSelector((state) => state.mainPage.bannerSection.greenButtons)

  return (
    <ContainerGBtnComponent>
      { buttons.map(el =>
        <GreenSquareButton key={el.name} buttonProps={el}  /> 
      )}
    </ContainerGBtnComponent>
  );
}