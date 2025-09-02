import { Link } from "react-router-dom";
import {
  Bars3Icon,
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  MapIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [openNavInMobile, setOpenNavInMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenNavInMobile = () => {
    setOpenNavInMobile(!openNavInMobile);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768 || width >= 1024) {
        setOpenDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* untuk laptop */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 flex-row items-center justify-between bg-white shadow-sm px-12 py-4 z-50">
        {/* icon jago uang */}
        <Link
          to={"/"}
          className="flex flex-row gap-3 justify-center items-center"
        >
          <div className="bg-gradient-to-br from-[#471CFF] to-[#471CFF]/70 w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
            <p className="text-white">J</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">JagonyaUang</p>
            <p className="text-sm text-[#471CFF]">By Rifki</p>
          </div>
        </Link>
        {/* end jagonya udang */}

        <div className="flex flex-row gap-6 items-center">
          <Link
            to={"/"}
            className={`${
              window.location.pathname == "/"
                ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                : "text-gray-600"
            } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-500 ease-in-out flex gap-2 items-center`}
          >
            <HomeIcon className="w-5 h-5 shrink-0" />
            Beranda
          </Link>

          <Link
            to={"/blog"}
            className={`${
              window.location.pathname == "/blog"
                ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                : "text-gray-600"
            } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-400 ease-in-out flex gap-2 items-center`}
          >
            <BookOpenIcon className="w-5 h-5 shrink-0" />
            Blog
          </Link>

          <Link
            to={"#testimonial"}
            className={`hover:bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out text-gray-600 flex gap-2 items-center`}
          >
            <ChatBubbleBottomCenterIcon className="w-5 h-5 shrink-0" />
            Testimonial
          </Link>

          <Link
            to={"/rute-keuangan"}
            className={`${
              window.location.pathname == "/rute-keuangan"
                ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                : "text-gray-600"
            } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-400 ease-in-out flex gap-2 items-center`}
          >
            <MapIcon className="w-5 h-5 shrink-0" />
            Rute Keuangan
          </Link>

          <div className="h-10 w-1 bg-gray-300"></div>

          <Button variant="primary" className="shadow-md hover:bg-[#471CFF]/70">
            Daftar
          </Button>
        </div>
      </div>

      {/* untuk tablet */}
      <div className="hidden md:flex lg:hidden items-center justify-between px-5 md:px-8 py-4 z-50">
        {/* icon jago uang */}
        <Link
          to={"/"}
          className="flex flex-row gap-3 justify-center items-center"
        >
          <div className="bg-gradient-to-br from-[#471CFF] to-[#471CFF]/70 w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
            <p className="text-white">J</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">JagonyaUang</p>
            <p className="text-sm text-[#471CFF]">By Rifki</p>
          </div>
        </Link>
        {/* end jagonya udang */}

        {openNavInMobile == true ? (
          <XMarkIcon
            className="w-6 h-6 text-gray-500 cursor-pointer"
            onClick={handleOpenNavInMobile}
          />
        ) : (
          <Bars3Icon
            className="w-6 h-6 text-gray-500 cursor-pointer"
            onClick={handleOpenNavInMobile}
          />
        )}

        {openNavInMobile == true && (
          <div className="z-50 absolute left-0 right-0 top-14 mt-2 bg-white rounded-b-lg">
            <div className="flex flex-col gap-2 px-4 py-4">
              <Link
                to={"/"}
                className={`${
                  window.location.pathname == "/"
                    ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-500 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-5 h-5 shrink-0" />
                  <span>Beranda</span>
                </div>
              </Link>

              <Link
                to={"/blog"}
                className={`${
                  window.location.pathname == "/blog"
                    ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-400 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <BookOpenIcon className="w-5 h-5 shrink-0" />
                  <span>Blog</span>
                </div>
              </Link>

              <Link
                to={"#testimonial"}
                className={`hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-300 ease-in-out text-gray-600`}
              >
                <div className="flex items-center gap-3">
                  <ChatBubbleBottomCenterIcon className="w-5 h-5 shrink-0" />
                  <span>Testimonial</span>
                </div>
              </Link>

              <Link
                to={"/rute-keuangan"}
                className={`${
                  window.location.pathname == "/rute-keuangan"
                    ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-400 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <MapIcon className="w-5 h-5 shrink-0" />
                  <span>Rute Keuangan</span>
                </div>
              </Link>

              <Button
                variant="primary"
                className="shadow-md hover:bg-[#471CFF]/70 w-full mt-2"
              >
                Daftar
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* untuk mobile */}
      <div className="flex md:hidden lg:hidden justify-between items-center px-5 py-4 bg-white relative z-50">
        {/* icon jago uang */}
        <Link to={"/"} className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#471CFF] to-[#471CFF]/70 w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
            <p className="text-white">J</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-medium">JagonyaUang</p>
            <p className="text-sm text-[#471CFF]">By Rifki</p>
          </div>
        </Link>
        {/* end jagonya udang */}

        {openNavInMobile == true ? (
          <XMarkIcon
            className="w-6 h-6 text-gray-500 cursor-pointer"
            onClick={handleOpenNavInMobile}
          />
        ) : (
          <Bars3Icon
            className="w-6 h-6 text-gray-500 cursor-pointer"
            onClick={handleOpenNavInMobile}
          />
        )}

        {openNavInMobile == true && (
          <div className="z-50 absolute left-0 right-0 top-14 mt-2 bg-white rounded-b-lg">
            <div className="flex flex-col gap-2 px-4 py-4">
              <Link
                to={"/"}
                className={`${
                  window.location.pathname == "/"
                    ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-500 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-5 h-5 shrink-0" />
                  <span>Beranda</span>
                </div>
              </Link>

              <Link
                to={"/blog"}
                className={`${
                  window.location.pathname == "/blog"
                    ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-400 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <BookOpenIcon className="w-5 h-5 shrink-0" />
                  <span>Blog</span>
                </div>
              </Link>

              <Link
                to={"#testimonial"}
                className={`hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-300 ease-in-out text-gray-600`}
              >
                <div className="flex items-center gap-3">
                  <ChatBubbleBottomCenterIcon className="w-5 h-5 shrink-0" />
                  <span>Testimonial</span>
                </div>
              </Link>

              <Link
                to={"/rute-keuangan"}
                className={`${
                  window.location.pathname == "/rute-keuangan"
                    ? "text-[#471CFF] bg-[#471CFF]/10 px-3 py-2 rounded-xl transition-all duration-300 ease-in-out"
                    : "text-gray-600"
                } text-[15px] hover:text-[#471CFF] hover:bg-[#471CFF]/10 block px-3 py-3 rounded-xl transition-all duration-400 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <MapIcon className="w-5 h-5 shrink-0" />
                  <span>Rute Keuangan</span>
                </div>
              </Link>

              <Button
                variant="primary"
                className="shadow-md hover:bg-[#471CFF]/70 w-full mt-2"
              >
                Daftar
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
