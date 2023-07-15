import { useNavigate } from 'react-router-dom';
const Verifikasi = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-[1269px] h-[236px] inline-block justify-center align-middle self-center text-center ml-10" style={{ background: "#152A46" }}>
                <h1 className="text-center font-700 text-sm text-white pt-16">Sudah Transfer? Lakukan verifikasi pembayaran segera!</h1>
                <div>
                    <button className=" bg-yellow-600 font-700 text-sm text-white bg-secondary  py-[10px] px-[24px] rounded-full mt-8" onClick={() => navigate('/home')}>
                        Verifikasi Pembayaran
                    </button>
                </div>
            </div>
        </>
    )
}
export default Verifikasi;