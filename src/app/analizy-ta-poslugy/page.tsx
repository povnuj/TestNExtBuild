'use client'
import { UiStates } from "@/context/Ui-States";
import { Typography, Container } from "@mui/material";
import { useContext } from "react";
import ContainerComp from "../components/Conatiners/ContainerComp";

export default function AnalizyTaPoslugyPage() {
    // const uiContext = useContext(UiStates);
    return (
      <ContainerComp>
        <Typography variant="h1"> AnalizyTaPoslugyPage</Typography>
      </ContainerComp>
    );
}