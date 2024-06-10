'use client'
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import { Colors } from "./colors";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', "900"],
    subsets: ['latin'],
    display: 'swap'
});

let theme = createTheme();

declare module '@mui/material/styles' {
    interface TypographyVariants {
        buttonGreenText: React.CSSProperties;
        servicesSliderText1: React.CSSProperties;
        servicesSliderText2: React.CSSProperties;
        title1: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
        buttonGreenText?: React.CSSProperties;
        servicesSliderText1?: React.CSSProperties;
        servicesSliderText2?: React.CSSProperties;
        title1?: React.CSSProperties;
  }
} 

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    buttonGreenText: true;
    servicesSliderText1: true;
    servicesSliderText2: true;
    title1: true;
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
        FooBarComponent: {},
        FooListComponent: {},
        GreenSquareButtonComponent: {},
        ContainerComponent: {},
        ContainerGBtnComponent: {},
        PhoneButtonComponent: {},
        SwitcherContainerComponent: {},
        SwitcherButtonComponent: {},
        MainServicesComponent: {},
        PriceButtonBlackComponent: {},
        PriceButtonGreenComponent: {},
        SSliderContainerComponent: {},
        SSliderPromotionContComp: {},
        MainArticlesComponent: {},
        ASliderContainerComponent: {},
        TransperedGreenButtonComponent: {},
        FooterContactsComponent: {},
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
        fontFamily: 'Roboto, sans-serif',

        h3:{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '28px',
        },
        
        
        title1: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '28px',
            // display: '-webkit-box',
            // overflowY: 'hidden',
            // '-webkit-line-clamp': '1',
            // '-webkit-box-orient': 'vertical',
            // wordBreak: 'break-word',
        },

        servicesSliderText1: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '14px',
            '& span': {
                color: Colors.secondary
            }
        },

        servicesSliderText2: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 15,
            fontWeight: 400,
            lineHeight: '18px',
            color: Colors.grey,
            // display: '-webkit-box',
            // overflowY: 'hidden',
            // '-webkit-line-clamp': '4',
            // '-webkit-box-orient': 'vertical',
            // wordBreak: 'break-word',
        },

        buttonGreenText:{
            fontSize: 27,
            fontWeight: 500,
            lineHeight: '32px',
            color: Colors.light,
            textDecoration: 'none',
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

        FooterContactsComponent: {
            styleOverrides: {
                root: {
                    width: '100%',
                    maxWidth: '380px',
                    '& .foo_contacts': {
                        display: 'flex',
                        '& a': {
                            textDecoration: 'none', 
                            color: Colors.dark,
                            fontFamily: 'Roboto,Thin, sans-serif',
                        },
                    }
                   
                }
            }
        },

        FooListComponent: {
            styleOverrides: {
                root: {
                    fontSize: '18px', 
                    fontWeight: '400', 
                    lineHeight: '22px',
                    '& ul': {
                        marginTop: '18px',
                        listStyle: 'none',
                        '& a': {
                            textDecoration: 'none', 
                            color: Colors.dark,
                        }, 
                    },

                }
            }
        },

        FooBarComponent: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors.primary,
                    padding: '50px 0',
                    '& .foo_container': {
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    },

                }
            }
        },

        TransperedGreenButtonComponent: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 13px',
                    border: `1px solid ${Colors.secondary}`,
                    borderRadius: '83px',
                    fontSize: '15px',
                    color: Colors.secondary,
                    textTransform: 'none',
                }
            }
        },

        ASliderContainerComponent: {
            styleOverrides: {
                root: {
                    maxWidth: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    '& a': {
                        marginTop: '57px', 
                        marginRight: '0',
                        marginLeft: 'auto',
                    },
                }
            }
        },
        
        MainArticlesComponent: {
            styleOverrides: {
                root: {
                    padding: '41px 0',
                }
            }
        },

        SSliderPromotionContComp: {
            styleOverrides: {
                root:{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '515px',
                    minHeight: '250px',
                    borderRadius: '25px',
                    backgroundColor: Colors.light,
                    boxShadow: '4px 4px 8px 0px #0000001A',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.only('xs')]: {
                        '& img': {
                            width: '65px',
                            height: 'auto',
                        },
                        '& .s_btn_cont': {
                            display: 'flex',
                            flexDirection: 'column',
                            '& .s_btn_due_date': {
                                width: '100%',
                            },
                            '& a': {
                                marginTop: '30px',
                                '& .s_green_btn_new_price': {
                                    fontSize: '22px',
                                    '& svg': {
                                        width: 14,
                                        height: 'auto',
                                    },
                                },
                                '& .s_green_btn_old_price': {
                                    fontSize: '18px',
                                },

                            }
                        },
                    },
                }
            }
        },

        SSliderContainerComponent: {
            styleOverrides: {
                root:{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '515px',
                    minHeight: '250px',
                    borderRadius: '25px',
                    backgroundColor: Colors.light,
                    boxShadow: '4px 4px 8px 0px #0000001A',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.only('xs')]: {
                        '& .s_btn_cont': {
                            display: 'flex',
                            flexDirection: 'column',
                            '& .s_btn_due_date': {
                                width: '100%',
                            },
                            '& a': {
                                marginTop: '30px',
                                '& button': {
                                    fontSize: '22px',
                                    '& svg': {
                                        width: 14,
                                        height: 'auto',
                                    },
                                },
                            }
                        },
                    },
                }
            }
        },

        PriceButtonGreenComponent: {
            styleOverrides: {
                root:{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'Roboto,Thin, sans-serif',
                  fontSize: 30,
                  fontWeight: 700,
                  padding: '0 18px 15px',
                  backgroundColor: Colors.secondary,
                  color: Colors.light,
                  borderRadius: 50,
                  border: `1px solid transparent`,
                  '&:hover': {
                    backgroundColor: Colors.light,
                    color: Colors.dark,
                    border: `1px solid ${Colors.dark}`, 
                }
                }
            }
        },

        PriceButtonBlackComponent: {
            styleOverrides: {
                root:{
                  fontFamily: 'Roboto,Thin, sans-serif',
                  fontSize: 30,
                  fontWeight: 700,
                  padding: '0 18px',
                  backgroundColor: Colors.dark,
                  color: Colors.light,
                  borderRadius: 50,
                  border: `1px solid transparent`,
                  '&:hover': {
                    backgroundColor: Colors.light,
                    color: Colors.dark,
                    border: `1px solid ${Colors.dark}`, 
                }
                }
            }
        },

        MainServicesComponent: {
            styleOverrides: {
                root:{
                    width: '100%',
                    backgroundColor: Colors.primary,
                    padding: '41px 0 144px 0',
                }
            }
        },

        SwitcherButtonComponent: {
            styleOverrides: {
                root:{
                    height: 60,
                    padding: '0 25px',
                    backgroundColor: Colors.secondary,
                    borderRadius: 83,
                    fontSize: 36,
                    fontWeight: 700,
                    lineHeight: '23px',
                    color: Colors.light,
                    textTransform: 'none', 
                    '&:hover': {
                        backgroundColor: Colors.secondary,
                        color: Colors.light
                    },
                    [theme.breakpoints.down('xl')]: {
                        fontSize: 28,
                        lineHeight: '20px',
                        padding: '0 20px',
                        height: 50,
                        
                    },
                    [theme.breakpoints.down('lg')]: {
                        fontSize: 24,
                        lineHeight: '16px',
                        padding: '0 18px',
                        height: 45,
                        
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 16,
                        lineHeight: '10px',
                        padding: '0 10px',
                        height: 35,
                        
                    },
                }
            }
        },

        SwitcherContainerComponent: {
            styleOverrides: {
                root:{
                    width: 'fit-content',
                    //maxWidth: 400,
                    //marginRight: '-20px',
                    padding: 0,
                    height: 'auto',
                    backgroundColor: Colors.light,
                    border: `1px solid ${Colors.secondary}`,
                    borderRadius: 83,
                }
            }
        },
        PhoneButtonComponent: {
            styleOverrides: {
                root:{
                    padding: 0,
                    color: Colors.grey,
                    textTransform: 'none',
                    '& img': {
                        marginRight: 5,
                    }
                }
            }
        },

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
                  width: "100%",
                  height: 250,
                  backgroundColor: Colors.primary,
              }
            }
        },

        NavMenuComponent: {
          styleOverrides: {
            root:{
                width: 'fit-content',
                minWidth: 790,
                marginRight: 20,
                height: 40,
                backgroundColor: Colors.light,
                borderRadius: 20,
                [theme.breakpoints.only("md")]: {
                    minWidth: 581,
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
                    padding: '0 10px',
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
                width: "100%",
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