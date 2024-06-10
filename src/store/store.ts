
//import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import navReducer  from './NavStore';
import mainPageReducer from './mainPageStore'
import footerReducer from './footerStore'

export const makeStore = () => {
  return configureStore({
    reducer: {
        nav: navReducer,
        mainPage: mainPageReducer,
        footer: footerReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

