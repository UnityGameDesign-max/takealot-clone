import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./userReducer"
import { persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import cartReducer from './cartReducer';

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    user: userReducer,
    cart: cartReducer
})

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        userReducer: persistedUserReducer,
        cartReducer: persistedCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistedStore = persistStore(store);