'use client'
import { Colors } from "@/app/theme/colors";
import { AccountCircle, Padding, Search } from "@mui/icons-material";
import { Box, Container, FormControl, Input, InputAdornment, styled, alpha } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

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
        // '& .MuiInputBase-input': {
          //padding: theme.spacing(1, 1, 1, 0),
          //background: Colors.primary,
          // vertical padding + font size from searchIcon
         // paddingLeft: 10,
         // transition: theme.transitions.create('width'),
         // width: '100%',
        //   [theme.breakpoints.up('xl')]: {
        //     maxWidth: 325,
        //     height: 30,
        //   },
        // },
      }));
    return (
            <NavSearchComponent>    
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Пошук…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </NavSearchComponent>
    );
}