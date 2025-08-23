import logo from "../assets/Logo.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-white px-6 pt-12 pb-6 border-t mb-4">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
    {/* Info Kiri */}
    <div>
      <img src={logo} alt="" />
      <p className="mt-4 font-bold text-gray-700 font-primary whitespace-nowrap text-[14px] md:text-[18px]">
        Gali Potensi Anda Melalui Pembelajaran <br /> Video di hariesok.id!
      </p>
      <p className="mt-3 font-primary text-[14px] md:text-[16px] whitespace-nowrap">
        Jl. Usman Effendi No. 50 Lowokwaru, Malang
      </p>
      <p className="mt-4 font-primary text-[14px] md:text-[16px]">
        +62-877-7123-1234
      </p>
    </div>
    {/* Info Navigasi */}
    <div className="md:col-span-3 flex flex-col gap-6 md:flex-row md:justify-end md:gap-12 text-[14px] md:text-[16px] font-primary">
      {/* Kategori */}
      <div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-gray-800">Kategori</h4>
          <svg
            className="w-4 h-4 text-gray-800 md:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <ul className="hidden md:block space-y-3 mt-3">
          <li>Digital &amp; Teknologi</li>
          <li>Pemasaran</li>
          <li>Manajemen Bisnis</li>
          <li>Pengembangan Diri</li>
          <li>Desain</li>
        </ul>
      </div>
      {/* Perusahaan */}
      <div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-gray-800">Perusahaan</h4>
          <svg
            className="w-4 h-4 text-gray-800 md:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <ul className="hidden md:block space-y-3 mt-3">
          <li>Tentang Kami</li>
          <li>FAQ</li>
          <li>Kebijakan Privasi</li>
          <li>Ketentuan Layanan</li>
          <li>Bantuan</li>
        </ul>
      </div>
      {/* Komunitas */}
      <div>
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-gray-800">Komunitas</h4>
          <svg
            className="w-4 h-4 text-gray-800 md:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <ul className="hidden md:block space-y-3 mt-3">
          <li>Tips Sukses</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Sosial & Copyright */}
  <div className="max-w-[1200px] mx-auto mt-6 sm:mt-10 border-t-2 pt-4 text-[14px] md:text-[16px] font-primary text-gray-500">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="flex gap-4 mb-2 sm:mb-0 sm:order-2">
        <a href="#">
          <img
            src={icon1}
            alt="LinkedIn"
            className="w-[35px] h-[35px]"
          />
        </a>
        <a href="#">
          <img
            src={icon2}
            alt="Facebook"
            className="w-[35px] h-[35px]"
          />
        </a>
        <a href="#">
          <img
            src={icon3}
            alt="Instagram"
            className="w-[35px] h-[35px]"
          />
        </a>
        <a href="#">
          <img
            src={icon4}
            alt="Twitter"
            className="w-[35px] h-[35px]"
          />
        </a>
      </div>
      <p className="text-left sm:text-center">
        © 2023 Gerobak Sayur All Rights Reserved.
      </p>
    </div>
  </div>
</footer>

  );
};
export default Footer;