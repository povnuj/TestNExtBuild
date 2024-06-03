'use client'
import React,{useContext, useState} from "react";
import { Badge, Box, Container, IconButton, Menu, MenuItem, styled, alpha, Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from '@mui/material/InputBase';
import NavButton from "./NavButton";
import { usePathname, useRouter } from 'next/navigation'
import { UiStates } from "@/context/Ui-States";
import { AccountCircle, Height } from "@mui/icons-material";
import { Colors } from "@/app/theme/colors";
import NavSearch from "./NavSearch";
import CartButton from "../Buttons/CartButton";

const NavMobileMenuComponent = styled(Box,{
    name: 'NavMobileMenuComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    '& button': {
      height: 50
    },
    '& svg': {
      with: 30,
      color: Colors.light,
    }
}));
interface Buttons{
  buttonsName: 
      {
      name: string;
      url: string;
  }[];
}


export default function NavMobileMenu(props: Buttons) {
    const path = usePathname();
    const route = useRouter();
    const uiContext = useContext(UiStates);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

     ///set active by routeName
    return (
            <NavMobileMenuComponent display={'flex'} alignItems={'center'}>
              <Container maxWidth={uiContext.breakpoints} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'} }>
                <Box>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {props.buttonsName.map((el, index) =>
                      <MenuItem key={el.name} onClick={()=>{route.push(el.url); handleClose()}}>{el.name}</MenuItem>
                    )}
                  </Menu>
                </Box>
                <NavSearch />
                <Box display={'flex'} marginLeft={'10px'}>
                  <CartButton />
                  <CartButton />
                </Box>
              </Container>   
            </NavMobileMenuComponent>
    );
}