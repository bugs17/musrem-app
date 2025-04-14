import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      
      <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex items-center justify-center cursor-pointer pb-5">
        <a href="https://bovendigoelkab.go.id" target="_blank" rel="noopener noreferrer">
          <img className="h-[100px] w-[100px]" src="/logo-boven.png" alt="Logo Boven" />
        </a>
      </div>
        <h2 className="text-center text-3xl font-medium text-gray-50 sm:text-6xl">Aplikasi e-musrenbang, <br></br> </h2>
        <h1 className="text-center text-3xl font-medium  bg-gradient-to-r from-white to-violet-500 bg-clip-text text-transparent  h1custom">
          Jauh lebih
          <span className="slidercustom">
            <span className="slider__word text-violet-500">Mudah</span>
            <span className="slider__word text-violet-500">Cepat</span>
            <span className="slider__word text-violet-500">Efisien</span>
          </span>
        </h1>
      <div>
        <p className="mt-6 text-center text-lg leading-6 text-gray-400">Aplikasi dikembangkan oleh Bappeda kabupaten Boven Digoel provinsi Papua. <br></br> sebagai tools pembantu kegiatan musrenbang tingkat kabupaten.</p>
      </div>
      <div className="w-36 justify-center items-center gap-4 pt-8">
        <Link href="/auth" passHref>
          <Button size="sm" className="bg-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 w-full flex items-center justify-center text-center text-neutral-900  cursor-pointer">Masuk <ArrowRight /></Button>
        </Link>
      </div>
      </div>
    </div>
  );
  
}

