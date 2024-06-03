'use client'
import { UiStates } from "@/context/Ui-States";
import { Typography, Container } from "@mui/material";
import { useContext } from "react";

export default function AnalizyTaPoslugyPage() {
    const uiContext = useContext(UiStates);
    return (
        <Container maxWidth={uiContext.breakpoints}>
            <Typography variant="h1"> Analizy Ta Poslugy</Typography>
        </Container>
    );
}