import Image from "next/image";
import Link from "next/link";
import hoodie from "/public/image/hoodie.avif";
import coat from "/public/image/coat.avif";
import jacket from "/public/image/jacket.avif";
import jeans from "/public/image/jeans.avif";
import shirt from "/public/image/shirt.avif";
import sleeves from "/public/image/sleeves.avif";
import suit from "/public/image/suit.avif";
import sweater from "/public/image/sweater.avif";
import tshirt from "/public/image/t-shirt.avif";

export default function Home() {
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

            <div className="flex items-center gap-4 justify-between mb-3">
              <Link
                href="/carabelanja"
                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
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
              </Link>
              <Link
                href=""
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              >
                CHAT ADMIN
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              SENSEI STORE
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              TERBARU! Cek koleksi toko sekarang untuk mendapatkan penampilan
              modis yang keren dan kekinian.Tampil beda dengan pakaian ini yang
              nyamannya kebangetan. Yuk, beli sekarang hanya di SENSEI storenya
              ya! ada barang menarik di sana
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <input
                  type="text"
                  placeholder="BAJU DAN CELANA"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> CARI BARANG </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="bg-white px-[14%] grid grid-cols-3 gap-5 mx-auto py-7">
        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk T-SHIRT "
          className="group block"
        >
          <Image
            src={hoodie}
            alt="img"
            width={1000}
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              T-SHIRT
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 500.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk JEANS "
          className="group block"
        >
          <Image
            src={coat}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              JEANS
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 700.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk SWEATER "
          className="group block"
        >
          <Image
            src={jacket}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              SWEATER
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 1.200.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk SHIRT "
          className="group block"
        >
          <Image
            src={jeans}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              SHIRT
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 600.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk JACKET "
          className="group block"
        >
          <Image
            src={shirt}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              JACKET
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 1.500.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk COAT "
          className="group block"
        >
          <Image
            src={sleeves}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              COAT
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 2.500.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk SLEEVES "
          className="group block"
        >
          <Image
            src={suit}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              SLEEVES
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 350.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk SUIT "
          className="group block"
        >
          <Image
            src={sweater}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              SUIT
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 5000.000</p>
          </div>
        </a>

        <a
          href="https://wa.me/6285856589162?text=SENSEI STORE saya mau beli produk HOODIE "
          className="group block"
        >
          <Image
            src={tshirt}
            alt="img"
            className="aspect-square w-full rounded object-cover"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              HOODIE
            </h3>

            <p className="mt-1 text-sm text-gray-700">Rp 800.000</p>
          </div>
        </a>
      </div>

      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-indigo-400 sm:justify-start font-bold">
              SENSEI STORE
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
