import Image from "next/image";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import cncStocks from "@/assets/cnc-stocks.png";

function HeroSection() {
  return (
    <section id="hero-section" className="h-[550px] w-full lg:h-[600px]">
      <div className="mx-auto flex size-full max-w-screen-xl flex-col gap-6 lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-end gap-4 lg:flex-[3] lg:items-start lg:justify-center md:gap-6">
          <header>
            <h2 className="mb-1 scroll-m-20 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent duration-700 ease-in-out animate-in fade-in slide-in-from-left-8 md:mb-2 lg:text-start lg:mb-3 lg:text-5xl">
              Menyediakan Konsultasi, Memberikan Solusi
            </h2>
            <p className="text-center leading-5 duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8 lg:text-start">
              Haebot Berdedikasi untuk Memberikan Solusi Kebutuhan CNC dan
              Produksi Anda
            </p>
          </header>
          <Button className="duration-1250 ease-in-out animate-in fade-in slide-in-from-left-8">
            Hubungi Kami
            <Phone
              role="img"
              focusable="false"
              aria-hidden="true"
              className="size-4"
            />
          </Button>
        </div>
        <div className="flex flex-1 items-start justify-center lg:flex-[4] lg:items-center">
          <Image
            src={cncStocks}
            alt="Gambar stok cnc"
            decoding="async"
            loading="eager"
            className="duration-1500 h-60 w-auto object-cover ease-in-out animate-in fade-in slide-in-from-bottom-8 lg:h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return <HeroSection />;
}
