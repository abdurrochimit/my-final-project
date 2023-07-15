const CardProduct = (props) => {
    const {
        judul,
        categori,
        subjudul,
        batch,
        mentor,
        harga,
        diskon
    } = props
    return (
        <div className="w-[352px] h-[293px] inline-block ml-20 mt-10">
            <div className="rounded-t-3xl" style={{ background: "#152A46" }}>
                <div className="flex">
                    <img className="mt-4 ml-7 items-end justify-start" src="/images/image-2.png" alt="img" />
                    <div className="ml-6 my-3 justify-center self-center">
                        <h3 className="font-bold text-orange-300 text-base mb-3">{categori}</h3>
                        <h1 className="text-xs text-white font-bold">{judul}</h1>
                        <p className="text-xs text-white">({subjudul})</p>
                    </div>
                </div>
            </div>
            <div className="h-[164px] rounded-b-3xl bg-white">
                <div className="ml-7">
                    <h1 className="font-bold text-base ">{judul}</h1>
                    <h1 className="font-bold text-base mb-2">{subjudul}</h1>
                    <div className="flex">
                        <div className="mr-2">
                            <p className="text-gray-500">Batch</p>
                            <p className="text-gray-500">Mentor</p>
                        </div>
                        <div className="font-semibold text-black">
                            <p>{batch}</p>
                            <p>{mentor}</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-3">
                        <p className="mr-3 text-sm text-gray-500 line-through ">RP{". "} 
                                            {(harga).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</p>
                        <p className="text-xl text-green-600 font-bold mr-4">RP{". "} 
                                            {(diskon).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;