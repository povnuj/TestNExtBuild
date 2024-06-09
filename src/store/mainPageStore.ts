import { UiStateInterface } from '@/Interfaces/Interfces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: UiStateInterface['mainPage'] = {
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
    popularSlides: [
      {
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1897,
        promotion: true,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся2',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1897,
        promotion: false,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся Краса та здоров\'я волосся ',
        description: '(Загальний аналіз крові Загальний аналіз крові Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1897,
        promotion: false,
        dueDate: 'сьогодні',
        url: '/'
      },
      {
        type: 'Пакетне дослідженя',
        code: 'Код дослідження №964',
        title: 'Краса та здоров\'я волосся4',
        description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
        price: 1697,
        oldPrice: 1897,
        promotion: false,
        dueDate: 'сьогодні',
        url: '/'
      },
      
   ],
   newSlides: [
    {
      type: 'Пакетне дослідженя',
      code: 'Код дослідження №964',
      title: 'Краса та здоров\'я волосся',
      description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
      price: 1697,
      oldPrice: 1897,
      promotion: false,
      dueDate: 'сьогодні',
      url: '/'
    },
    {
      type: 'Пакетне дослідженя',
      code: 'Код дослідження №964',
      title: 'Краса та здоров\'я волосся2',
      description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
      price: 1697,
      oldPrice: 1897,
      promotion: false,
      dueDate: 'сьогодні',
      url: '/'
    },
    {
      type: 'Пакетне дослідженя',
      code: 'Код дослідження №964',
      title: 'Краса та здоров\'я волосся Краса та здоров\'я волосся ',
      description: '(Загальний аналіз крові Загальний аналіз крові Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
      price: 1697,
      oldPrice: 1897,
      promotion: false,
      dueDate: 'сьогодні',
      url: '/'
    },
    {
      type: 'Пакетне дослідженя',
      code: 'Код дослідження №964',
      title: 'Краса та здоров\'я волосся4',
      description: '(Загальний аналіз крові (автоматизований з повною ручною лейкоформулою + ШОЕ); Тиреотропний гормон (ТТГ); Трийодтиронін вільний (Т3В); Тироксин вільний (Т4В); 25-ОН вітамін D загальний; Тестостеронзагальний (ТеЗ); Феритин; Цинк)',
      price: 1697,
      oldPrice: 1897,
      promotion: false,
      dueDate: 'сьогодні',
      url: '/'
    },
    
 ],
    buttons: {
      btn1: {name: 'Популярні', active: true},
      btn2: {name: 'Нові', active: false},
    },
  }
  
  
};

const  mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    serviceBtn: (state) => {
      state.servicesSection.buttons.btn1.active = !state.servicesSection.buttons.btn1.active;
      state.servicesSection.buttons.btn2.active = !state.servicesSection.buttons.btn2.active;
    },
    // setitems(state, action) {
    //   //state.list = action.payload;
    // },
    // getItems(state, action) {
    //   //action.navItems = state.nav;
    // },
  },
});

export const { serviceBtn } = mainPageSlice.actions;
// Описуйте дії
//export const {  } = navSlice.actions.getItems;
export default mainPageSlice.reducer;