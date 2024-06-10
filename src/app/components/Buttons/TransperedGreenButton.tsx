'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";

const TransperedGreenButtonComponent = styled(Button,{
    name: 'TransperedGreenButtonComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    // width: '50px'
}));

interface ButtonProps{
    buttonProps: {
       name: string;
    }
}

export default function TransperedGreenButton(props: ButtonProps) {
    return (
        <Link href={'/cart'}style={{textDecoration: 'none'}}>
            <TransperedGreenButtonComponent >
                {props.buttonProps.name}
            </TransperedGreenButtonComponent>
        </Link>
    );
}