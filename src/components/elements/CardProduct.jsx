const CardProduct = () => {
    return (
        <div className="w-[352px] h-[293px] inline-block ml-20 mt-10">
            <div className="rounded-t-3xl" style={{ background: "#152A46" }}>
                <div className="flex">
                    <img className="mt-4 ml-7 items-end justify-start" src="/images/image-2.png" alt="img" />
                    <div className="ml-6 my-3 justify-center self-center">
                        <h3 className="font-bold text-orange-300 text-base mb-3">Intensive Bootcamp</h3>
                        <h1 className="text-xs text-white font-bold">Programing Laravel</h1>
                        <p className="text-xs text-white">(Getting Started with Laravel 9)</p>
                    </div>
                </div>
            </div>
            <div className="h-[164px] rounded-b-3xl bg-white">
                <div className="ml-7">
                    <h1 className="font-bold text-base ">Programming Laravel</h1>
                    <h1 className="font-bold text-base mb-2">Getting Started with laravel 9</h1>
                    <div className="flex">
                        <div className="mr-2">
                            <p className="text-gray-500">Batch</p>
                            <p className="text-gray-500">Mentor</p>
                        </div>
                        <div className="font-semibold text-black">
                            <p>September 2022</p>
                            <p>William Hartono, Farel Prayoga</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-3">
                        <p className="mr-3 text-sm text-gray-500 line-through ">Rp. 2.060.000</p>
                        <p className="text-xl text-green-600 font-bold mr-4">Rp. 560.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct;