'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartButtonComponent = styled(Button,{
    name: 'CartButtonComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    // width: '50px'
}));

export default function CartButton() {
    return (
        <Link href={'/cart'}>
            <CartButtonComponent >
                <Image src='/assets/ico/Cart.svg' alt="btn_logo" width={27} height={23} />
            </CartButtonComponent>
        </Link>
    );
}