import Fasilitas from "../elements/Fasilitas";
import Materi from "../elements/Materi";
import Price from "../elements/Price";

const ProductDetail = () => {
    return (
        <>
            <div>
                <div className="bg-slate-100 w-full h-full flex">
                    <Price />
                    <div>
                        <Materi />
                        <Fasilitas/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;