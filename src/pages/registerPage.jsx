import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SSOButton from "../components/ssoButton";
import Navbar from "../components/navbar";
import flag from "../assets/flag.png"; // pastikan ada di folder assets

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Navbar showUser={false} />
      <main className="min-h-screen bg-[#FFFCF0] flex flex-col items-center justify-start pt-12 px-4 mb-14">
        <div className="bg-white border rounded-[4px] shadow-sm w-full max-w-[590px] px-6 py-8 sm:p-9">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800 font-secondary">
            Pendaftaran Akun
          </h1>
          <p className="text-center text-gray-500 text-sm sm:text-base mt-1">
            Yuk, daftarkan akunmu sekarang juga!
          </p>

          <form className="mt-6 space-y-4">
            <InputField id="name" label="Nama Lengkap" />
            <InputField id="email" type="email" label="E-Mail" />

            {/* No. HP dengan bendera */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[14px] sm:text-[16px] font-primary text-[#333333AD] mb-1"
              >
                No. Hp <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                {/* Select dengan bendera + kode negara */}
                <div className="flex items-center border rounded-md overflow-hidden">
                  <div className="bg-[#3A35411F] px-2 py-3 flex items-center">
                    <img
                      src={flag}
                      alt="ID"
                      className="w-5 h-4 object-cover"
                    />
                  </div>
                  <select className="appearance-none px-2 py-1 text-[14px] sm:text-[16px] font-primary focus:outline-none">
                    <option value="+62">+62</option>
                  </select>
                  <div className="pr-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Input Nomor HP */}
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="flex-1 border rounded-md px-4 py-2 text-[14px] sm:text-[16px] font-primary focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </div>

            {/* Password dengan eye icon */}
            <div className="relative">
              <InputField
                id="password"
                type={showPassword ? "text" : "password"}
                label="Kata Sandi"
              />
              <div
                className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  // 👁 eye open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // 👁 eye slash
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.957 9.957 0 012.042-3.33M6.477 6.477A9.955 9.955 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.957 9.957 0 01-4.113 5.063M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Confirm Password dengan eye icon */}
            <div className="relative">
              <InputField
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                label="Konfirmasi Kata Sandi"
              />
              <div
                className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  // 👁 eye open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // 👁 eye slash
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.957 9.957 0 012.042-3.33M6.477 6.477A9.955 9.955 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.957 9.957 0 01-4.113 5.063M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Button variant="primary">Daftar</Button>
              <Button variant="secondary">Masuk</Button>
            </div>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm sm:text-base">atau</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <SSOButton text="Daftar dengan Google" />
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
