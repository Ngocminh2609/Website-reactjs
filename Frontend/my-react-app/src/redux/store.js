import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import orderReducer from './slides/orderSlide'
import productReducer from './slides/productSlide'
import userReducer from './slides/userSlide'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['product','user']
}

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
    order: orderReducer
    })

    const persistedReducer = persistReducer(persistConfig, rootReducer)


    export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
})

export let persistor = persistStore(store)