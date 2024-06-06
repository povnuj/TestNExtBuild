'use client'
import { Box, Menu, MenuItem, styled, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname, useRouter } from 'next/navigation'
import { Colors } from "@/app/theme/colors";
import NavSearch from "./NavSearch";
import CartButton from "../Buttons/CartButton";
import ContainerComp from "../Conatiners/ContainerComp";
import React from "react";

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
    const route = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
            <NavMobileMenuComponent display={'flex'} alignItems={'center'} >
              <ContainerComp>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'} }>
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
                </Box>
              </ContainerComp>  
            </NavMobileMenuComponent>
    );
}