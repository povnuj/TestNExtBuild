'use client'
import React,{Key, useContext, useState} from "react";
import { Box, Container, styled } from "@mui/material";
import { usePathname } from 'next/navigation'
import SwitcherButton from "./SwitcherButton";
import { UiStateInterface } from "@/Interfaces/Interfces";
import { MainButtonTypes } from "@/Interfaces/Types";

const SwitcherContainerComponent = styled(Box,{
    name: 'SwitcherContainerComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));



interface Buttons{
    // key:  keyof UiStateInterface['mainPage'];
    buttons: UiStateInterface['mainPage']['servicesSection']['buttons'];
    contextSrction: string;
    
};
    
    export default function SwitcherContainer(props: Buttons) {


    return (
            <SwitcherContainerComponent>   
                <SwitcherButton button={{type: MainButtonTypes.IsServices, btn1: props.buttons.btn1}} />
                <SwitcherButton button={{type: MainButtonTypes.IsServices, btn2: props.buttons.btn2}} />                                       
            </SwitcherContainerComponent>
    );
}