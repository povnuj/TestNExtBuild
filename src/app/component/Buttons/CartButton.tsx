'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'

const CartButtonComponent = styled(Button,{
    name: 'CartButtonComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    // width: '50px'
}));

export default function CartButton() {
    return (
        <CartButtonComponent  href='/cart'>
            <Image src='/assets/ico/Cart.svg' alt="Logo" width={27} height={23} />
        </CartButtonComponent>
    );
}