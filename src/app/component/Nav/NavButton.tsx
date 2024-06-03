'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import { useRouter } from 'next/navigation'

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
    const route = useRouter();
    return (
        <NavButtonComponent  onClick={() =>route.push(props.pageName.url)}  sx={
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