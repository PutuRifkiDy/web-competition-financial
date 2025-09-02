import GuestLayout from "@/components/layout/Guestlayout";
import { Button } from "@/components/ui/button";
import {
    ChatBubbleLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  HomeIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function DetailBlogPage() {
  return (
    <>
      <GuestLayout>
        <section className="mt-36 flex flex-col">
          <div className="flex flex-row gap-3 items-center">
            <HomeIcon className="w-4 h-4 text-gray-600" />
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
            <Link to="/blog" className="text-gray-600 font-medium text-lg">
              Blog
            </Link>
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
            <p className="text-gray-600 font-bold text-lg">Detail Blog</p>
          </div>

          <p className="font-bold text-3xl mt-5 text-[#471CFF]">
            Apa itu Dana Darurat dan Kenapa Penting?
          </p>

          <div className="flex flex-row gap-5 items-center mt-5">
            <div className="flex flex-row gap-3 items-center">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-200">
                <img
                  src="/assets/images/artikel/people-1.png"
                  className="w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
                  alt=""
                />
              </div>
              <p className="text-gray-600 font-medium text-sm">Putu Rifki</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <ClockIcon className="w-5 h-5 text-gray-400" />
              <p className="text-gray-600 font-medium text-sm">2 min read</p>
            </div>

            <p className="text-gray-600 font-medium text-sm">3 Desember 2024</p>
          </div>

          {/* Garis */}
          <div className="w-full h-[1px] bg-gray-200 mt-5"></div>

          <div className="flex flex-row gap-2 mt-5">
            <p className="text-gray-600 font-medium text-lg">Tag: </p>

            <div className="bg-gray-100 px-2 py-1 rounded-lg flex flex-row gap-2 items-center">
              <TagIcon className="w-4 h-4 text-gray-500" />
              <p className="text-gray-500">investasi</p>
            </div>
            <div className="bg-gray-100 px-2 py-1 rounded-lg flex flex-row gap-2 items-center">
              <TagIcon className="w-4 h-4 text-gray-500" />
              <p className="text-gray-500">emas</p>
            </div>
            <div className="bg-gray-100 px-2 py-1 rounded-lg flex flex-row gap-2 items-center">
              <TagIcon className="w-4 h-4 text-gray-500" />
              <p className="text-gray-500">generasi muda</p>
            </div>
          </div>

          <div className="w-full md:h-[500px] h-auto overflow-hidden rounded-xl mt-5">
            <img
              src="/assets/images/artikel/article-6.jpg"
              className="w-full h-auto object-cover object-center hover:scale-110 transition-all duration-300 ease-in-out"
              alt=""
            />
          </div>

          <p className="text-lg text-muted-foreground mt-5 mb-3 leading-relaxed">
            Survei Katadata Insight Center tahun 2023 menemukan bahwa{" "}
            <span className="italic">
              hanya 1 dari 3 masyarakat Indonesia yang memiliki dana darurat
              memadai
            </span>{" "}
            [Sumber: katadata.co.id]. Padahal, dana darurat berfungsi sebagai
            “jaring pengaman” saat terjadi hal tak terduga seperti kehilangan
            pekerjaan, sakit, atau kebutuhan mendesak lainnya.
          </p>

          <div className="flex flex-col gap-5 mt-5">
            <p className="text-2xl font-bold text-foreground">
              Berapa Besar Dana Darurat yang Ideal?
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Besaran dana darurat yang ideal sebenarnya berbeda-beda,
              tergantung kondisi hidup seseorang.{" "}
              <span className="italic">Financial Planning Standards Board</span>{" "}
              (FPSB) merekomendasikan, bagi individu lajang, dana darurat
              sebaiknya mencakup tiga hingga enam kali pengeluaran bulanan. Bagi
              pasangan menikah tanpa anak, jumlahnya naik menjadi enam kali
              pengeluaran bulanan. Sedangkan untuk keluarga dengan anak,
              kisarannya bisa mencapai enam hingga dua belas kali pengeluaran
              bulanan. Misalnya, jika pengeluaran bulananmu Rp5 juta, maka dana
              darurat ideal untuk keluarga dengan anak bisa mencapai Rp30 hingga
              Rp60 juta. Dengan perhitungan ini, kamu bisa menyesuaikan target
              sesuai kebutuhan.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-2xl font-bold text-foreground">
              Cara Praktis Mengumpulkan Dana Darurat{" "}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cara mengumpulkan dana darurat pun tidak harus rumit. Menurut OJK,
              langkah terbaik adalah <span className="italic">memisahkan tabungan dana darurat{" "}</span> dari
              rekening harian [Sumber: ojk.go.id]. Kamu bisa mulai dengan
              menyisihkan minimal 10% dari gaji bulanan, lalu menaruhnya di
              rekening khusus atau e-wallet berbeda. Untuk menjaga konsistensi,
              aktifkan fitur auto-debet agar setoran otomatis setiap bulan.
              Instrumen yang dipilih juga sebaiknya bersifat likuid, seperti
              tabungan, deposito, atau reksa dana pasar uang, agar dana bisa
              segera digunakan ketika diperlukan.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-2xl font-bold text-foreground">
              Strategi Menjaga Dana Darurat Tetap Aman{" "}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Konsultan keuangan <span className="italic">Ernst & Young</span> menekankan bahwa likuiditas dana
              darurat lebih penting daripada imbal hasil [Sumber: ey.com].
              Artinya, dana ini jangan terlalu difokuskan pada bunga tinggi,
              melainkan harus mudah dicairkan kapan saja. Strategi tambahan yang
              bisa dilakukan antara lain menggunakan e-wallet atau rekening
              digital tanpa biaya administrasi agar lebih efisien, serta
              menyimpan dana dalam pecahan nominal berbeda supaya lebih
              fleksibel saat dibutuhkan.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-2xl font-bold text-foreground">
              Mulai dari Kecil, Raih Rasa Tenang{" "}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Memiliki dana darurat bukan sekadar teori, melainkan kebutuhan
              nyata agar kondisi finansial tetap aman di situasi sulit. Mulailah
              dari nominal kecil, lakukan secara konsisten, dan lihat bagaimana
              rasa tenang akan tumbuh seiring saldo dana daruratmu berkembang.
              Dengan langkah sederhana ini, kamu bisa mewujudkan keamanan
              finansial yang lebih stabil dan terhindar dari masalah besar
              ketika kondisi tak terduga datang.
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            👉 Yuk, mulai bangun dana daruratmu sekarang bersama{" "}
            <span className="font-bold">JagonyaUang</span>.
          </p>

          <div className="flex flex-col justify-center items-center bg-[#471cff]/10 p-10 mt-24 mb-24 rounded-lg">
            <ChatBubbleLeftIcon className="w-20 h-20 text-[#471CFF] font-bold" />
            <p className="text-xl font-bold">
              Bantu Kami Untuk Menjadi Lebih Baik, Terima Kasih
            </p>
            <p className="text-md text-gray-600 max-w-xl text-center mt-5">
              Masukan Anda sangat berarti bagi kami. Ceritakan pengalaman dan
              saran Anda agar JagonyaUang dapat terus berkembang dan memberikan
              manfaat yang lebih baik.{" "}
            </p>
            <Button
              variant="primary"
              size="lg"
              className="mt-5 items-center flex justify-center group"
            >
              Berikan Feedback
              <ChevronRightIcon className="w-5 h-5 transform group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
            </Button>
          </div>
          {/* end feedback */}
        </section>
      </GuestLayout>
    </>
  );
}
