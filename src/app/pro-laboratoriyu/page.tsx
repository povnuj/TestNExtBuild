'use client'
import { Typography, Container } from "@mui/material";
import { UiStates } from "@/context/Ui-States";
import { useContext } from "react";
import MainBannerSwiper from "../component/Swiper/MainBannerSwiper";
import GreenSquareButton from "../component/Buttons/GreenSquareButton";

export default function ProLaboratoriyuPage() {
    const uiContext = useContext(UiStates);
    console.log("ProLaboratoriyuPage","================================",uiContext.breakpoints);
    return (
        <Container maxWidth={uiContext.breakpoints}>
            <Typography variant="h2"> Pro Laboratoriyu</Typography>
            {/* <MainBannerSwiper />
          <GreenSquareButton />  */}
        </Container>
    );
}