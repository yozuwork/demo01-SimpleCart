import { useContext } from 'react';
import { CartContext } from '../store';
import products from '../productsData.js';


export default function Products() {
  const { dispatch } = useContext(CartContext);


  return (
     products.map((product)=>{
        return (
           <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                    <img  className="rounded-t-lg"  src="https://www.vegetsai.com.tw/img/ninesquare_2023.jpg" alt="" />
                    </a>
                    <a href="#">
                        <h6 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                            <span className='float-right'> NT${product.price}</span>
                        </h6>
                    </a>
                    
                    
                    <button type='button'
                            className="w-full justify-center mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={()=>{
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: {
                                        ...product,
                                        qty:1
                                    }
                                });
                            }}
                        >
                            加入購物車
                    </button>
                </div>
            </div>
        );
      })
   
  )
}