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
        userReducer: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistedStore = persistStore(store);