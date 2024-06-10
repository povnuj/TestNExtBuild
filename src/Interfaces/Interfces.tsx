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
    footer:{
      about:{
        title: string;
        list: {
          id: string;
          name: string;
          url: string;
        }[];
      };
      patient:{
        title: string;
        list: {
          id: string;
          name: string;
          url: string;
        }[];
      };
      сooperation:{
        title: string;
        list: {
          id: string;
          name: string;
          url: string;
        }[];
      };
      contscts:{
        phones: {
          name: string;
          tel1: string;
          tel2: string;
          tel3: string;
        };
        social: {
          name: string;
          instagram: string;
          facebook: string;
          gmap: string;
          viber: string;
          telegram: string;
        };
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
        slides: {
          id: string;
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

      };
        articleSection:{
          buttons: {
            btn1: {name: string; active: boolean};
            btn2: {name: string; active: boolean};
          };
          slides: {
            id: string;
            title: string;
            description: string;
            isNew: boolean;
            url: string;
          }[];
        };
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