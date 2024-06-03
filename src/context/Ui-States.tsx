'use client'
import React, { createContext, useReducer } from 'react';
import { UiStateInterface, ActionInterface, PropsProviderInterface } from '@/Interfaces/Interfces';
import { UiStatesType } from '@/Interfaces/Types';



const UiStates = createContext<UiStateInterface>({
    breakpoints: 'xl',
    setState: (newState) => {}
});

const UiStatesProvider: React.FC<PropsProviderInterface> = (props) =>{

    const setStateHandler = (state: UiStateInterface, action: ActionInterface) =>{
        switch (action.type) {
            
            case UiStatesType.setBreackpoint:
                return {
                    ...state,
                    breakpoints: action.newState,
                };
          
            default:
            return state;
        };

    
    };
    
    let initialState: UiStateInterface = {
        breakpoints: 'xl',
        setState: (type, newState) => {
            dispatch({type, newState});
        },
        
    };

    const [state, dispatch] = useReducer(setStateHandler, initialState)
    
     return(
        <UiStates.Provider value={state}>
            {props.children}
        </UiStates.Provider>
     );
 };


 export {
    UiStates,
    UiStatesProvider
}