'use client'

import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, ListItem, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

const PhoneButtonComponent = styled(Button,{
    
    name: 'PhoneButtonComponent',
    slot: 'root',
})(({theme}) => ({
    //color: Colors.main,

}));
interface btnProps {
    button:{
      name: string,
      url: string,
      img: string,
    }
}

export default function PhoneButton(props: btnProps) {

    return (
      <Link href={props.button.url} style={{textDecoration: 'none', color: Colors.grey}}>
        <PhoneButtonComponent>
          {props.button.img? <Image src={props.button.img} alt="Button Logo" width={11} height={11} /> : ''}
          {props.button.name}
        </PhoneButtonComponent>
      </Link>
    );
}