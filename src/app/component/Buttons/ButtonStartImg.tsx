'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'

const ButtonStartImgComponent = styled(Button,{
    name: 'ButtonStartImgComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));
interface ButtonProps{
    buttonProps: {
        name: string,
        action: string, 
        color: string,
        img: string,
    }
}

export default function ButtonStartImg(props: ButtonProps) {
    return (
        <ButtonStartImgComponent  href={props.buttonProps.action}>
            <Image src={props.buttonProps.img} alt="Logo" width={28} height={28} />
            {props.buttonProps.name}
        </ButtonStartImgComponent>
    );
}