import React from "react";
import Title from "../components/Title";
import videoFile from "../assets/betabadri.mp4";
import staticVid from "../assets/staticbg.jpg";
import { WrenchScrewdriverIcon, ChevronDoubleDownIcon, AcademicCapIcon, CheckBadgeIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Home() {
  Title("Home | Beta Badri Education");

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden" id="home">
        <video className="w-full h-full object-cover" src={videoFile} autoPlay muted loop playsInline poster={staticVid}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10">
          <Navbar />
          <div className="absolute z-20 top-1/2 left-12 -translate-y-1/2 text-white text-left max-w-4xl">
            <h1 className="font-light text-6xl leading-tight">
              Langkah <span className="text-[#B700A5] font-normal">Baru</span> Menuju
            </h1>
            <h1 className="font-light text-6xl leading-tight">Masa Depan Pendidikan</h1>
            <h4 className="mt-14 font-light text-lg">
              Dorong Kemajuan Sekolah Anda Dengan Solusi Teknologi Pendidikan Canggih
            </h4>
            <h4 className="font-light text-lg">
              Yang Memperkuat Proses Belajar Dan Mengajar
            </h4>
            <Button style="flex items-center justify-center gap-2 mt-8">
              Lebih Lanjut <ChevronDoubleDownIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Section placeholders */}
      <div id="solution" className="w-screen min-h-screen bg-[#202020] p-8 md:p-16 text-white">
        <h1 className="text-4xl text-center font-medium">
          Transformasi Pendidikan <span className="text-[#B700A5]">Melalui</span> Teknologi
        </h1>
        <p className="text-center font-light mt-8 max-w-4xl mx-auto leading-relaxed">
          Beta Badri Education merevolusi dunia pendidikan dengan membekali siswa keterampilan nyata yang relevan dengan industri.
          Solusi EdTech inovatif kami memberdayakan generasi muda untuk menjelajahi teknologi mutakhir seperti robotika, keamanan siber, kecerdasan buatan, dan lainnya.
          Melalui kombinasi teknologi canggih dan bimbingan dari para ahli, kami membentuk masa depan pembelajaran.
        </p>

        <div className="grid grid-cols-3">
          <div id="solusi1" className="mt-16 flex items-start justify-start space-x-4">
            <div>
              <WrenchScrewdriverIcon className="h-16 w-16 text-[#B700A5]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Solusi Teknologi yang Dirancang Sesuai Kebutuhan
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#d9d9d9]">
                Kami memahami bahwa setiap sekolah itu unik, itulah sebabnya kami menawarkan solusi teknologi yang disesuaikan untuk
                memenuhi kebutuhan spesifik setiap institusi. Mulai dari perangkat keras dan perangkat lunak hingga pelatihan dan dukungan,
                kami berkomitmen untuk menyediakan solusi menyeluruh yang mendorong keberhasilan siswa.
              </p>
            </div>
          </div>


          <div id="solusi1" className="mt-16 flex items-start justify-start space-x-4">
            <div>
              <AcademicCapIcon className="h-16 w-16 text-[#B700A5]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Pembelajaran Inovatif
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#d9d9d9]">
                Alat pembelajaran inovatif kami dirancang untuk melibatkan dan menginspirasi siswa, sekaligus membantu guru dalam 
                meringankan beban kerja mereka. Dengan solusi kami, sekolah dapat menciptakan lingkungan belajar yang dinamis dan kolaboratif 
                yang mempersiapkan siswa menghadapi tantangan di masa depan.
              </p>
            </div>
          </div>

          <div id="solusi1" className="mt-16 flex items-start justify-start space-x-4">
            <div>
              <CheckBadgeIcon className="h-16 w-16 text-[#B700A5]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Bimbingan dan Dukungan Profesional
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#d9d9d9]">
                Kami menyadari bahwa penerapan teknologi baru dapat menjadi tantangan tersendiri. Oleh karena itu, kami menyediakan bimbingan 
                dan dukungan dari para ahli di setiap tahap implementasi. Tim kami, yang terdiri dari pendidik berpengalaman dan spesialis teknologi, 
                akan bekerja sama dengan pihak sekolah untuk memastikan proses transisi berjalan secara efektif dan berhasil.
              </p>
            </div>
          </div>

          <div id="solusi1" className="mt-16 flex items-start justify-start space-x-4">
            <div>
              <CubeTransparentIcon className="h-16 w-16 text-[#B700A5]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Transformasi Pendidikan, Dimulai dari Setiap Sekolah
              </h2>
              <p className="text-sm font-light leading-relaxed text-[#d9d9d9]">
                Di Beta Badri Education, kami percaya bahwa teknologi memiliki kekuatan untuk mentransformasi pendidikan dan menciptakan masa depan yang lebih baik bagi siswa. 
                Bergabunglah dengan kami dalam perjalanan ini untuk merevolusi dunia pendidikan, satu sekolah pada satu waktu.
              </p>
            </div>
          </div>

          
        </div>
      </div>

      <div id="vision" className="w-screen h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl text-[#B700A5]">Vision Section</h2>
      </div>

      <div id="contact" className="w-screen h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl text-[#B700A5]">Contact Section</h2>
      </div>
    </>
  );
}

export default Home;
