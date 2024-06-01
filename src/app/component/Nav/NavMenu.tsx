'use client'
import React,{useState} from "react";
import { Box, Container, styled } from "@mui/material";
import NavButton from "./NavButton";
import { usePathname } from 'next/navigation'

const NavMenuComponent = styled(Box,{
    name: 'NavMenuComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));
interface Buttons{
    buttonsName: 
        {
        name: string;
        url: string;
    }[];
}


export default function NavMenu(props: Buttons) {
    const path = usePathname();
     ///set active by routeName
    return (
            <NavMenuComponent>                                         
                {props.buttonsName.map((el, index) => <NavButton key={el.name} pageName={ { name: el.name, url: el.url, active: path === el.url? true : false } }/>)} 
            </NavMenuComponent>
    );
}