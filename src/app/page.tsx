'use client'
import { useContext } from "react";
import { Container, Typography } from "@mui/material";
import { UiStates } from "@/context/Ui-States";

export default function Home() {
  const uiContext = useContext(UiStates);
  console.log(uiContext.beakpoints);
  return (
    <Container maxWidth='xl'>
      <Typography variant="h1">Home page</Typography>
    </Container>
  );
}
