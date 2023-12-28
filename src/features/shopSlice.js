import { createSlice } from "@reduxjs/toolkit";
import caterogies_data from "../data/categories_data.json"
import product_data from "../data/products_data.json"

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categorySelected: "",
        productIdSelected: 0,
        categories: caterogies_data,
        products: product_data,
        productFilterCat: []
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.productFilterCat = state.products.filter( product => product.category === state.categorySelected )
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        }
    }
})

export const {setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer