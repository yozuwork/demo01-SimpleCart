export default function Navbar() {
  return (
    <nav className='bg-gray-100 shadow'>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-700">甜點蛋糕店</span>
            <button
            type="submit"
            className="relative border border-gray-800 text-gray-800 px-4 py-2 rounded"
            >
            購物車
            <span
                className="
                absolute top-0 right-0
                translate-x-1/2 -translate-y-1/2
                bg-red-600 text-white text-xs font-bold
                px-2 py-0.5 rounded-full
                "
            >
                99
            </span>
            </button>
        </div>  
    </nav>
  )
}