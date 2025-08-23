import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SSOButton from "../components/ssoButton";
import Navbar from "../components/navbar";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar showUser={false} />
      <main className="min-h-screen bg-[#FFFCF0] flex flex-col items-center justify-start pt-16 px-4">
        <div className="bg-white border rounded-[4px] shadow-sm w-full max-w-[590px] px-6 py-8 sm:p-9">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800">
            Masuk ke Akun
          </h1>
          <p className="text-center text-gray-500 text-sm sm:text-base mt-1">
            Yuk, lanjutin belajarmu di <strong>videobelajar</strong>.
          </p>
          <form className="mt-6 relative">
            <InputField id="email" type="email" label="E-Mail" />

            {/* Input Password + Eye Icon */}
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
                  // 👁️ eye open
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
                  // eye icon
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

            <div className="text-right mb-6">
              <a
                href="#"
                className="sm:text-[16px] font-medium font-primary text-gray-500 hover:underline block sm:hidden text-[14px]"
              >
                Lupa Password?
              </a>
              <a
                href="#"
                className="hidden sm:block text-[16px] font-medium font-primary text-gray-500 hover:underline"
              >
                Lupa Password?
              </a>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="primary">Masuk</Button>
              <Button variant="secondary">Daftar</Button>
            </div>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm sm:text-base">atau</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <SSOButton text="Masuk dengan Google" />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
