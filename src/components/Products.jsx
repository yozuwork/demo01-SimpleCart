import { useContext , useState } from 'react';
import { CartContext } from '../store';
import products from '../productsData.js';


export default function Products() {
  const { dispatch } = useContext(CartContext);
  // 用一個物件記錄每個商品的數量，key是商品id
  const [qtyMap, setQtyMap] = useState({});
  const handleQtyChange = (productId, value) => {
    setQtyMap(prev => ({
      ...prev,
      [productId]: value
    }));
  };
  return (
    
     products.map((product)=>{
        // 取對應商品的數量，預設為1
        const sendQty = qtyMap[product.id] || 1;
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

                    <select 
                        className="bg-white border border-gray-300 rounded-md   px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => handleQtyChange(product.id, parseInt(e.target.value))}
                    >
                          {
                            [...Array(20)].map((_,index)=>{
                                return (
                                    <option value={index+1} key={index} >{index+1}</option>
                                )
                            })
                          }
                         
                    </select>
                    
                    <button type='button'
                            className="w-full justify-center mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={()=>{
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: {
                                        ...product,
                                        qty:sendQty
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