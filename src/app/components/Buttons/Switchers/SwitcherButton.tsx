'use client'
import { Colors } from "@/app/theme/colors";
import { UiStateInterface } from "@/Interfaces/Interfces";
import { MainButtonTypes, UiStatesType } from "@/Interfaces/Types";
import { Box, Button, Container, styled } from "@mui/material";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { serviceBtn, articleBtn} from "@/store/mainPageStore";

const SwitcherButtonComponent = styled(Button,{
    name: 'SwitcherButtonComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
}));
interface BtnProps {
    button: {
        btn1?: UiStateInterface['mainPage']['servicesSection']['buttons']['btn1'];
        btn2?: UiStateInterface['mainPage']['servicesSection']['buttons']['btn2'];
        type: MainButtonTypes;
    }
}

export default function SwitcherButton(props: BtnProps) {
    const dispatch = useAppDispatch();
    //dispatch()
    //const buttons = useAppSelector((state) => state.mainP)
    const clicHandler = () => {
        if(!(props.button.btn1?.active || props.button.btn2?.active) && props.button.type === MainButtonTypes.IsServices)dispatch(serviceBtn());
        if(!(props.button.btn1?.active || props.button.btn2?.active) && props.button.type === MainButtonTypes.IsArticles)dispatch(articleBtn());
            //// reducer

    };

    return (
        <SwitcherButtonComponent onClick={clicHandler} sx={
            props.button.btn1?.active === false || props.button.btn2?.active === false?{
                background: 'transparent', 
                color: Colors.secondary, 
                '&:hover':{background: 'transparent', 
                color: Colors.secondary
            }}:{}}
        >
            {props.button.btn1?.name || props.button.btn2?.name}
        </SwitcherButtonComponent>
    );
}