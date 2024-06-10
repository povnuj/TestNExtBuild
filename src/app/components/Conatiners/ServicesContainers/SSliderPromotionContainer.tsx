'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { Colors } from "@/app/theme/colors";
import PriceButtonGreen from "../../Buttons/PriceButtonGreen";

const SSliderPromotionContComp = styled(Box,{
    name: 'SSliderPromotionContComp',
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
      oldPrice: number;
      url: string;
  }
}

export default function SSliderPromotionContainer(props: ContainerSSliderProps) {
  const buttons = useAppSelector((state) => state.mainPage!.bannerSection.greenButtons)

  return (
    <SSliderPromotionContComp>
      <Image style={{position: 'absolute', right: '0', top: '0'}} src={'/assets/ico/promotion.svg'} width={135} height={138} alt='promotion logo'/>
      <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
        <Box sx={{padding: '6px 18px', marginRight: '15px', borderRadius: 29, background: Colors.lightGray, display: 'flex', alignItems: 'center', textAlign: 'center'}}>
          <Typography variant="servicesSliderText1">{props.container.type}</Typography>
        </Box>
        <Typography variant="servicesSliderText1">{props.container.code}</Typography>
      </Box>

      <Typography variant='title1' marginTop={'39px'}>{props.container.title}</Typography>
      <Typography variant='servicesSliderText2' marginTop={'2px'}>{props.container.description}</Typography>

      <Box className={'s_btn_cont'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={'27px'}>
        <Typography  className={'s_btn_due_date'} variant="servicesSliderText1">{`Термін виконання: `}<span>{props.container.dueDate}</span><br/>+забір біоматеріалу</Typography>
        <PriceButtonGreen buttonProps={props.container} />
      </Box>
    </SSliderPromotionContComp>
  );
}