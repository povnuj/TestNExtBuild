'use client'

import { Box, Button, Container, ListItem, styled } from "@mui/material";
import Image from 'next/image'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
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
            marginBottom: 30
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
                    <Image src="/assets/brand/Brand_Logo.svg" alt="Logo" width={301} height={68}  />
                </Link>
                <Box display={"flex"} flexDirection={"column"} justifyContent={'flex-end'} minWidth={140} alignItems={'flex-start'}>
                    <Button startIcon={<PlaceIcon/>}  variant="text" color="inherit" sx={{padding: 0, textTransform: 'none'}}>{props.contactss.location}</Button>
                    <Button startIcon={<PhoneIcon/>} href={"tel:"+props.contactss.phone}  variant="text" color="inherit" sx={{padding: 0}}>{props.contactss.phone}</Button>
                </Box>
            </BrandSectionComponent>
    );
}