import { TypeAnimation } from "react-type-animation";
import GuestLayout from "../components/layout/Guestlayout";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRightIcon,
  BoltIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

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
                      "belum punya dana darurat?",
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
                <Button
                  variant="primary"
                  className="flex flex-row items-center gap-2"
                  size="lg"
                >
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
          {/* end home section */}

          {/* start about section */}
          <section className="flex flex-col gap-5 mt-24">
            <div className="flex flex-col gap-2 justify-center items-center w-full text-center">
              <div className="flex flex-row gap-2 items-center bg-[#471CFF]/10 rounded-lg py-2 px-3 text-[#471CFF]">
                <div className="w-2 h-2 font-medium rounded-full bg-[#471CFF]"></div>
                <p className="font-medium">JagonyaUang Ada untuk Kamu</p>
              </div>
              <p className="text-gray-600 md:max-w-xl max-w-full">
                JagonyaUang hadir sebagai sahabat finansialmu. Kami percaya
                kalau setiap orang bisa mengatur uang dengan cara yang lebih
                simpel, menyenangkan, dan sesuai dengan tujuan hidup
                masing-masing.
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {/* card 1 */}
              <div className="flex flex-col gap-3 rounded-xl border-2 border-gray-200 p-5 hover:-translate-y-3 transition-all duration-300 ease-in-out group">
                <div className="flex justify-center items-center bg-emerald-100 p-3 w-fit rounded-lg">
                  <BoltIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-lg font-medium group-hover:font-semibold transition-all duration-300 ease-in-out">
                  Fitur Seru & Bermanfaat
                </p>
                <p className="text-md text-gray-600">
                  Mulai dari kalkulator anggaran, simulasi tabungan, sampai
                  perencana dana darurat — semua kami buat supaya kamu bisa
                  lebih mudah memahami kondisi finansialmu dan bikin langkah
                  yang tepat ke depan.
                </p>
                <div className="h-[4px] w-36 bg-emerald-600 mt-2 mb-2 rounded-xl group-hover:w-48 transition-all duration-300 ease-in-out"></div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col gap-3 rounded-xl border-2 border-gray-200 p-5 hover:-translate-y-3 transition-all duration-300 ease-in-out group">
                <div className="flex justify-center items-center  bg-[#471CFF]/20 p-3 w-fit rounded-lg">
                  <HomeIcon className="w-8 h-8 text-[#471CFF]" />
                </div>
                <p className="text-lg font-medium group-hover:font-semibold transition-all duration-300 ease-in-out">
                  Ruang Diskusi Keuangan
                </p>
                <p className="text-md text-gray-600">
                  JagonyaUang bukan cuma soal angka. Kami ingin jadi tempat kamu
                  berbagi cerita, mendapatkan insight, dan berdiskusi soal
                  keuangan dengan cara yang dekat, hangat, dan relevan dengan
                  kehidupan sehari-hari.
                </p>
                <div className="h-[4px] w-36 bg-[#471CFF]/80 mt-2 mb-2 rounded-xl group-hover:w-48 transition-all duration-300 ease-in-out"></div>
              </div>
              {/* card 3 */}
              <div className="flex flex-col gap-3 rounded-xl border-2 border-gray-200 p-5 hover:-translate-y-3 transition-all duration-300 ease-in-out group">
                <div className="flex justify-center items-center  bg-[#933cf7]/20 p-3 w-fit rounded-lg">
                  <BookOpenIcon className="w-8 h-8 text-[#933cf7]" />
                </div>
                <p className="text-lg font-medium group-hover:font-semibold transition-all duration-300 ease-in-out">
                  Belajar Jadi Lebih Ringan
                </p>
                <p className="text-md text-gray-600">
                  Nggak usah takut keuangan itu rumit. Di JagonyaUang, semua
                  materi disajikan dengan gaya santai, interaktif, dan gampang
                  dipraktikkan, supaya belajar finansial terasa natural dan
                  nggak bikin pusing.
                </p>
                <div className="h-[4px] w-36 bg-[#933cf7]/80 mt-2 mb-2 rounded-xl group-hover:w-48 transition-all duration-300 ease-in-out"></div>
              </div>
            </div>
          </section>
          {/* end about section */}

          {/* start blog section */}
          <section className="flex flex-col gap-5 mt-24">
            <div className="flex flex-col gap-2 justify-center items-center w-full text-center">
              <div className="flex flex-row gap-2 items-center bg-[#471CFF]/10 rounded-lg py-2 px-3 text-[#471CFF]">
                <div className="w-2 h-2 rounded-full bg-[#471CFF]"></div>
                <p className="font-medium">Artikel Finansial</p>
              </div>
              <p className="text-gray-600 md:max-w-xl max-w-full">
                Perluas wawasanmu dengan artikel-artikel edukatif tentang
                budgeting, investasi, dan strategi mengelola keuangan pribadi.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {/* card 1 */}
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                  <img
                    src="/assets/images/artikel/article-1.jpg"
                    className="w-full hover:scale-110 transition-all duration-300 ease-in-out"
                    alt=""
                  />
                </div>

                <div className="flex flex-row gap-2 mt-4">
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">budgeting</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">tips</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">finansial</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-5">
                  <h1 className="font-bold text-xl">
                    Cara Simpel Atur Keuangan Pribadi Biar Gak Boncos
                  </h1>
                  <p className="line-clamp-3 text-gray-600">
                    Pernah merasa gaji cepat habis? Yuk pelajari trik sederhana
                    bikin anggaran bulanan yang bikin pengeluaran lebih
                    terkontrol tanpa ribet.
                  </p>
                </div>

                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="overflow-hidden rounded-full w-10 h-10">
                      <img
                        src="assets/images/artikel/people-1.png"
                        className="w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
                        alt=""
                      />
                    </div>
                    <p className="text-gray-600 ">Putu Rifki Dirkayuda</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ClockIcon className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-600">2 min read</p>
                  </div>
                </div>
              </div>
              {/* End Card 1 */}
              {/* card 2 */}
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                  <img
                    src="/assets/images/artikel/article-2.jpg"
                    className="w-full hover:scale-110 transition-all duration-300 ease-in-out"
                    alt=""
                  />
                </div>

                <div className="flex flex-row gap-2 mt-4">
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">investasi</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">pemula</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">literasi</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-5">
                  <h1 className="font-bold text-xl">
                    Investasi Saham vs Reksadana: Mana yang Cocok Buat Kamu?
                  </h1>
                  <p className="line-clamp-3 text-gray-600">
                    Bingung pilih antara saham atau reksadana? Artikel ini bantu
                    kamu pahami perbedaan keduanya supaya bisa pilih investasi
                    sesuai tujuan.
                  </p>
                </div>

                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="overflow-hidden rounded-full w-10 h-10">
                      <img
                        src="assets/images/artikel/people-1.png"
                        className="w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
                        alt=""
                      />
                    </div>
                    <p className="text-gray-600 ">Siti Rahma</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ClockIcon className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-600">2 min read</p>
                  </div>
                </div>
              </div>
              {/* End Card 2 */}
              {/* card 3 */}
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                  <img
                    src="/assets/images/artikel/article-3.jpg"
                    className="w-full md:h-[280px] h-auto hover:scale-110 transition-all duration-300 ease-in-out"
                    alt=""
                  />
                </div>

                <div className="flex flex-row gap-2 mt-4">
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">gen-z</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">menabung</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-1 rounded-lg">
                    <p className="text-gray-500">menabung</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-5">
                  <h1 className="font-bold text-xl">
                    Gen-Z Bisa Kaya: Tips Menabung dari Usia Muda
                  </h1>
                  <p className="line-clamp-3 text-gray-600">
                    Anak muda sering dikira boros, padahal kalau dibiasakan
                    menabung sejak awal, kamu bisa punya fondasi finansial yang
                    kuat di masa depan.
                  </p>
                </div>

                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="overflow-hidden rounded-full w-10 h-10">
                      <img
                        src="assets/images/artikel/people-1.png"
                        className="w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
                        alt=""
                      />
                    </div>
                    <p className="text-gray-600 ">Dian Putri</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <ClockIcon className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-600">2 min read</p>
                  </div>
                </div>
              </div>
              {/* End Card 3 */}
            </div>

            {/* start button selengkapnya */}
            <div className="flex justify-center items-center mt-5">
              <Button
                variant="primary"
                size="lg"
                className="animate-bounce w-fit flex justify-enter items-center"
              >
                Baca Selengkapnya
              </Button>
            </div>
          </section>
          {/* end blog section */}
        </div>
      </GuestLayout>
    </>
  );
}
