'use client'
import { Key, useContext, useEffect, useState} from "react";
import { UiStates } from "@/context/Ui-States";
import { UiStateInterface } from "@/Interfaces/Interfces";
import { UiStatesType } from "@/Interfaces/Types";

export default function BreakpointsWrapper({children}: Readonly<{children: React.ReactNode;}>) {
  const uiContext = useContext(UiStates);

  useEffect(() => {
    let size = 'xl';
    const handleResize = () => {
      if(window.matchMedia('(min-width: 1560px)').matches && size !== 'xl' ) {
        uiContext.setState!(UiStatesType.setBreackpoint, 'xl');
        size = 'xl';
      }
      if(window.matchMedia('(min-width: 1240px) and (max-width: 1559px)').matches && size !== 'lg') {
        uiContext.setState!(UiStatesType.setBreackpoint, 'lg');
        size = 'lg';
      }

      if(window.matchMedia('(min-width: 991px) and (max-width: 1239px)').matches && size !== 'md') {
        uiContext.setState!(UiStatesType.setBreackpoint, 'md');
        size = 'md';
      }

      if(window.matchMedia('(min-width: 575px) and (max-width: 990px)').matches &&  size !== 'sm') {
        uiContext.setState!(UiStatesType.setBreackpoint, 'sm');
        size = 'sm';
      }
      if(window.matchMedia('(max-width: 574px)').matches &&  size !== 'sx') {
        uiContext.setState!(UiStatesType.setBreackpoint, 'xs');
        size = 'xs';
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  //console.log(propss.ser);
  
  return (
      < >
        {children },
      </>
    );
};