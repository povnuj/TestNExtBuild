'use client'

import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, ListItem, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

const BrandSectionComponent = styled(Box,{
    
    name: 'BrandSectionComponent',
    slot: 'root',
})(({theme}) => ({
    //color: Colors.main,
    display: 'flex',
    columnGap: '105px',
    alignContent: "flex-end",
    [theme.breakpoints.between('xs', 'sm')]:{
        marginTop: 20,
        maxHeight: 140,
        flexDirection: 'column',
        '& div': {
            marginTop: 20,
            marginBottom: 30,
        },


    }
    
    

}));
interface NavContact {
    contactss: {
        location: string,
        phone: string
    }
    
}

export default function BrandSection(props: NavContact) {

    return (
            <BrandSectionComponent>
                <Link href='/'>
                  <Image src={'/assets/brand/Brand_Logo.svg'} alt="Logo" width={301} height={68}  />
                </Link>
                <Box display={"flex"} flexDirection={"column"} justifyContent={'flex-end'} minWidth={140} alignItems={'flex-start'}>
                  <Link href='/' style={{textDecoration: 'none', color: Colors.grey}}>
                    <Image src='/assets/ico/location2.svg' alt="Logo" width={8} height={11} style={{marginRight: 8}} />
                    {props.contactss.location}</Link>
                  <Link href={"tel:"+props.contactss.phone} style={{textDecoration: 'none', color: Colors.grey, marginTop: 4}}>
                    <Image src='/assets/ico/phone2.svg' alt="Logo" width={11} height={11} style={{marginRight: 8}} />
                    {props.contactss.phone}
                  </Link>
                </Box>
            </BrandSectionComponent>
    );
}