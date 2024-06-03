import { Breakpoint } from "@mui/material";
export interface UiStateInterface {
    breakpoints: Breakpoint,
    setState?: (type: string, newState: any ) => void;
};

export interface ActionInterface {
    type: string;
    newState: any;
};


export interface PropsProviderInterface {
    children: React.ReactNode;
};