import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';



const Pembayaran = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="w-[587px] h-[847px] bg-white ml-[72px] mt-10 rounded-2xl">
                <div className="container px-12 py-5">
                    <div>
                        <h1 className="pt-10 font-bold text-3xl mb-3">Pilih Metode Pembayaran</h1>
                        <button className=" text-left" onClick={handleToggle}>
                            <h4 className="font-600 mb-2 text-2xl">Bank Transfer (verifikasi manual)</h4>
                            <div className=" border-b-2 flex">
                                <p className="font-400 text-subdued text-xs mb-3">Pembayaran melalui Bank transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui whatsapp.</p>
                                <p> {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
                            </div>
                        </button>
                        {isOpen && (
                            <button>
                                <div className="font-600">
                                    <div className="flex border border-grey-500 mt-4 rounded-md p-4">
                                        <img src="/images/Mandiri.jpeg" alt="Mandiri" />
                                        <p className="ml-8 font-600 text-xl">
                                            Bank Transfer ke Rek Bank Mandiri
                                            <input type="checkbox" className=" ml-6" />
                                        </p>
                                    </div>
                                    <div className="flex border border-grey-500 mt-4 rounded-md p-4">
                                        <img src="/images/BCA.jpeg" alt="BCA" />
                                        <p className="ml-8 font-600 text-xl">
                                            Bank Transfer ke Rek Bank BCA
                                            <input type="checkbox" className="ml-14" />
                                        </p>
                                    </div>
                                </div>
                            </button>
                        )}
                    </div>
                    <div>
                        <button className=" text-left mt-8" onClick={handleToggle}>
                            <h4 className="font-600 mb-2 text-2xl">Bank Transfer (verifikasi otomatis)</h4>
                            <div className=" border-b-2 flex">
                                <p className="font-400 text-subdued text-xs mb-3">Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.</p>
                                <p> {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
                            </div>
                        </button>
                        {isOpen && (
                            <div className="font-600">
                                <div className="flex border border-grey-500  mt-4 rounded-md p-4">
                                    <img src="/images/Mandiri.jpeg" alt="Mandiri" />
                                    <p className="ml-8 font-600 text-xl">
                                        Virtual Account Mandiri 
                                        <input type="checkbox" className="ml-28" />
                                    </p>
                                </div>
                                <div className="flex border border-grey-500  mt-4 rounded-md p-4">
                                    <img src="/images/BCA.jpeg" alt="BCA" />
                                    <p className="ml-8 font-600 text-xl">
                                        Virtual Account BCA
                                        <input type="checkbox" className="ml-36" />
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pembayaran;