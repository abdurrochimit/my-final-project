import CardProduct from "../elements/CardProduct";
import CategoryProduct from "../elements/CategoryProduct";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const listProducts = [
        {
            id: 1,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (1)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 2,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (2)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 3,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (3)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 4,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (4)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 5,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (5)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 6,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (6)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 7,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (7)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 8,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (8)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        },
        {
            id: 9,
            categori: "Intensive Bootcamp",
            judul: "Programming Laravel (9)",
            subjudul: "Getting Started with laravel 9",
            batch: "September 2022",
            mentor: "William Hartono, Farel Prayoga",
            harga: 2060000,
            diskon: 560000,
        }
    ]
    return (
        <div className="flex justify-center bg-blue-100 pt-4  px-12">
            <div className="w-2/12 border-black">
                <CategoryProduct />
            </div>
            <div className="w-10/12 flex flex-wrap">
                <div>

                    {
                        listProducts.map((product) => (
                            <button
                                onClick={() => navigate(`/detail/${product.id}`, {
                                    state: {
                                        categori: product.categori,
                                        judul: product.judul,
                                        subjudul: product.subjudul,
                                        batch: product.batch,
                                        mentor: product.mentor,
                                        harga: product.harga,
                                        diskon: product.diskon,
                                    }
                                })}
                            >
                                <CardProduct
                                    key={product.id}
                                    categori={product.categori}
                                    judul={product.judul}
                                    subjudul={product.subjudul}
                                    batch={product.batch}
                                    mentor={product.mentor}
                                    harga={product.harga}
                                    diskon={product.diskon}
                                />
                            </button>
                        ))
                    }


                    <div className="font-bold text-end mt-6 pb-6">
                        <button className="text-gray-400 mr-4">&lt; Sebelumnya</button>
                        <span className="mr-6 text-gray-400">1</span>
                        <span className="mr-6 text-gray-400">2</span>
                        <span className="mr-6 text-gray-400">3</span>
                        <span className="mr-6 text-gray-400">4</span>
                        <span className="mr-6 text-gray-400">...</span>
                        <span className="mr-6 text-gray-400">10</span>
                        <button className="text-gray-900 ml-4">Selanjutnya &gt; </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Products;