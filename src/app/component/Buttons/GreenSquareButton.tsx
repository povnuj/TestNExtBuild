'use client'
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";

const GreenSquareButtonComponent = styled(Button,{
    name: 'GreenSquareButtonComponent',
    slot: 'root',
})(({}) => ({
    
}));

interface ButtonProps{
    buttonProps:{
        text: string,
        url: string, 
        img: string,
    }
}

export default function GreenSquareButton(props: ButtonProps) {
    const route = useRouter();
    
    return (
        <GreenSquareButtonComponent onClick={() =>route.push(props.buttonProps.url)}>
            <Typography  display={'flex'} width={'100%'} justifyContent={'flex-start'} textAlign={'start'} padding={'20px 30px 0 30px'} variant="buttonGreenText">{props.buttonProps.text}</Typography>
            <Box width={'100%'} height={'auto'} display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                <Image src={props.buttonProps.img} alt="Logo" width={120} height={150} />
            </Box>
        </GreenSquareButtonComponent>
    );
}