import { ArrowUpRightIcon, ClockIcon } from "@heroicons/react/24/solid";
import GuestLayout from "../components/layout/Guestlayout";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <>
      <GuestLayout>
        {/* start blog section */}
        <section className="flex flex-col gap-5 mt-24 mb-24">
          <div className="flex flex-col gap-2 justify-center items-center w-full text-center">
            <div className="flex flex-row gap-2 items-center bg-[#471CFF]/10 rounded-lg py-2 px-3 text-[#471CFF]">
              <div className="w-2 h-2 rounded-full bg-[#471CFF]"></div>
              <p className="font-medium">Artikel Finansial</p>
            </div>
            <p className="font-bold text-3xl">
              Perluas Wawasan Dengan Artikel{" "}
              <span className="text-[#471CFF]">Edukatif</span>
            </p>
            <p className="text-gray-600 md:max-w-xl max-w-full text-lg">
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
                  bikin anggaran bulanan yang bikin pengeluaran lebih terkontrol
                  tanpa ribet.
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
        </section>
        {/* end blog section */}
      </GuestLayout>
    </>
  );
}
