'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";

const NavButtonComponent = styled(Button,{
    name: 'NavButtonComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));
interface NavButtonName{
    pageName: {
        name: string,
        active: boolean
        url: string,
    }
}

export default function NavButton(props: NavButtonName) {
    return (
        <NavButtonComponent href={props.pageName.url} sx={
            !props.pageName.active?{
                background: 'transparent', 
                color: Colors.dark, 
                '&:hover':{background: 'transparent', 
                color: Colors.dark
            }}:{}}
        >
            {props.pageName.name}
        </NavButtonComponent>
    );
}