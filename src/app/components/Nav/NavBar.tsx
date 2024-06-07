'use client'
import { Box, Container, styled } from "@mui/material";
import NavMenu from "./NavMenu";
import BrandSection from "./BrandSection";
import NavSearch from "./NavSearch";
import ButtonStartImg from "../Buttons/ButtonStartImg";
import CartButton from "../Buttons/CartButton";
import { useContext, useState, useEffect } from "react";
import { UiStates } from "@/context/Ui-States";
import NavMobileMenu from "./NavMobileMenu";
import ContainerComp from "../Conatiners/ContainerComp";
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';

const NavBarComponent = styled(Box,{
    name: 'NavBarComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

export default function NavBar() {
    const uiContext = useContext(UiStates);
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
         noSsr: true, 
    };
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const renderDesctopMenu = (
        <ContainerComp>
          <Box display={'flex'} justifyContent={'space-between'} >
            <BrandSection contactss={uiContext.nav.contacts} />
            <Box display={'flex'} columnGap={'26px'} marginTop={'20px'}>
              <ButtonStartImg buttonProps={uiContext.nav.buttons} />
              <CartButton/>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}>
            <NavMenu buttonsName={uiContext.nav.menu}/>
            <NavSearch/>
          </Box>
        </ContainerComp>
    );

    const renderMobileMenu = (
        <>
          <ContainerComp>
            <BrandSection contactss={uiContext.nav.contacts} />
          </ContainerComp>    
          <Box>
            <NavMobileMenu buttonsName={uiContext.nav.menu}/>
          </Box>
        </>
    );

    return (
        <Box>
          <NavBarComponent>
            { isMobile ? renderMobileMenu : renderDesctopMenu }
          </NavBarComponent>
        </Box>
    );
}