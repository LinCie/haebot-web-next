import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "HaeBot | Komponen & Konsultasi CNC | PT HaeBot Teknologi Indonesia",
  description:
    "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
  keywords: [
    "CNC",
    "Komponen CNC",
    "Suku Cadang CNC",
    "Konsultasi CNC",
    "Layanan CNC",
    "Otomatisasi Industri",
    "Mesin",
    "HaeBot",
    "PT HaeBot Teknologi Indonesia",
    "Indonesia",
    "Manufaktur",
    "Teknologi",
    "Pabrikasi",
    "Produksi",
    "Kualitas Tinggi",
    "Suku Cadang Mesin",
    "Mesin CNC",
    "Mesin Bubut",
    "Mesin Las",
    "Mesin Giling",
    "Mesin Milling",
    "Mesin EDM",
  ],
  openGraph: {
    title: "HaeBot | Komponen & Konsultasi CNC | PT HaeBot Teknologi Indonesia",
    description:
      "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
    url: "https://haebot-two.vercel.app",
    siteName: "HaeBot",
    images: [
      {
        url: "/images/cnc-machine.jpg",
        alt: "Komponen dan layanan konsultasi CNC HaeBot",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HaeBot | Komponen & Konsultasi CNC | PT HaeBot Teknologi Indonesia",
    description:
      "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
    images: ["/images/cnc-machine.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <Header />
          <main className="w-full">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
