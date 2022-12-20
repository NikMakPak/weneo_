import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: 1,
    isOpen: false,
    items: [
        { id: 1, name: "Товары", website: "testsite.weneo.io/page1" },
        { id: 2, name: "О нас", website: "testsite.weneo.io/about" },
        { id: 3, name: "Главная", website: "testsite.weneo.io" },
        { id: 4, name: "Контакты", website: "testsite.weneo.io/contacts" }
    ],
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setIsOpen(state, action) {
            state.isOpen = action.payload
        }
        // addPage(state, action) { // для добавления страниц для сайта пользователя

        // },
        // removePage(state, action) { // для удаления страниц для сайта пользователя

        // }
    },
})

export const { setCurrentPage, setIsOpen } = pagesSlice.actions

export default pagesSlice.reducer
