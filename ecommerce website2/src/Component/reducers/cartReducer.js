
import item1 from '../../image/item1.jpg';
import item2 from '../../image/item2.jpg';
import item3 from '../../image/item3.jpg';
import item4 from '../../image/item4.jpg';
import item5 from '../../image/item5.jpg';
import item6 from '../../image/item6.jpg';
import item7 from '../../image/item7.jpg';
import item8 from '../../image/item8.jpg';
import item9 from '../../image/item9.jpg';
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions';

const initState = {
    items: [
        { id: 1, title: 'AIDD washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 110, img: item1 },
        { id: 2, title: 'steam washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 80, img: item2 },
        { id: 3, title: 'Turbowash washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 120, img: item3 },
        { id: 4, title: '@LG washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 260, img: item4 },
        { id: 5, title: 'frontload washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 160, img: item5 },
        { id: 6, title: 'powersaver washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 90, img: item6 },
        { id: 7, title: 'automachine washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 150, img: item7 },
        { id: 8, title: 'sony washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 190, img: item8 },
        { id: 9, title: 'motionDD washing machine', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minima,ex.", price: 140, img: item9 }

    ],
    addedItems: [],
    total: 0
}
const cartReducer = (state = initState, action) => {
    //hi file home made insert keli 
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        //check if the action id exists in the added items
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }

        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }

    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)

        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the quantity===0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal

            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
    //add shipping from total
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 9
        }
    }
    //remove shipping from total
    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 9
        }
    }
    else {
        return state
    }
}
export default cartReducer;