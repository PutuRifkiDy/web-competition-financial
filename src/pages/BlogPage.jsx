import { ArrowUpRightIcon, ClockIcon } from "@heroicons/react/24/solid";
import GuestLayout from "../components/layout/Guestlayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function BlogPage() {
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <>
      <GuestLayout>
        {/* start blog section */}
        <section className="flex flex-col gap-5 mt-24 mb-24">
          <div className="flex flex-col gap-2 justify-center items-center w-full text-center">
            <div
              className="flex flex-row gap-2 items-center bg-[#471CFF]/10 rounded-lg py-2 px-3 text-[#471CFF]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="w-2 h-2 rounded-full bg-[#471CFF]"></div>
              <p className="font-medium">Artikel Finansial</p>
            </div>
            <p
              className="font-bold text-3xl"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Perluas Wawasan Dengan Artikel{" "}
              <span className="text-[#471CFF]">Edukatif</span>
            </p>
            <p
              className="text-gray-600 md:max-w-xl max-w-full text-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              Perluas wawasanmu dengan artikel-artikel edukatif tentang
              budgeting, investasi, dan strategi mengelola keuangan pribadi.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* card 1 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
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
            </Link>
            {/* End Card 1 */}
            {/* card 2 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
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
            </Link>
            {/* End Card 2 */}
            {/* card 3 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
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
            </Link>
            {/* End Card 3 */}
            {/* card 4 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                <img
                  src="/assets/images/artikel/article-4.jpg"
                  className="w-full md:h-[280px] h-auto hover:scale-110 transition-all duration-300 ease-in-out"
                  alt=""
                />
              </div>

              <div className="flex flex-row gap-2 mt-4">
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">keuangan keluarga</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">perencanaan</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">lifestyle</p>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-5">
                <h1 className="font-bold text-xl">
                  5 Cara Menyusun Dana Darurat untuk Keluarga
                </h1>
                <p className="line-clamp-3 text-gray-600">
                  Dana darurat adalah penyelamat ketika kondisi tak terduga
                  terjadi. Yuk kenali cara gampang menyiapkannya tanpa bikin
                  kantong kering.
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
            </Link>
            {/* End Card 4 */}
            {/* card 5 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                <img
                  src="/assets/images/artikel/article-5.jpg"
                  className="w-full md:h-[280px] h-auto hover:scale-110 transition-all duration-300 ease-in-out"
                  alt=""
                />
              </div>

              <div className="flex flex-row gap-2 mt-4">
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">utang</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">finansial sehat</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">tips</p>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-5">
                <h1 className="font-bold text-xl">
                  Strategi Cerdas Melunasi Utang Tanpa Pusing
                </h1>
                <p className="line-clamp-3 text-gray-600">
                  Utang sering bikin stres kalau nggak diatur. Temukan cara
                  praktis melunasi utang satu per satu dengan metode snowball
                  dan avalanche.
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
                  <p className="text-gray-600 ">Maya Lestari</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <ClockIcon className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-600">2 min read</p>
                </div>
              </div>
            </Link>
            {/* End Card 5 */}
            {/* card 6 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                <img
                  src="/assets/images/artikel/article-6.jpg"
                  className="w-full md:h-[280px] h-auto hover:scale-110 transition-all duration-300 ease-in-out"
                  alt=""
                />
              </div>

              <div className="flex flex-row gap-2 mt-4">
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">investasi</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">emas</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">generasi muda</p>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-5">
                <h1 className="font-bold text-xl">
                  Kenapa Investasi Emas Masih Jadi Favorit Anak Muda?
                </h1>
                <p className="line-clamp-3 text-gray-600">
                  Dari dulu sampai sekarang, emas selalu jadi pilihan aman untuk
                  investasi. Yuk pahami kelebihan dan kekurangannya sebelum
                  ikut-ikutan tren.
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
                  <p className="text-gray-600 ">Budi Santoso</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <ClockIcon className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-600">2 min read</p>
                </div>
              </div>
            </Link>
            {/* End Card 6 */}
            {/* card 7 */}
            <Link
              to={"/detail-blog"}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="overflow-hidden rounded-xl w-full sm:h-auto md:h-[200px] lg:h-[240px]">
                <img
                  src="/assets/images/artikel/article-7.jpg"
                  className="w-full md:h-[280px] h-auto hover:scale-110 transition-all duration-300 ease-in-out"
                  alt=""
                />
              </div>

              <div className="flex flex-row gap-2 mt-4">
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">gaya hidup</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">penghematan</p>
                </div>
                <div className="bg-gray-200 px-2 py-1 rounded-lg">
                  <p className="text-gray-500">daily finance</p>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-5">
                <h1 className="font-bold text-xl">
                  Trik Hemat Ala Anak Kos, Tetap Asik Tanpa Boros
                </h1>
                <p className="line-clamp-3 text-gray-600">
                  Hidup ngekos bukan berarti harus serba pas-pasan. Simak tips
                  sederhana biar tetap hemat tapi kehidupan sehari-hari tetap
                  nyaman.
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
            </Link>
            {/* End Card 7 */}
          </div>
        </section>
        {/* end blog section */}
      </GuestLayout>
    </>
  );
}
