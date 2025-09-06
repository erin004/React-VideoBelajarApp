import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Card from "../components/card";
import Footer from "../components/footer";
import headerImg from "../assets/header.jpg";
import { courses as initialCourses } from "../data/courses";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [courseList, setCourseList] = useState(initialCourses);

  // cek localStorage saat pertama kali render
  useEffect(() => {
    const saved = localStorage.getItem("courses");
    if (saved) {
      setCourseList(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="bg-[#FEFDF6]">
      <Navbar />

      {/* Hero */}
      <section className="mt-10 px-4 sm:px-6">
        <div className="w-full max-w-[1200px] mx-auto relative rounded-[10px] overflow-hidden h-[400px]">
          <img
            src={headerImg}
            alt="Hero Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]"></div>
          <div className="relative z-10 w-full px-6 md:px-[150px] py-10 flex flex-col items-center text-center h-full justify-center">
            <h2 className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight font-secondary">
              Revolusi Pembelajaran: <br className="hidden sm:block" />
              Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h2>
            <p className="text-white text-[14px] sm:text-[16px] mt-4 max-w-4xl font-primary">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <button className="mt-6 bg-[#3ECF4C] text-white text-[14px] sm:text-[16px] font-bold w-full sm:w-[369px] h-[42px] px-[26px] py-[10px] rounded-[10px] hover:bg-[#36b943] transition flex items-center justify-center font-primary">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </section>

      {/* Kategori Section */}
      <section className="mt-6 sm:mt-12 px-4 sm:px-6">
        <div className="w-full max-w-[1200px] mx-auto">
          <h3 className="text-[24px] sm:text-[32px] font-semibold mb-2 sm:mb-1 font-secondary leading-snug">
            Koleksi Video Pembelajaran Unggulan
          </h3>
          <p className="text-[14px] sm:text-[16px] font-medium text-gray-500 mb-4 sm:mb-6 font-primary leading-relaxed">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          {/* Button Add Course */}
          <Link
            to="/manage"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Add Course
          </Link>

          {/* Tabs / Filter Button */}
          <div className="flex flex-wrap gap-4 sm:gap-12 text-[14px] sm:text-[16px] font-medium text-gray-500 font-primary mt-6">
            <button className="pb-2 border-b-4 border-[#F64920] text-[#F64920]">
              Semua Kelas
            </button>
            <button className="pb-2">Pemasaran</button>
            <button className="pb-2">Desain</button>
            <button className="pb-2">Pengembangan Diri</button>
            <button className="pb-2">Bisnis</button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mt-8 px-4 sm:px-6">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courseList.map((course) => (
            <Card key={course.id} {...course} />
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
