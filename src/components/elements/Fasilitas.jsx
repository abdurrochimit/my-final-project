
const Fasilitas = () => {
    const listFasilitas = [
        {
            id: 1,
            fasilitas: 'E-Sertifikat',
        },
        {
            id: 2,
            fasilitas: 'Portfolio',
        },
        {
            id: 3,
            fasilitas: 'Job Connector',
        },
        {
            id: 4,
            fasilitas: 'Career Development',
        },
    ];
    return (
        <div>
            <div className=" bg-white ml-10 mt-12 rounded-3xl font-vietnam">
                <div className="container px-10 py-7">
                    <p className="text-dark font-bold text-4xl mb-4">Fasilitas</p>
                    {listFasilitas.map((item) => (
                        <div className="font-600 text-xl my-3 flex">
                            <img src="/images/tombol.jpeg" alt="tombol" className="w-6 h-6 mt-4 mr-4" />
                            <p className="font-bold text-2xl my-3" key={item.id}>{item.fasilitas}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Fasilitas;