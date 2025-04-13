import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countryApi } from "../../../features";

const RootReducer = combineReducers({
    [countryApi.reducerPath]: countryApi.reducer,
})

export const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;