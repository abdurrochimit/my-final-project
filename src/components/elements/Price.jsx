import { useNavigate } from 'react-router-dom';
const Price = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-[308px] h-[256px] bg-white ml-20 font-vietnam rounded-xl">
                <div className=" py-5 mt-12">
                    {/* <p className=" bg-surface py-[10px] px-[72px] font-600 text-biru text-lg border-r-4 border-blue-500">Materi</p> */}
                    <p className="py-[10px] px-[72px] font-bold text-3xl border-b-2 gray">Price</p>
                </div>
                <div className="flex mt-3 ml-5">
                    <p className=" mr-16 font-500 text-base text-subdued line-through">Rp. 125.000</p>
                    <p className="font-600 text-xl text-three">Rp. 99.000</p>
                </div>
                <div className="text-center mt-4">
                    <button className="font-bold py-2 px-4 rounded-full text-xl text-white-600 bg-secondary bg-yellow-500 hover:bg-yellow-700 text-white " onClick={() => navigate('/checkout')}>
                        Daftar kelas
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Price;