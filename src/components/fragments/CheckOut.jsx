import Pembayaran from "../elements/Pembayaran";
import Ringkasan from "../elements/Ringkasan";

const CheckOut = () => {
    return (
        <>
            <div className="bg-blue-100 h-[1150px] w-full font-Mulish inline-block">
                <div className="flex ml-[72px] mt-10">
                    <img src="/images/kiri.jpeg"  alt="kiri" className="mr-2" />
                    <p className="font-700 text-xl text-blue-600">Checkout</p>
                    <img src="/images/kanan.jpeg"  alt="Kanan" className="mx-3" />
                    <p className="font-500 text-xl text-gray-600">Instruksi Bayar</p>
                </div>
                <div className="font-700 text-[28px] ml-[72px] mt-5">
                    <h1>Checkout</h1>
                </div>
                <div className="flex">
                   <Pembayaran/>
                    <Ringkasan/>
                </div>
            </div>
        </>
    )
}
export default CheckOut;