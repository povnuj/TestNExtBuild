'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";
// import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
// import { useTheme } from '@mui/material/styles';

const GreenSquareButtonComponent = styled(Button,{
    name: 'GreenSquareButtonComponent',
    slot: 'root',
})(({}) => ({


}));

interface ButtonProps{
    buttonProps:{
        name: string,
        url: string, 
        img: string,
    }
}

export default function GreenSquareButton(props: ButtonProps) {
    
    return (
        <Link href={props.buttonProps.url}>
            <GreenSquareButtonComponent>
                <Typography  display={'flex'} width={'100%'} justifyContent={'flex-start'} textAlign={'start'} padding={'20px 30px 0 30px'} variant="buttonGreenText">{props.buttonProps.name}</Typography>
                <Box width={'100%'} height={'auto'} display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    <Image src={props.buttonProps.img} alt="ico" width={120} height={150} />
                </Box>
            </GreenSquareButtonComponent>
        </Link>
    );
}