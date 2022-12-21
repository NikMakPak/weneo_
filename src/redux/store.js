import { configureStore } from '@reduxjs/toolkit'

import pages from './slices/pagesSlice'


export const store = configureStore({
    reducer: { pages }
})
