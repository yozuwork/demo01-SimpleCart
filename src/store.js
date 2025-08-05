import { createContext } from 'react';



export const CartContext = createContext({

});


function cartListTotal(cartList) {
  return cartList.map((item) => item.qty * item.price)
    .reduce((acc, cur) => acc + cur, 0)
}
export const initialState = {
  cartList: [],
};
export const reducer = (state, action) => {
    const cartList = [...state.cartList];
    const index = cartList.findIndex((item) => item.id === action.payload.id);
    console.log('index', index);
    console.log('action', cartList);
    switch (action.type) {
        case 'ADD_TO_CART':
            if (index === -1) {
                //如果沒有找到，則將商品加入購物車
                cartList.push(action.payload);
            } else {
                //如果找到，當前購物車的項目與加入的購物車項目一致
                cartList[index].qty += action.payload.qty;
            }
            return {
                ...state,
                cartList,
                total: cartListTotal(cartList)
            };
        case 'CHANGE_CART_QTY':
            cartList[index].qty = action.payload.qty;
            return {
                ...state,
                cartList,
                total: cartListTotal(cartList)
            }
        case 'REMOVE_FROM_CART':
            cartList.splice(index, 1);
            return {
                ...state,
                cartList,
                total: cartListTotal(cartList)
            };
        default:
            return state;
    }
};