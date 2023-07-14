import CardProduct from "../elements/CardProduct";
import CategoryProduct from "../elements/CategoryProduct";

const Products = () => {
    return (
        <div className="flex justify-center bg-blue-100 pt-4  px-12">
            <div className="w-2/12 border-black">
               <CategoryProduct/>
            </div>
            <div className="w-10/12 flex flex-wrap">
                <div>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                  <CardProduct/>
                    <div className="font-bold text-end mt-6">
                        <button className="text-gray-400 mr-4">&lt; Sebelumnya</button>
                        <span className="mr-6 text-gray-400">1</span>
                        <span className="mr-6 text-gray-400">2</span>
                        <span className="mr-6 text-gray-400">3</span>
                        <span className="mr-6 text-gray-400">4</span>
                        <span className="mr-6 text-gray-400">...</span>
                        <span className="mr-6 text-gray-400">10</span>
                        <button className="text-gray-900 ml-4">Selanjutnya &gt; </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;