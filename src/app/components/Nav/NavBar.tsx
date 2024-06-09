'use client'
import { Box, Container, styled } from "@mui/material";
import NavMenu from "./NavMenu";
import BrandSection from "./BrandSection";
import NavSearch from "./NavSearch";
import ButtonStartImg from "../Buttons/ButtonStartImg";
import CartButton from "../Buttons/CartButton";
import NavMobileMenu from "./NavMobileMenu";
import ContainerComp from "../Conatiners/ContainerComp";
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '@/store/hooks'

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
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
      noSsr: true, 
    };
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const nav = useAppSelector((state) => state.nav)


    const renderDesctopMenu = (
        <ContainerComp>
          <Box display={'flex'} justifyContent={'space-between'} >
            <BrandSection contactss={nav.contacts} />
            <Box display={'flex'} columnGap={'26px'} marginTop={'20px'}>
              <ButtonStartImg buttonProps={nav.buttons} />
              <CartButton/>
            </Box>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}>
            <NavMenu buttonsName={nav.menu}/>
            <NavSearch/>
          </Box>
        </ContainerComp>
    );

    const renderMobileMenu = (
        <>
          <ContainerComp>
            <BrandSection contactss={nav.contacts} />
          </ContainerComp>    
          <Box>
            <NavMobileMenu buttonsName={nav.menu}/>
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