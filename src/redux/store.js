import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filter'

export const store = configureStore({
    reducer: {
        filterSlice,
    },
})