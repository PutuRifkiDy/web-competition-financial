import GuestLayout from "@/components/layout/Guestlayout";
import {
  CalculatorIcon,
  ShieldCheckIcon,
  PresentationChartLineIcon,
  BuildingLibraryIcon,
  ShieldExclamationIcon,
  FlagIcon,
  ArrowTrendingUpIcon,
  GlobeEuropeAfricaIcon,
  BellIcon,
  LightBulbIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RuteKeuangan() {
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
    <GuestLayout>
      <section className="flex flex-col gap-5 mt-36 mb-24">
        <div className="flex flex-col gap-2 justify-center items-center w-full text-center">
          <div
            className="flex flex-row gap-2 items-center bg-[#471CFF]/10 rounded-lg py-2 px-3 text-[#471CFF]"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="w-2 h-2 rounded-full bg-[#471CFF]"></div>
            <p className="font-medium">Rute Keuangan</p>
          </div>
          <p
            className="font-bold text-3xl"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Rute Keuangan <span className="text-[#471CFF]">Edukatif</span>
          </p>
          <p
            className="text-gray-600 md:max-w-xl max-w-full text-lg"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Mulai perjalanan finansialmu dari sekarang. Bersama-sama, kita
            kelola uang dengan tenang dan konsisten untuk wujudkan impianmu.
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          <div
            className="flex flex-col gap-2 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="flex flex-row items-center justify-center relative border-2 border-[#3ccfe3] p-5 rounded-full">
              <CalculatorIcon className="w-24 h-24 text-[#3ccfe3]" />
              <div className="w-7 h-7 absolute bg-[#3ccfe3] rounded-full left-0 top-0 animate-pulse"></div>
            </div>
            <p className="text-[#3ccfe3] text-xl font-bold">1. Fondasi</p>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="flex flex-row items-center justify-center relative border-2 border-[#b172f8] p-5 rounded-full">
              <ShieldExclamationIcon className="w-24 h-24 text-[#b172f8]" />
              <div className="w-7 h-7 absolute bg-[#b172f8] rounded-full left-0 top-0 animate-pulse"></div>
            </div>
            <p className="text-[#b172f8] text-xl font-bold">2. Proteksi</p>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex flex-row items-center justify-center relative border-2 border-[#48bf93] p-5 rounded-full">
              <FlagIcon className="w-24 h-24 text-[#48bf93]" />
              <div className="w-7 h-7 absolute bg-[#48bf93] rounded-full left-0 top-0 animate-pulse"></div>
            </div>
            <p className="text-[#48bf93] text-xl font-bold">3. Perencanaan</p>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex flex-row items-center justify-center relative border-2 border-[#f3b65c] p-5 rounded-full">
              <ArrowTrendingUpIcon className="w-24 h-24 text-[#f3b65c]" />
              <div className="w-7 h-7 absolute bg-[#f3b65c] rounded-full left-0 top-0 animate-pulse"></div>
            </div>
            <p className="text-[#f3b65c] text-xl font-bold">4. Pertumbuhan</p>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="flex flex-row items-center justify-center relative border-2 border-[#f26969] p-5 rounded-full">
              <BuildingLibraryIcon className="w-24 h-24 text-[#f26969]" />
              <div className="w-7 h-7 absolute bg-[#f26969] rounded-full left-0 top-0 animate-pulse"></div>
            </div>
            <p className="text-[#f26969] text-xl font-bold">5. Legacy</p>
          </div>
        </div>

        <div
          className="flex flex-col mt-10 border-2 border-gray-200 rounded-xl"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="flex flex-row gap-5 bg-[#e2fafa] p-5">
            <div className="bg-[#ccedf0] w-14 h-14 flex items-center justify-center rounded-full">
              <CalculatorIcon className="w-6 h-6 text-[#3ccfe3]" />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <p className="font-bold text-lg">Kendalikan Uangmu</p>
                <div className="flex items-center px-3 py-1 bg-[#ccedf0] rounded-md">
                  <p className="text-sm text-[#13a4b7]">Fondasi</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Atur keluar-masuk uang yang bikin kamu ga bingung tiap akhir
                bulan.
              </p>
              <p className="text-sm text-[#471CFF] font-semibold">
                Kalau arus uang terkendali, hidup jadi lebih tenang dan
                terencana.
              </p>
              <p className="text-base text-muted-foreground italic font-medium mt-2">
                "Keuangan bukan tentang seberapa banyak yang kamu hasilkan, tapi
                seberapa bijak kamu mengelolanya."
              </p>
            </div>
          </div>

          {/* Start Fondasi */}
          <div className="bg-white grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {/* samping kiri */}
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#ccedf0] w-14 h-14 flex items-center justify-center rounded-full">
                  <GlobeEuropeAfricaIcon className="w-6 h-6 text-[#3ccfe3]" />
                </div>

                <p className="text-lg text-[#13a4b7] font-bold">
                  Yuk, Ambil Langkah Ini!
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">1</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Catat semua duit masuk dan keluar tiap hari, beneran ini
                    penting!
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">2</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Bikin anggaran bulanan yang realistis, sesuai gaya hidup
                    kamu.
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">3</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Pisahin rekening buat kebutuhan sama tabungan, jangan campur
                    aduk.
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">4</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Di akhir bulan, luangin waktu buat cek pengeluaran yang bisa
                    dipotong.
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">5</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Pake aplikasi keuangan biar pantauan cash flow jadi gampang.
                  </p>
                </div>
              </div>
            </div>
            {/* samping kanan */}
            <div className="flex flex-col gap-5 p-5">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#ccedf0] w-14 h-14 flex items-center justify-center rounded-full">
                  <BellIcon className="w-6 h-6 text-[#3ccfe3]" />
                </div>

                <p className="text-lg text-[#13a4b7] font-bold">
                  Cara berpikir yang bikin sukses
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-row items-center">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">
                      <LightBulbIcon className="w-4 h-4" />
                    </p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Catat semua duit masuk dan keluar tiap hari, beneran ini
                    penting!
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">
                      <LightBulbIcon className="w-4 h-4" />
                    </p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    Catat semua duit masuk dan keluar tiap hari, beneran ini
                    penting!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Fondasi */}

          {/* Sstart Langkah Langkah Praktis Untuk Sukses */}
          <div className="flex flex-col gap-5 bg-[#e2fafa] p-5">
            <div className="flex flex-row gap-3 items-center">
              <div className="bg-[#ccedf0] w-14 h-14 flex items-center justify-center rounded-full">
                <MapPinIcon className="w-6 h-6 text-[#3ccfe3]" />
              </div>

              <p className="text-lg text-[#13a4b7] font-bold">
                Langkah-Langkah Praktis untuk Sukses
              </p>
            </div>

            <div
              className="flex flex-row gap-5 w-full bg-white rounded-md items-center p-5"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <div className="bg-[#ccedf0] w-10 h-10 flex items-center justify-center rounded-full">
                <MapPinIcon className="w-6 h-6 text-[#3ccfe3]" />
              </div>
              <p className="text-foreground text-lg font-medium">
                Mulai catat semua transaksi, sekecil apapun—bahkan es kopi susu
                tiap pagi!
              </p>
            </div>
            <div
              className="flex flex-row gap-5 w-full bg-white rounded-md items-center p-5"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="bg-[#ccedf0] w-10 h-10 flex items-center justify-center rounded-full">
                <MapPinIcon className="w-6 h-6 text-[#3ccfe3]" />
              </div>
              <p className="text-foreground text-lg font-medium">
                Sisihkan minimal 20% gaji untuk ditabung sebelum dipakai
                belanja.
              </p>
            </div>
            <div
              className="flex flex-row gap-5 w-full bg-white rounded-md items-center p-5"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="bg-[#ccedf0] w-10 h-10 flex items-center justify-center rounded-full">
                <MapPinIcon className="w-6 h-6 text-[#3ccfe3]" />
              </div>
              <p className="text-foreground text-lg font-medium">
                Mulai catat semua transaksi, sekecil apapun—bahkan es kopi susu
                tiap pagi!
              </p>
            </div>
            <div
              className="flex flex-row gap-5 w-full bg-white rounded-md items-center p-5"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="bg-[#ccedf0] w-10 h-10 flex items-center justify-center rounded-full">
                <MapPinIcon className="w-6 h-6 text-[#3ccfe3]" />
              </div>
              <p className="text-foreground text-lg font-medium">
                Download aplikasi keuangan yang cocok sama gaya hidupmu.
              </p>
            </div>
            <div
              className="flex flex-row gap-5 w-full bg-white rounded-md items-center p-5"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <div className="bg-[#ccedf0] w-10 h-10 flex items-center justify-center rounded-full">
                <MapPinIcon className="w-6 h-6 text-[#3ccfe3]" />
              </div>
              <p className="text-foreground text-lg font-medium">
                Akhir bulan, luangkan waktu 30 menit buat evaluasi arus kas.
              </p>
            </div>
          </div>

          {/* start tips */}
          <div className="bg-white grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-5 gap-5 ">
            {/* samping kiri */}
            <div
              className="flex flex-col gap-5 p-5 border-2 border-gray-200 rounded-xl"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#ccedf0] w-14 h-14 flex items-center justify-center rounded-full">
                  <GlobeEuropeAfricaIcon className="w-6 h-6 text-[#3ccfe3]" />
                </div>

                <p className="text-lg text-[#13a4b7] font-bold">
                  Tips Dari Teman Seperjuangan
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">1</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Mulai dari yang kecil aja dulu. Aku juga dulu gitu,
                    pelan-pelan tapi konsisten!”
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">2</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Aku selalu pantau kemajuan tiap minggu, rasanya kayak main
                    game ngeliat progress bar naik!”
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">3</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Awal bulan, luangin 30 menit buat evaluasi rencana. Worth
                    it banget!”
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">4</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Sejak pake app finance, aku jadi ngerasa punya personal
                    assistant!”
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">5</p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Ajak pasangan atau keluarga buat diskusi keuangan bareng,
                    jadi seru dan nggak stress!”
                  </p>
                </div>
              </div>
            </div>
            {/* samping kanan */}
            <div
              className="flex flex-col gap-5 p-5 border-2 border-gray-200 rounded-xl"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#ccedf0] w-14 h-14 flex items-center justify-center rounded-full">
                  <BellIcon className="w-6 h-6 text-[#3ccfe3]" />
                </div>

                <p className="text-lg text-[#13a4b7] font-bold">
                  Pengingat Sahabat
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-row items-center">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">
                      <LightBulbIcon className="w-4 h-4" />
                    </p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Eh, inget ya! Jangan buru-buru lompat ke fase berikutnya
                    sebelum yang ini bener-bener nyaman!”
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#13a4b7] ">
                    <p className="text-sm text-white font-semibold">
                      <LightBulbIcon className="w-4 h-4" />
                    </p>
                  </div>
                  <p className="text-lg text-gray-500 ml-2">
                    “Eh, inget ya! Jangan buru-buru lompat ke fase berikutnya
                    sebelum yang ini bener-bener nyaman!”
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Fondasi */}
        </div>
      </section>
    </GuestLayout>
  );
}
