import { Breakpoint } from "@mui/material";

export interface UiStateInterface {
    breakpoints: Breakpoint,
    nav: {
      menu:{
        name: string;
        url: string;
      }[];
      contacts:{
        location: string;
        locationUrl: string; 
        phone: string;
      };
      buttons:{
        name: string;
        url: string; 
        color: string;
        img: string;
      };
    };
    mainPage: {
      bannerSection: {
        slides:{
          name: string
          img: string,
          url: string
        }[],
        greenButtons: {
          name: string,
          img: string,
          url: string
        }[]
      },
      servicesSection: {
        buttons: {
          btn1: {name: string; active: boolean};
          btn2: {name: string; active: boolean};
        };
        popularSlides: {
          type: string;
          code: string;
          title: string;
          description: string;
          price: number;
          oldPrice: number;
          promotion: boolean;
          dueDate: string;
          url: string;
        }[];
        newSlides: {
          type: string;
          code: string;
          title: string;
          description: string;
          price: number;
          oldPrice: number;
          promotion: boolean;
          dueDate: string;
          url: string;
        }[];
      }
    },
    setState?: (type: string, newState: any ) => void;
};

export interface ActionInterface {
    type: string;
    newState: any;
};


export interface PropsProviderInterface {
    children: React.ReactNode;
};