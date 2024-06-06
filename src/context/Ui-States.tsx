'use client'
import React, { createContext, useReducer } from 'react';
import { UiStateInterface, ActionInterface, PropsProviderInterface } from '@/Interfaces/Interfces';
import { UiStatesType } from '@/Interfaces/Types';

const UiStates = createContext<UiStateInterface>({
    breakpoints: 'xl',
    nav: {
        menu:[{
          name: '',
          url: '',
        }],
        contacts:{
          location: '',
          phone: '',
        },
        buttons:{
          name: '',
          url: '', 
          color: '',
          img: '',
        }
    },
    mainPage: {
        bannerSection: {
            slides:[{
              name: '',
              img: '',
              url: ''
            }],
            greenButtons: [{
              name: '',
              img: '',
              url: ''
            }]
          }
    },
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
        nav: {
          menu:[
            {name: "Про лабораторію", url: "/pro-laboratoriyu"}, 
            {name: "Аналізи та послуги", url: "/analizy-ta-poslugy"}, 
            {name: "Акції", url: "/actions"}, 
            {name: "Співпраця", url: "/Cooperation"},
            {name: "Контакти", url: "/kontakty"}
          ],
          contacts:{
            location: 'Чорновола, 97',
            phone: '+380 67 200 5457'
          },
          buttons:{
            name: "Кабінет",
            url: '/login', 
            color: '',
            img: '/assets/ico/Login.svg',
          }
        },
        mainPage: {
          bannerSection: {
            slides:[
                {name: 'Slide_1', img: '/assets/baners/apysu.png', url: '/conatcts'},
                {name: 'Slide_2', img: '/assets/baners/apysu.png', url: '/conatcts'},
                {name: 'Slide_3', img: '/assets/baners/apysu.png', url: '/conatcts'}
            ],
            greenButtons: [
                {name: "Отримати результати", url: '/', img: '/assets/ico/results.svg'},
                {name: "Програма лояльності", url: '/', img: '/assets/ico/results.svg'},
                {name: "Акції", url: '/actions', img: '/assets/ico/results.svg'},
                {name: "Виїзд на дім", url: '/', img: '/assets/ico/results.svg'},
                {name: "Аналізи дітям", url: '/', img: '/assets/ico/results.svg'},
            ]
          }
        },
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