import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Colors } from "./colors";
import { Height, Padding } from "@mui/icons-material";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', "900"],
    subsets: ['latin'],
    display: 'swap'
});
declare module '@mui/material/styles' {
    interface TypographyVariants {
        buttonGreenText: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
        buttonGreenText?: React.CSSProperties;
    }
  }
  
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    buttonGreenText: true;
  }
}

declare module '@mui/material/styles'{
    interface Components {
        NavBarComponent: {},
        NavMenuComponent: {},
        NavButtonComponent: {},
        BrandSectionComponent: {},
        NavSearchComponent: {},
        ButtonStartImgComponent: {},
        CartButtonComponent: {},
        NavMobileMenuComponent: {},
        GreenSquareButtonComponent: {},
    }
}


export const theme = createTheme({ 
    breakpoints: {
        values: {
          xs: 350,
          sm: 900,
          md: 1000,
          lg: 1200,
          xl: 1536,
        },
    },
    palette:{
        mode: 'light'
    },

    typography:{
        fontFamily: roboto.style.fontFamily,
   
        buttonGreenText:{
            fontSize: 27,
            fontWeight: 500,
            lineHeight: '32px',
            color: Colors.light,
            textTransform: 'none',
            [createTheme().breakpoints.only('xl')]: {
                // fontSize: 27,
                // lineHeight: '32px',
            },
            [createTheme().breakpoints.only('lg')]: {
                fontSize: 20,
                lineHeight: '20px',
            },
            [createTheme().breakpoints.between('xs' , "lg")]: {
                fontSize: 16,
                lineHeight: '16px',
            },
        },
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

        NavMobileMenuComponent: {
            styleOverrides: {
              root:{
                  with: "100%",
                  //maxWidth: 786,
                  //minWidth: 775,
                 // marginRight: 20,
                  height: 56,
                  backgroundColor: Colors.secondary,
                //   borderRadius: 20
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
        GreenSquareButtonComponent:{
            styleOverrides: {
                root:{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    //width: '100%',
                    //height: '100%',
                    height: 250,
                    width: 250,
                    overflow: 'hidden',
                    padding: 0,
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    [createTheme().breakpoints.only("xl")]: {

                    },
                    [createTheme().breakpoints.only("lg")]: {
                        height: 200,
                        width: 200,
                        '& img': {
                            width: '100px',
                            height: '125px',
                        }
                    },
                    [createTheme().breakpoints.only('md')]: {
                        height: 170,
                        width: 170,
                        '& img': {
                            //display: 'none',
                            width: '80px',
                            height: '100px',
                        }
                    },
                    [createTheme().breakpoints.between('xs', 'md')]: {
                        display: 'none',
                        '& img': {
                            //display: 'none',
                            width: '80px',
                            height: '100px',
                        }
                    },
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },
    },



}); 