import { combineReducers, configureStore } from '@reduxjs/toolkit'
//#mobile
import pageReducer from '@redux/pageReducer'

const rootReducer = combineReducers({
    page: pageReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: rootReducer,
})

export default store
