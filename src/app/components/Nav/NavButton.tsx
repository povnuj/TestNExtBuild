'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Link from "next/link";
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
    // onClick={() =>route.push(props.pageName.url)}
    return (
        <Link href={props.pageName.url}>
          <NavButtonComponent  sx={
              !props.pageName.active?{
                  background: 'transparent', 
                  color: Colors.dark, 
                  '&:hover':{background: 'transparent', 
                  color: Colors.dark
              }}:{}}
          >
              {props.pageName.name}
          </NavButtonComponent>
        </Link>
    );
}