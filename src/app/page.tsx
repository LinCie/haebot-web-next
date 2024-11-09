"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { Phone, Package, Settings, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import cncStocks from "@/assets/cnc-stocks.png";
import { cn } from "@/lib/utils";

function FeatureSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="bg-background py-8 text-foreground sm:py-16 sm:pb-24 md:pb-28"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="mb-8 sm:mb-20">
          <h2
            className={cn(
              "mb-2 max-w-screen-md text-3xl font-bold opacity-0 md:text-4xl",
              inView &&
                "opacity-1 duration-700 ease-in-out animate-in fade-in slide-in-from-left-8",
            )}
          >
            Solusi CNC Terpercaya untuk Kebutuhan Industri Anda
          </h2>
          <p
            className={cn(
              "max-w-screen-sm text-base text-muted-foreground opacity-0 sm:text-lg",
              inView &&
                "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8",
            )}
          >
            HaeBot menyediakan komponen CNC berkualitas tinggi dan layanan
            konsultasi ahli untuk meningkatkan efisiensi operasional mesin Anda.
          </p>
        </div>
        <ul
          className={cn(
            "grid grid-cols-1 gap-8 opacity-0 sm:grid-cols-2 sm:gap-12 md:grid-cols-3",
            inView &&
              "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8",
          )}
        >
          <li className="flex flex-col">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/75 text-primary-foreground">
              <Package size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Komponen CNC Berkualitas
            </h3>
            <p className="text-base text-muted-foreground">
              Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka,
              yang disesuaikan dengan kebutuhan industri Anda.
            </p>
          </li>
          <li className="flex flex-col">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/75 text-primary-foreground">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Konsultasi Ahli
            </h3>
            <p className="text-base text-muted-foreground">
              Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan
              kinerja dan efisiensi mesin Anda.
            </p>
          </li>
          <li className="flex flex-col">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/75 text-primary-foreground">
              <Settings size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Solusi Otomatisasi
            </h3>
            <p className="text-base text-muted-foreground">
              HaeBot adalah mitra Anda dalam mencapai produktivitas maksimal
              dengan solusi CNC yang andal.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section id="hero-section" className="h-[750px] w-full lg:h-[600px]">
      <div className="mx-auto flex size-full max-w-screen-xl flex-col gap-6 lg:flex-row">
        <div className="flex flex-1 flex-col items-center justify-end gap-4 md:gap-6 lg:flex-[3] lg:items-start lg:justify-center">
          <header>
            <h2 className="mb-1 scroll-m-20 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent duration-700 ease-in-out animate-in fade-in slide-in-from-left-8 md:mb-2 lg:mb-3 lg:text-start lg:text-5xl">
              Menyediakan Konsultasi, Memberikan Solusi
            </h2>
            <p className="text-center leading-5 text-muted-foreground duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8 lg:text-start">
              Haebot Berdedikasi untuk Memberikan Solusi Kebutuhan CNC dan
              Produksi Anda
            </p>
          </header>
          <Button className="duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8">
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
            className="h-60 w-auto object-cover duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-8 lg:h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
    </>
  );
}
