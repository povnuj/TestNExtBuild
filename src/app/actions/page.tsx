'use client'
import { UiStates } from "@/context/Ui-States";
import { Typography, Container } from "@mui/material";
import { useContext } from "react";
import ContainerComp from "../component/Conatiners/ContainerComp";

export default function PromotionsPage() {
    // const uiContext = useContext(UiStates);
    return (
      <ContainerComp>
        <Typography variant="h1"> Actions</Typography>
      </ContainerComp>
    );
}