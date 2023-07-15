const InstruksiPembayaran = () => {
    const steps = [
        'Masukkan kartu ke mesin ATM Mandiri.',
        'Pilih Bahasa.',
        'Masukkan PIN ATM.',
        'Pilih menu transaksi lainnya.',
        'Pilih menu "Transfer", lalu pilih ke rekening Mandiri.',
        'Masukkan nomor rekening yang dituju.',
        'Masukkan jumlah uang yang akan ditransfer.',
        'Layar ATM akan menampilkan data transaksi Anda, jika data sudah benar pilih "YA".',
        'Selesai, struk akan keluar dari mesin ATM.',
      ];
    return (
        <>
        <div className="pt-12 pl-56 pb-7">
        <h1 className="font-700 text-xl mb-6">Instruksi Pembayaran</h1>
        <div className="flex font-600 text-xl border-b-2 mb-4">
          <p className="mr-8 mb-2">ATM</p>
          <p className="mr-8">Internet Banking</p>
          <p>M-Banking</p>
        </div>
        <div>
          <ol className="list-decimal pl-6 font-400 text-base w-[395px] h-[264px]">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
        </>
    )
}

export default InstruksiPembayaran;