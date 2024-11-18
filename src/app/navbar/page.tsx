import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar flex justify-between bg-white text-black">
        <a href="#" className="navbar logo">
          SENSEI STORE
        </a>

        <div className="navbar-nav flex gap-3">
          <Link href="/">HOME</Link>
          <Link href="/carabelanja">TENTANG KAMI</Link>
          <Link href="#PRODUCTS">PRODUK</Link>
          <Link href="#CONTACS">KONTAK</Link>
          <Link href="#BLOG">BLOG</Link>
        </div>
      </nav>

      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          PROMO HINGGA 50%
          <a href="#" className="inline-block underline">
            BERLAKU UNTUK HINGGA HARI INI SAJA
          </a>
        </p>
      </div>
    </div>
  );
}
