export default function carabelanja() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                SENSEI STORE
              </h1>
              <p className="mt-1.5 text-sm text-gray-500">
                BELANJA BARANG TERMURAH DAN TERLENGKAP
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium">CARA BELANJA</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              <button
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                CHAT ADMIN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-gray-50">
        <details
          className="group p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">Cara Belanja Online di Website Kami</h2>
            <span className="relative w-5 h-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            <ul>
              <li>
                1. Kunjungi Website: Masuk ke website resmi kami di
                alamatwebsite.com.
              </li>
              <li>
                2. Pilih Produk: Telusuri berbagai pilihan baju dan celana di
                katalog kami.
              </li>
              <li>
                3. Klik Produk dan Lihat Detail: Klik pada produk yang
                diinginkan.
              </li>
              <li>
                4. Pilih Ukuran dan Warna: Pastikan Anda memilih ukuran dan
                warna yang sesuai.
              </li>
              <li>
                5. Tambahkan ke Keranjang: Klik tombol “Tambah ke Keranjang”.
              </li>
              <li>
                6. Periksa Keranjang Belanja: Periksa kembali produk yang telah
                dipilih.
              </li>
              <li>
                7. Lanjutkan ke Pembayaran: Klik tombol “Lanjutkan ke
                Pembayaran”.
              </li>
              <li>
                8. Masukkan Informasi Pengiriman: Isi data pengiriman dengan
                lengkap.
              </li>
              <li>
                9. Pilih Metode Pembayaran: Pilih metode pembayaran yang
                tersedia.
              </li>
              <li>10. Konfirmasi Pesanan: Klik “Konfirmasi Pesanan”.</li>
              <li>
                11. Selesaikan Pembayaran: Lakukan pembayaran sesuai instruksi.
              </li>
              <li>
                12. Konfirmasi Pembayaran (jika perlu): Unggah bukti pembayaran
                jika diperlukan.
              </li>
              <li>
                13. Tunggu Konfirmasi dan Pengiriman: Anda akan menerima
                notifikasi pesanan diproses.
              </li>
              <li>
                14. Lacak Pesanan: Gunakan fitur pelacakan untuk memantau status
                pengiriman.
              </li>
            </ul>

            <ul className="mt-10">
              <li>
                {" "}
                1. Testimoni Pelanggan: “Kami bangga menjadi pilihan ribuan
                pelanggan yang puas! Lihat testimoni mereka dan temukan mengapa
                produk kami menjadi favorit.”
              </li>
              <li>
                {" "}
                2. Kualitas Terjamin: “Produk kami dibuat dari bahan berkualitas
                tinggi dan melalui proses seleksi ketat. Kami menjamin
                kenyamanan dan daya tahan setiap produk yang kami tawarkan.”
              </li>
              <li>
                {" "}
                3. Garansi dan Keamanan: “Belanja tanpa khawatir! Kami
                memberikan jaminan pengembalian dana dan garansi produk untuk
                kenyamanan berbelanja Anda.”
              </li>
              <li>
                {" "}
                4. Ulasan Positif: “Dengan rating 4.9/5 di berbagai platform,
                kami telah melayani pelanggan setia dengan produk yang
                memuaskan. Kepercayaan Anda adalah prioritas kami.”
              </li>
              <li>
                {" "}
                5. Transparansi Produk: “Kami selalu jujur tentang bahan,
                ukuran, dan kualitas produk kami. Detail lengkap tersedia di
                deskripsi, sehingga Anda bisa yakin sebelum membeli.”
              </li>
              <li>
                {" "}
                6. Layanan Pelanggan Terbaik: “Tim layanan pelanggan kami siap
                membantu Anda 24/7. Jika ada pertanyaan atau keluhan, kami
                selalu ada untuk mendukung dan memastikan pengalaman belanja
                Anda menyenangkan.”
              </li>
              <li>
                {" "}
                7. Produk Asli dan Original: “Kami menjamin keaslian produk.
                Semua baju dan celana yang kami jual adalah original dengan
                kualitas premium.”
              </li>
            </ul>
          </p>
        </details>
        <details className="group bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">Informasi Tambahan</h2>
            <span className="relative w-5 h-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700">
            Informasi tambahan terkait layanan pelanggan, ulasan positif,
            kualitas terjamin, dan sebagainya.
          </p>
        </details>
      </div>
    </div>
  );
}
