import { useNavigate } from 'react-router-dom';

const Ringkasan = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-[587px] h-[847px] bg-white ml-[72px] mt-10 rounded-2xl font-Mulish">
                <div className="container px-12 py-5">
                    <h1 className="pt-10 font-700 text-3xl mb-3">Ringkasan Pesanan</h1>
                    <div className="flex">
                        <div className="w-[119px] h-[110px] bg-edspert rounded-lg mr-5">
                            <div className="flex justify-center">
                                <img src="/images/image-2.png" alt="gambar" />
                            </div>
                        </div>
                        <div>
                            <h1 className=" text-xl font-800">Programming Laravel</h1>
                            <h3 className="text-[17px] font-800">Getting Started with Laravel 9</h3>
                            <div className="flex">
                                <p className="font-600 text-xs text-grey mt-2">Batch</p>
                                <p className="font-600 text-xs mt-2 ml-4">September 2022</p>
                            </div>
                            <div className="flex">
                                <p className="font-600 text-xs text-grey mt-2">Mentor</p>
                                <p className="font-600 text-xs mt-2 ml-2">William Hartono, Farel Prayoga</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-800 text-sm mt-5 mb-3">Kode Promo</p>
                        <div className="flex">
                            <div className="w-[445px] h-[54px] pr-2">
                                <form className="border border-gray-500">
                                    <div className="mb-4">
                                        <input className="block text-black text-sm mb-2 py-1" placeholder="Masukkan kode promo" />
                                    </div>
                                </form>
                            </div>
                            <div className="w-[108px] h-[54px] justify-end">
                                <button className="bg-purple-500  hover:bg-cyan-900 text-white font-600 text-sm py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Terapkan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-800 text-sm mt-5 mb-3">Metode Pembayaran</h1>
                        <p className="font-600 text-sm">Bank Transfer (verifikasi manual)-Mandiri</p>
                    </div>
                    <div>
                        <h1 className="font-800 text-sm mt-5 mb-3">Ringkasan Pembayaran</h1>
                        <div className="flex">
                            <p className="font-400 text-sm">Harga Kelas</p>
                            <p className="font-500 text-base ml-80 mb-2">Rp. 700.000</p>
                        </div>
                        <div className="flex">
                            <p className="font-400 text-sm">Potongan</p>
                            <p className="font-500 text-base ml-[338px] mb-2">Rp. 200.000</p>
                        </div>
                        <div className="flex">
                            <p className="font-400 text-sm">Promo</p>
                            <p className="font-500 text-base ml-[439px] mb-2">-</p>
                        </div>
                        <div className="flex border-b-2 mb-4">
                            <p className="font-400 text-sm">Kode Unik</p>
                            <p className="font-500 text-base ml-[335px] mb-5 ">Rp. 100.000</p>
                        </div>
                        <div className="flex font-800">
                            <p className="text-sm">Total Pembayaran</p>
                            <p className=" text-base ml-[273px]  mb-2">Rp. 400.000</p>
                        </div>
                    </div>
                    <div className="font-mulish text-sm">
                        <p>
                            Dengan menekan tombol <span className="font-700">Bayar</span> kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali
                            <a className="font-700 text-biru underline" href="#">
                                <span> Syarat & ketentuan </span>
                            </a>
                            yang berlaku.
                        </p>
                    </div>
                    <div>
                        <div className="flex mt-12">
                            <button className="rounded-full self-center bg-gray-500 py-3 px-6">Batalkan</button>
                            <button className=" text-white ml-[255px] bg-blue-500 py-[10px] px-[70px] rounded-full font-600 text-sm" onClick={() => navigate('/Payment')}>
                                Bayar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ringkasan;
