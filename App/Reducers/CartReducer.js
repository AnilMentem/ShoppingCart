import * as Actions from '../Actions/ActionTypes';

const initialStates = {
    cart :[],
    total : 0,
    orderedItem:[],
    orderTotal :0,
}
  
const CartReducer = (state = initialStates,action) => {
    switch (action.type){
        case Actions.ADD_TO_CART:
            return {
                ...state,
                cart : [action.payload, ...state.cart],
                total : state.total + action.payload.cost
            }
        case Actions.REMOVE_FROM_CART:
            return {
                ...state,
                cart : state.cart.filter((item,i) => i !== action.payload.index),
                total : state.total - action.payload.item.cost
            } 
        case Actions.EMPTY_CART:
            return {
               ...state,
               orderedItem:[...state.cart],
               cart:[],
               orderTotal: state.total,
               total : 0,
            }           
        default:
            return state;
    }
}

export default CartReducer;
