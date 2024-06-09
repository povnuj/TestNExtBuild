'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";

const ButtonStartImgComponent = styled(Button,{
    name: 'ButtonStartImgComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));
interface ButtonProps{
    buttonProps: {
        name: string,
        url: string, 
        color: string,
        img: string,
    }
}

export default function ButtonStartImg(props: ButtonProps) {
    return (
        <Link href={props.buttonProps.url}>
            <ButtonStartImgComponent>
                <Image src={props.buttonProps.img} alt="sbtn_Logo" width={28} height={28} />
                {props.buttonProps.name}
            </ButtonStartImgComponent>
        </Link>
    );
}