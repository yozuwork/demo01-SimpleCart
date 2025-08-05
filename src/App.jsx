import { useReducer } from 'react'
import Navbar from './components/navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartContext } from './store'

import './App.css'


//初始狀態
const initialState = {
  cartList: [],
};

function reducer(state, action) {
  const cartList = [...state.cartList];
  const index = cartList.findIndex((item)=> item.id === action.payload.id);
  console.log('index', index);
  console.log('action', cartList);
  switch (action.type) {
    case 'ADD_TO_CART':
      if(index === -1){
         //如果沒有找到，則將商品加入購物車
         cartList.push(action.payload);
      }else {
        //如果找到，當前購物車的項目與加入的購物車項目一致
        cartList[index].qty += action.payload.qty;
      }
      return {
        ...state,
        cartList
      };
    case 'CHANGE_CART_QTY': 
       cartList[index].qty = action.payload.qty;
       return{
         ...state,
         cartList
       }
    case 'REMOVE_FROM_CART':
       cartList.splice(index, 1);
       return {
         ...state,
         cartList
       };
    default:
      return state;
  }
}


function App() {
   
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
       <CartContext.Provider  value={{ state, dispatch }}>
          <Navbar />
           {/* 內容分隔 */}
           <div className='max-w-screen-xl mx-auto mt-4 px-4'>
                  <div className='grid md:grid-cols-12'>
                        <div className='md:col-span-7 bg-gray-100'>
                          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                              <Products />
                          </div>
                                
                        </div>
                       <div className='md:col-span-5 bg-gray-200'>
                          <Cart />
                       </div>
                  </div>
           </div>
       </CartContext.Provider>
    </>
  )
}

export default App
