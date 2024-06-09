'use client'
import React, { createContext, useReducer } from 'react';
import { UiStateInterface, ActionInterface, PropsProviderInterface } from '@/Interfaces/Interfces';
import { UiStatesType } from '@/Interfaces/Types';

const UiStates = createContext<UiStateInterface>({
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
        locationUrl: 'https://maps.app.goo.gl/5fSx6WqqnQCRJqVH9', 
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
      },
      servicesSection: {
        slides: [{
          type: 'Пакетне дослідженя',
          code: 'Код дослідження №964',
          title: 'Краса та здоров\'я волосся',
          description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
          price: 1697,
          oldPrice: 1897,
          promotion: false,
          dueDate: 'сьогодні'
        }],
        buttons: {
          btn1: {name: 'Популярні', active: true},
          btn2: {name: 'Нові', active: false},
        },
      }
    },
    setState: (newState) => {}
});

const UiStatesProvider: React.FC<PropsProviderInterface> = (props) =>{

    const setStateHandler = (state: UiStateInterface, action: ActionInterface) =>{
      console.log("set")
        switch (action.type) {
            
            case UiStatesType.setBreackpoint:
                return {
                    ...state,
                    breakpoints: action.newState,
                };

            case UiStatesType.setMainBtnServicesState:
              console.log("uiContext")
              console.log(action.newState)
              state.mainPage.servicesSection.buttons.btn1.active = action.newState.btn1;
              state.mainPage.servicesSection.buttons.btn2.active = action.newState.btn2;
              return {
                  ...state,
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
            locationUrl: 'https://maps.app.goo.gl/5fSx6WqqnQCRJqVH9', 
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
            slides:[],
            greenButtons: []
          },
          servicesSection: {
            buttons: {
              btn1: {name: 'Популярні', active: true},
              btn2: {name: 'Нові', active: false},
            },
            slides: []
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