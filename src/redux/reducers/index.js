import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./userReducer"
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    user: userReducer
})

const persistedUserReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: {
        userReducer: persistedUserReducer
    }
})

export const persistedStore = persistStore(store);