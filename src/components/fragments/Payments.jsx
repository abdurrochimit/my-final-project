import InstruksiPembayaran from "../elements/InstruksiPembayaran"
import MetodePembayaran from "../elements/MetodePembayaran";
import Verifikasi from "../elements/Verifikasi";

const Payments = () => {
    return (
        <>
            <div className="bg-blue-100 h-full w-full font-Mulish inline-block">
                <div className="flex ml-[40px] mt-10">
                    <img src="/images/kiri.jpeg" alt="Kiri" className="mr-2" />
                    <p className="font-500 text-xl text-subdued">Checkout</p>
                    <img src="/images/kanan.jpeg" alt="Kanan" className="mx-3" />
                    <p className="font-700 text-2xl text-biru">Instruksi Bayar</p>
                </div>
                <div className="font-700 text-[28px] ml-10 mt-5">
                    <h1>Instruksi Bayar</h1>
                </div>
                <div className="w-[1269px] h-[635px] bg-white mx-auto mt-10 rounded-2xl flex">

                    <MetodePembayaran />
                    <InstruksiPembayaran />
                </div>
                <div className="mb-20">
                    <Verifikasi />
                </div>
            </div>
        </>
    )
}

export default Payments;