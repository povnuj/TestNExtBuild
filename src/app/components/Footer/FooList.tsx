'use client'
import { Box, Container, styled, Typography } from "@mui/material";
import ContainerComp from "../Conatiners/ContainerComp";
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";

const FooListComponent = styled(Box,{
    name: 'FooListComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

interface ListProps {
    data:{
      title: string;
      list: {
        id: string;
        name: string;
        url: string;
      }[];
     
    }
}


export default function FooList(props: ListProps) {
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
      noSsr: true, 
    };

    return (
      <FooListComponent>
        <Typography variant="title1" >{props.data.title}</Typography>
        <ul>
            {props.data.list.map((el, index) =>
            <li key={el.id}>
                <Link href={el.url}>{el.name}</Link>
            </li>
            )}
        </ul>


      </FooListComponent>
    );
}