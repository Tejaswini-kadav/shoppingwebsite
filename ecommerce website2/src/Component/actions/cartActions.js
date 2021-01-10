import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from './action-types/cart-actions';

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}
//remove cart action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id

    }
}

//subtract quantity action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add quantity action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
//add shipping action
export const addShipping = (id) => {
    return {
        type: ADD_SHIPPING,
        id
    }
}
