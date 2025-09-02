import { TypeAnimation } from "react-type-animation";
import GuestLayout from "../components/layout/Guestlayout";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function LandingPage() {
  return (
    <>
      <GuestLayout>
        <div className="lg:mt-24">
          {/* start home section */}
          <section className="flex md:flex-row flex-col-reverse justify-between items-center">
            {/* start div kiri */}
            <div className="flex flex-col gap-5 w-full">
              <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 text-balance">
                Apakah kamu <br />
                <span className="text-[#471CFF] inline-block lg:min-h-[2em] md:min-h-[2.5em] min-h-[2.5em]">
                  <TypeAnimation
                    sequence={[
                      "sulit mengatur keuangan?",
                      1000,
                      "sulit menabung secara konsisten?",
                      1000,
                      "sulit mencapai tujuan finansial?",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="text-gray-600 max-w-xl sm:text-sm md:text-sm lg:text-lg">
                JagonyaUang hadir sebagai platform edukasi finansial yang
                membantu kamu memahami, mengelola, dan merencanakan keuangan
                dengan cara yang lebih mudah, seru, dan relevan dengan kehidupan
                sehari-hari.
              </p>

              <div className="flex md:flex-row flex-col gap-5">
                <Button variant="primary" className="flex flex-row items-center gap-2" size="lg">
                  Coba tools kami
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white border-2 border-[#471CFF] rounded-md text-[#471CFF] flex flex-row items-center gap-2 hover:bg-[#471CFF] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  Rute Keuangan
                  <ChevronRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </Button>
              </div>
            </div>

            {/* start img */}
            <div className="w-full flex md:justify-end justify-center">
              <img
                src="assets/images/home_section_img.png"
                className="lg:w-[572px] lg:h-[572px] md:w-[300px] md:h-[300px] w-[280px] h-auto"
                alt=""
              />
            </div>
          </section>
        </div>
      </GuestLayout>
    </>
  );
}
