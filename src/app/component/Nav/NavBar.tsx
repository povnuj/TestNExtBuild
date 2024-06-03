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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{

        if(uiContext.breakpoints === 'xs' || uiContext.breakpoints === 'sm') setIsMobile(true);
        else setIsMobile(false);

    },[uiContext.breakpoints]);

    const dummyDate = [
        {name: "Про лабораторію", url: "/pro-laboratoriyu"}, 
        {name: "Аналізи та послуги", url: "/analizy-ta-poslugy"}, 
        {name: "Акції", url: "/actions"}, 
        {name: "Співпраця", url: "/Cooperation"},
        {name: "Контакти", url: "/kontakty"}
    ];
    const conatctsData = {
        location: 'Чорновола, 97',
        phone: '+380 67 200 5457'
    }
    const BtnProps = {
        name: "Кабінет",
        action: '/login', 
        color: '',
        img: '/assets/ico/Login.svg',
    }

    const renderDesctopMenu = (
        <Container maxWidth={uiContext.breakpoints}>

            <Box display={'flex'} justifyContent={'space-between'} >
                <BrandSection contactss={conatctsData} />
                <Box display={'flex'} columnGap={'26px'} marginTop={'20px'}>
                    <ButtonStartImg buttonProps={BtnProps} />
                    <CartButton/>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
              <NavMenu buttonsName={dummyDate}/>
              <NavSearch/>
            </Box>
        </Container>
    );

    const renderMobileMenu = (
        <>
          <Container maxWidth={uiContext.breakpoints}>
            <BrandSection contactss={conatctsData} />
          </Container>    
          <Box>
            <NavMobileMenu buttonsName={dummyDate}/>
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