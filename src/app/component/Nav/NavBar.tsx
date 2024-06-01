'use client'
import { Box, Container, styled } from "@mui/material";
import NavMenu from "./NavMenu";
import { theme } from "@/app/theme/theme";
import BrandSection from "./BrandSection";
import NavSearch from "./NavSearch";
import ButtonStartImg from "../Buttons/ButtonStartImg";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CartButton from "../Buttons/CartButton";
import next from "next";

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
    return (
        <Box>
            <NavBarComponent>
                <Container maxWidth='xl'>
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
            </NavBarComponent>
        </Box>
    );
}