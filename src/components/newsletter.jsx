import Banner from "../assets/banner-cta.jpg";

const Newsletter = () => {
  return (
    <section className="mt-12 px-4 sm:px-6">
        <div className="w-full max-w-[1200px] h-[400px] mx-auto relative overflow-hidden rounded-[4px]">
        {/* Gambar background */}
        <img
        src={Banner}
        alt="Newsletter"
        className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay & Konten */}
            <div className="relative z-10 bg-[rgba(0,0,0,0.8)] w-full h-full flex items-center justify-center text-center text-white px-4">
            <div className="w-full max-w-[525px] flex flex-col items-center">
                <h5 className="uppercase text-sm font-medium tracking-wide mb-2 text-[#ffffffb0] font-primary">
                Newsletter
                </h5>
                <h2 className="text-[24px] sm:text-[32px] font-bold font-secondary mb-2">
                Mau Belajar Lebih Banyak?
                </h2>
                <p className="text-sm sm:text-base text-gray-200 mb-6 font-primary">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
                spesial dari program-program terbaik hariesok.id
                </p>
                {/* Form */}
                <form className="w-full">
                {/* Desktop layout */}
                <div className="hidden sm:flex relative w-full">
                    <input
                    type="email"
                    placeholder="Masukkan Emailmu"
                    className="w-full rounded-[12px] py-4 px-5 pr-[140px] font-primary text-[16px] text-black bg-white focus:outline-none"
                    />
                    <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-[#FFBD3A] hover:bg-yellow-400 text-white font-bold font-primary text-[16px] px-6 rounded-[10px] transition"
                    >
                    Subscribe
                    </button>
                </div>
                {/* Mobile layout */}
                <div className="flex sm:hidden flex-col gap-3 w-full">
                    <input
                    type="email"
                    placeholder="Masukkan Emailmu"
                    className="w-full text-center rounded-[12px] py-4 px-5 text-sm text-black bg-white focus:outline-none"
                    />
                    <button
                    type="submit"
                    className="w-full bg-[#FFBD3A] hover:bg-yellow-400 text-white font-semibold text-sm py-3 rounded-[10px] transition"
                    >
                    Subscribe
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </section>
  );
};
export default Newsletter;