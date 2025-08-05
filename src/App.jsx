import { useReducer } from 'react'
import Navbar from './components/navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { CartContext, reducer , initialState } from './store'

import './App.css'

//初始狀態


function App() {
   
  const [state, dispatch] = useReducer(reducer, initialState);
  // 用物件包裝後傳給 Provider
  const contextValue = { state, dispatch };
  return (
    <>
       <CartContext.Provider  value={contextValue}>
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
