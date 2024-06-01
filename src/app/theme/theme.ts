import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Colors } from "./colors";
import { Padding } from "@mui/icons-material";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', "900"],
    subsets: ['latin'],
    display: 'swap'
});

declare module '@mui/material/styles'{
    interface Components {
        NavBarComponent: {},
        NavMenuComponent: {},
        NavButtonComponent: {},
        BrandSectionComponent: {},
        NavSearchComponent: {},
        ButtonStartImgComponent: {},
        CartButtonComponent: {},
    }
}


export const theme = createTheme({ 
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
    },
    palette:{
        mode: 'light'
    },

    typography:{
        fontFamily: roboto.style.fontFamily,
    },

    components:{
        NavBarComponent: {
            styleOverrides: {
              root:{
                  with: "100%",
                  height: 250,
                  backgroundColor: Colors.primary
              }
            }
        },

        NavMenuComponent: {
          styleOverrides: {
            root:{
                with: "100%",
                maxWidth: 786,
                minWidth: 775,
                marginRight: 20,
                height: 40,
                backgroundColor: Colors.light,
                borderRadius: 20
            }
          }
        },
        
        NavButtonComponent:{
          styleOverrides: {
              root:{
                  height: 40,
                  padding: '0 20px',
                  backgroundColor: Colors.secondary,
                  borderRadius: 20,
                  fontSize: 20,
                  fontWeight: 400,
                  color: Colors.light,
                  textTransform: 'none',
                  '&:hover': {
                      backgroundColor: Colors.secondary,
                      color: Colors.light
                  }
              }
            }
        },

        BrandSectionComponent: {
            styleOverrides: {
              root:{
                with: "100%",
                maxHeight: 68,
                marginBottom: 38,
                marginTop: 4,
                fontSize: 16,
                color: Colors.grey,
                  //backgroundColor: Colors.primary
              }
            }
        },
        
        NavSearchComponent: {
            styleOverrides: {
              root:{
                  width: "100%",
                  maxWidth: 360,
                  height: 40,
                  backgroundColor: Colors.light,
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 5px',
                  columnGap: 10
              }
            }
        },
        ButtonStartImgComponent:{
            styleOverrides: {
                root:{
                    height: 40,
                    padding: '0 35px 0 5px',
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    fontSize: 20,
                    fontWeight: 500,
                    color: Colors.light,
                    textTransform: 'none',
                    '& img': {
                        marginRight: 9,
                        marginLeft: 5,
                    },
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },
        CartButtonComponent:{
            styleOverrides: {
                root:{
                    height: 40,
                    width: '100%',
                    maxWidth: '50px',
                    minWidth: 'auto',
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    color: Colors.light,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },
    },



}); 