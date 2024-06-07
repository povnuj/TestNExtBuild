'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Container, FormControl, Input, InputAdornment, styled, alpha } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import Image from "next/image";

const NavSearchComponent = styled(Box, {
    name: 'NavSearchComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));



export default function NavSearch() {

      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        borderRadius: 20,
        background: Colors.primary,
        width: 30,
        height: 30,
        '& svg':{
          maxHeight: 18
        },
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        maxWidth: 325,
        '& input': {
            background: Colors.primary,
            borderRadius: 20,
            padding: '0 15px',
            height: 30,
        },
      }));
    return (
            <NavSearchComponent>    
              <SearchIconWrapper>
                <Image src='/assets/ico/search.svg' alt="Logo" width={18} height={18} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Пошук…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </NavSearchComponent>
    );
}