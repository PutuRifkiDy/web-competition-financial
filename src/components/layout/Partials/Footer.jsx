import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      {/* tampilan dekstop */}
      <footer className="bg-[#f7f7f7] md:px-12 px-5 py-10 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 lg:gap-40 pb-10 z-50">
          <div className="flex flex-col gap-5">
            {/* icon jago uang */}
            <div className="flex flex-row gap-3 items-center">
              <div className="bg-gradient-to-br from-[#471CFF] to-[#471CFF]/70 w-10 h-10 rounded-xl text-center flex justify-center items-center shadow-md">
                <p className="text-white">J</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xl font-medium">JagonyaUang</p>
                <p className="text-sm text-[#471CFF]">By Rifki</p>
              </div>
            </div>
            {/* end jagonya udang */}

            <p className="md:w-[320px] w-full text-gray-600">
              Platform edukasi finansial untuk membantu Anda merencanakan,
              mengelola, dan memahami keuangan pribadi dengan lebih bijak.
            </p>

            <div className="flex flex-row justify-start items-start gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-gray-600" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} className="text-gray-600" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter size={24} className="text-gray-600" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Navigasi</p>
            <a
              href="#"
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Beranda
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Rute Keuangan
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Blog
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="text-gray-600 flex flex-row items-center gap-1 group"
            >
              Testimonial
              <ChevronRightIcon className="w-4 h-4 shrink-0 text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Informasi</p>
            <a href="#" className="text-gray-600">
              Tentang Kami
            </a>
            <a href="#" className="text-gray-600">
              Syarat dan Ketentuan
            </a>
            <a href="#" className="text-gray-600">
              Kebijakan Privasi
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Bantuan</p>
            <a href="#" className="text-gray-600">
              Pusat Bantuan
            </a>
            <a href="#" className="text-gray-600">
              FAQ
            </a>
            <a href="#" className="text-gray-600">
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="w-full bg-gray-300 h-[2px]"></div>

        <div className="flex flex-row items-center justify-between pt-5">
          <p className="text-gray-600">Copyright ©2025 JagonyaUang</p>
          <p className="text-gray-600">Platform edukasi finansial</p>
        </div>
      </footer>
    </>
  );
}
