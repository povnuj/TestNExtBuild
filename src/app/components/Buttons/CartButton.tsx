'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import { useRouter } from "next/navigation";

const CartButtonComponent = styled(Button,{
    name: 'CartButtonComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    // width: '50px'
}));

export default function CartButton() {
    const route = useRouter();
    return (
        <CartButtonComponent onClick={() =>route.push('/cart')}>
            <Image src='/assets/ico/Cart.svg' alt="btn_logo" width={27} height={23} />
        </CartButtonComponent>
    );
}