'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { Colors } from "@/app/theme/colors";
import TransperedGreenButton from "../../Buttons/TransperedGreenButton";

const ASliderContainerComponent = styled(Box,{
    name: 'ASliderContainerComponent',
    slot: 'root',
})(({}) => ({
    
}));

interface ContainerASliderProps {
  container: {
      title: string;
      description: string;
      url: string;
  }
}

export default function ASliderContainer(props: ContainerASliderProps) {
  // const buttons = useAppSelector((state) => state.mainPage!.bannerSection.greenButtons)

  return (
    <ASliderContainerComponent>
      <Typography variant='h3' marginBottom={'18px'} textTransform={'uppercase'}>{props.container.title}</Typography>
      <Typography variant='servicesSliderText2' color={Colors.dark} >{props.container.description}</Typography>
      <TransperedGreenButton buttonProps={{name: 'детальніше'}} />
   
    </ASliderContainerComponent>
  );
}