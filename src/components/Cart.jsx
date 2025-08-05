import { useContext } from 'react';
import { CartContext } from '../store';

export default function Cart() {
    const { state } = useContext(CartContext);
    return (
        <div className='bg-light p-3'>
            <table className="table-auto w-full border-collapse">
                <tbody>
                    {state.cartList.map((item, idx) => (
                        <tr className="border-b" key={idx}>
                            <td className='py-2 px-4 text-center align-middle'>
                                <a href="#" className="text-red-500 hover:underline">✕</a>
                            </td>
                            <td className="py-2 px-4 align-middle">
                                <img src={item.img} alt="商品圖片" className="w-16 h-16 object-cover rounded" />
                            </td>
                            <td className="py-2 px-4 align-top">
                                <div className="flex flex-col items-start">
                                    <span className="font-medium text-gray-900">{item.title}</span>
                                    <span className="text-sm text-gray-500">NT${item.price}</span>
                                </div>
                            </td>
                            <td className="py-2 px-4 text-center align-middle">
                                <select
                                    name=""
                                    id=""
                                    className="block w-full border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </td>
                            <td className="py-2 px-4 text-right align-middle">NT${item.price * item.qty}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="border-t">
                        <td
                            colSpan={5}
                            className="py-4 px-4 text-right text-lg font-semibold text-gray-800 align-middle"
                        >
                            總金額 NT$ 440
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
