export interface UiStateInterface {
    beakpoints: string,
    setState?: (type: string, newState: any ) => void;
};

export interface ActionInterface {
    type: string;
    newState: any;
};


export interface PropsProviderInterface {
    children: React.ReactNode;
};