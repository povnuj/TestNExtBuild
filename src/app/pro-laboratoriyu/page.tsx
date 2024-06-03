'use client'
import { Typography, Container } from "@mui/material";
import { UiStates } from "@/context/Ui-States";
import { useContext } from "react";

export default function ProLaboratoriyuPage() {
    const uiContext = useContext(UiStates);
    console.log("ProLaboratoriyuPage","================================",uiContext.breakpoints);
    return (
        <Container maxWidth={uiContext.breakpoints}>
            <Typography variant="h2"> Pro Laboratoriyu</Typography>
        </Container>
    );
}