'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { Colors } from "@/app/theme/colors";
import PriceButtonBlack from "../../Buttons/PriceButtonBlack";

const SSliderContainerComponent = styled(Box,{
    name: 'SSliderContainerComponent',
    slot: 'root',
})(({}) => ({
    
}));

interface ContainerSSliderProps {
  container: {
      type: string;
      code: string;
      title: string;
      description: string;
      dueDate: string;
      price: number;
      url: string;
  }
}

export default function SSliderContainer(props: ContainerSSliderProps) {
  const buttons = useAppSelector((state) => state.mainPage!.bannerSection.greenButtons)

  return (
    <SSliderContainerComponent>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Box sx={{padding: '6px 18px', marginRight: '15px', borderRadius: 29, background: Colors.lightGray, display: 'flex', alignItems: 'center', textAlign: 'center'}}>
          <Typography variant="servicesSliderText1">{props.container.type}</Typography>
        </Box>
        <Typography variant="servicesSliderText1">{props.container.code}</Typography>
      </Box>

      <Typography variant='title1' marginTop={'17px'}>{props.container.title}</Typography>
      <Typography variant='servicesSliderText2' marginTop={'2px'}>{props.container.description}</Typography>

      <Box className={'s_btn_cont'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={'21px'}>
        <Typography className={'s_btn_due_date'} variant="servicesSliderText1">{`Термін виконання: `}<span>{props.container.dueDate}</span><br/>+забір біоматеріалу</Typography>
        <PriceButtonBlack buttonProps = {{ price: props.container.price, url: props.container.url}}/>
      </Box>
  
    </SSliderContainerComponent>
  );
}