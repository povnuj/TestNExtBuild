'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import GreenSquareButton from "../Buttons/GreenSquareButton";
import { useContext } from "react";
import { UiStates } from "@/context/Ui-States";

const ContainerGBtnComponent = styled(Box,{
    name: 'ContainerGBtnComponent',
    slot: 'root',
})(({}) => ({
    
}));



export default function ContainerGBtn() {
  const uiContext = useContext(UiStates);
    const route = useRouter();

    console.log(uiContext.mainPage.bannerSection)
    return (
      <ContainerGBtnComponent>
        { uiContext.mainPage.bannerSection.greenButtons.map(el =>
          <GreenSquareButton key={el.name} buttonProps={el}  /> 
        )}
      </ContainerGBtnComponent>
    );
}