const MetodePembayaran = () => {
    return (
        <>
        
        
            <div className="flex pt-12 pl-12 pb-7">
                <div className="w-[119px] h-[110px] bg-edspert rounded-lg mr-5">
                    <div className="flex justify-center">
                        <img src="/images/image-2.png" alt="gambar" className="h-60 w-60"/>
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
            <div className="pl-12">
                <div>
                    <h1 className="font-700 text-xl mb-3">Metode Pembayaran</h1>
                    <p className="font-400 text-base text-subdued mb-5">Bank Transfer (verifikasi manual)-Mandiri</p>
                </div>
                <div className="flex">
                    <img src="/images/Mandiri.jpeg" alt="Mandiri" className="w-[72px] h-[22px] self-center" />
                    <div className="ml-8">
                        <p className="font-600 text-base">No Rek. 137000299089</p>
                        <img src="" alt="" />
                        <div>
                            <p className="font-500 text-base text-subdued">a.n PT Widya Kreasi Bangsa</p>
                        </div>
                    </div>
                    <button className="flex self-start">
                        <img src="/images/salin.jpeg" alt="Salin" className=" w-5 h-5" />
                        <p className="font-600 text-xs text-biru">Salin</p>
                    </button>
                </div>
            </div>
            <div className="pl-12">
                <p className="font-400 text-base text-subdued mt-4">Nominal yang harus dibayar senilai:</p>
                <h1 className="font-600 text-2xl mt-2">Rp. 400.000</h1>
            </div>
        </>
    )
}

export default MetodePembayaran;