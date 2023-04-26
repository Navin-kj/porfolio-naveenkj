import { ActionTypes } from "./types";

export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectProducts = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}