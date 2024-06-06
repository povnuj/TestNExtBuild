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

let theme = createTheme();

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
        ContainerComponent: {},
        ContainerGBtnComponent: {},
    }
}

theme = createTheme(theme,{ 
    breakpoints: {
        values: {
          xs: 350,
          sm: 900,
          md: 1000,
          lg: 1340,
          xl: 1748,
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
   
            [theme.breakpoints.down('xl')]: {
                fontSize: 20,
                lineHeight: '20px',
            },
            [theme.breakpoints.between('xs' , "lg")]: {
                fontSize: 16,
                lineHeight: '16px',
            },
        },
    },

    components:{
        ContainerGBtnComponent: {
            styleOverrides: {
                root:{
                    display: 'flex',
                    justifyContent: 'space-between',
                    columnGap: '20px',
                    padding: '50px 0 83px 0', 
                    [theme.breakpoints.between('xs' , "md")]: {
                        display: 'none',
                    },
                }
            }
        },
        GreenSquareButtonComponent:{
            styleOverrides: {
                root:{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 250,
                    width: 250,
                    overflow: 'hidden',
                    padding: 0,
                    backgroundColor: Colors.secondary,
                    borderRadius: 20,
                    [theme.breakpoints.only('lg')]: {
                        height: 200,
                        width: 200,
                        '& img': {
                            width: '100px',
                            height: '125px',
                        }
                    },
                   [theme.breakpoints.only('md')]: {
                       height: 140,
                       width: 140,
                       '& img': {
                           width: '60px',
                           height: '80px',
                       }
                       
                   },
                    '&:hover': {
                        backgroundColor: Colors.hoverSecondary,
                        color: Colors.light
                    }
                }
            }
        },

        ContainerComponent: {
            styleOverrides: {
                root:{
                    paddingLeft: '75px !important',
                    paddingRight: '75px !important',
                    [theme.breakpoints.between('xs', 'md')]: {
                       
                        paddingLeft: '25px !important',
                        paddingRight: '25px !important',
                    },
                }
            }
        },

        NavBarComponent: {
            styleOverrides: {
              root:{
                  with: "100%",
                  height: 250,
                  backgroundColor: Colors.primary,
              }
            }
        },

        NavMenuComponent: {
          styleOverrides: {
            root:{
                with: "100%",
                minWidth: 803,
                marginRight: 20,
                height: 40,
                backgroundColor: Colors.light,
                borderRadius: 20,
                [theme.breakpoints.only("md")]: {
                    minWidth: 683,
                },
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
                  lineHeight: '23px',
                  color: Colors.light,
                  textTransform: 'none',
                  [theme.breakpoints.only("md")]: {
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: '18px',
                },
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

export {
    theme
}