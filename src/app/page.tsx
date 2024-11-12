"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { Phone, Package, Settings, Users } from "lucide-react";

import machine from "@/assets/machine.jpg";
import { WhatsApp } from "@/assets/svg/WhatsApp";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="cta-section"
      aria-labelledby="cta-section-title"
      className="py-8 sm:py-16"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <header className="mb-8">
          <h2
            id="cta-section-header"
            className={cn(
              "mx-auto mb-2 max-w-screen-md text-center text-2xl font-bold opacity-0 md:text-3xl",
              inView &&
                "opacity-1 duration-700 ease-in-out animate-in fade-in slide-in-from-left-8",
            )}
          >
            Optimalkan Kinerja CNC Anda Bersama HaeBot!
          </h2>
          <p
            className={cn(
              "mx-auto max-w-screen-md text-center text-base text-zinc-400 opacity-0 sm:text-lg",
              inView &&
                "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8",
            )}
          >
            Bergabunglah dengan kami di HaeBot untuk mendapatkan komponen CNC
            berkualitas tinggi dan layanan konsultasi ahli yang akan
            meningkatkan efisiensi operasional mesin Anda. Temukan solusi yang
            tepat untuk kebutuhan industri Anda.
          </p>
        </header>
        <div className="flex items-center justify-center">
          <Button
            className={cn(
              "opacity-0",
              inView &&
                "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-8",
            )}
          >
            Hubungi Kami <Phone className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

interface IProductCard {
  title: string;
  description: string;
  imageUrl: string;
}

const products: IProductCard[] = [
  {
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra",
    imageUrl: machine.src,
  },
  {
    title: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed",
    imageUrl: machine.src,
  },
  {
    title: "Product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere",
    imageUrl: machine.src,
  },
  {
    title: "Product 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec",
    imageUrl: machine.src,
  },
  {
    title: "Product 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis",
    imageUrl: machine.src,
  },
];

function CarouselSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="carousel-section"
      aria-labelledby="carousel-section-title"
      ref={ref}
      className="bg-background py-8 text-foreground sm:py-16"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <header className="mb-8 text-center sm:mb-20">
          <h2
            id="carousel-section-title"
            className={cn(
              "mb-2 text-3xl font-bold opacity-0",
              inView &&
                "opacity-1 duration-700 ease-in-out animate-in fade-in slide-in-from-left-8",
            )}
          >
            Galeri Produk Kami
          </h2>
          <p
            className={cn(
              "text-base text-muted-foreground opacity-0",
              inView &&
                "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8",
            )}
          >
            Lihat berbagai produk yang kami tawarkan untuk memenuhi kebutuhan
            industri Anda. Kami berkomitmen untuk memberikan yang terbaik dalam
            setiap aspek layanan kami.
          </p>
        </header>
        <div>
          <Carousel
            className={cn(
              "opacity-0",
              inView &&
                "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-8",
            )}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
          >
            <CarouselContent>
              {products.map((product) => {
                return (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    key={product.title}
                  >
                    <Card className="width mx-auto w-full max-w-xs rounded-xl border">
                      <div className="grid gap-4 p-4">
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
                          <Image
                            src={product.imageUrl}
                            alt={`gambar ${product.title}`}
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="500"
                            className="aspect-[4/5] w-full border object-cover"
                          />
                        </div>
                        <div className="grid gap-1.5">
                          <h3 className="text-base font-semibold md:text-base">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground md:text-base">
                            {product.description}
                          </p>
                        </div>
                        <Button
                          className="bg-[#075E54] hover:bg-[#075E54]/90 [&_svg]:size-5"
                          asChild
                        >
                          <a
                            href={
                              "https://wa.me/62812345678?text=" +
                              encodeURIComponent(
                                `Hallo min! Aku mau tanya tanya tentang ${product.title}`,
                              )
                            }
                          >
                            Chat kami
                            <WhatsApp
                              role="img"
                              focusable="false"
                              aria-hidden="true"
                            />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface IFeature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: IFeature[] = [
  {
    icon: (
      <Package
        role="img"
        focusable="false"
        aria-hidden="true"
        className="size-6"
      />
    ),
    title: "Komponen CNC Berkualitas",
    description:
      "Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda.",
  },
  {
    icon: (
      <Users
        role="img"
        focusable="false"
        aria-hidden="true"
        className="size-6"
      />
    ),
    title: "Konsultasi Ahli",
    description:
      "Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda.",
  },
  {
    icon: (
      <Settings
        role="img"
        focusable="false"
        aria-hidden="true"
        className="size-6"
      />
    ),
    title: "Solusi Otomatisasi",
    description:
      "HaeBot adalah mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
  },
];

function FeatureSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="bg-background py-8 text-foreground sm:py-16"
      aria-labelledby="feature-section-title"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <header className="mb-8 sm:mb-20">
          <h2
            id="feature-section-title"
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
        </header>
        <ul
          className={cn(
            "grid grid-cols-1 gap-8 opacity-0 sm:grid-cols-2 sm:gap-12 md:grid-cols-3",
            inView &&
              "opacity-1 duration-1000 ease-in-out animate-in fade-in slide-in-from-left-8",
          )}
          role="list"
        >
          {features.map((feature, index) => (
            <li key={index} className="flex flex-col" role="listitem">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/75 text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="h-screen w-full"
      aria-labelledby="hero-section-title"
    >
      <div className="relative size-full">
        <Image
          src={machine}
          alt=""
          decoding="async"
          loading="eager"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950 opacity-80" />
        <div className="absolute inset-0 mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-6 px-4">
          <header>
            <small className="mb-2 block text-center text-xs leading-none text-background lg:text-sm">
              Meningkatkan Efisiensi Operasional Anda dengan Solusi CNC
              Terpercaya
            </small>
            <h2
              id="hero-section-title"
              className="mb-3 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-background md:mb-4 lg:mb-5 lg:text-6xl"
            >
              Solusi Terbaik untuk Kebutuhan CNC Anda
            </h2>
            <p className="text base mb-4 text-center text-base tracking-tight text-muted lg:text-lg">
              Dapatkan komponen berkualitas tinggi dan layanan konsultasi ahli
              untuk meningkatkan produktivitas Anda
            </p>
          </header>
          <Button variant="secondary">
            Hubungi Kami
            <Phone
              role="img"
              focusable="false"
              aria-hidden="true"
              className="size-4"
            />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-8 w-[calc(100%+1.3px)] lg:h-16"
            role="img"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-background"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <FeatureSection />
      <CTASection />
    </>
  );
}
