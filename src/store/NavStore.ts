import { UiStateInterface } from '@/Interfaces/Interfces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: UiStateInterface['nav'] = {
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
  
};

const  navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setitems(state, action) {
      //state.list = action.payload;
    },
    getItems(state, action) {
      //action.navItems = state.nav;
    },
  },
});

//export const { actions: action, reducer: yourReducer } = navSlice;
// Описуйте дії
//export const {  } = navSlice.actions.getItems;
export default navSlice.reducer;