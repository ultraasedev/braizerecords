import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTopButton from './scroll-to-top-button';
import "./globals.css";
import { Header } from "@/app/section/home/header";
import Footer from "./section/home/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BraizeRecords",
  description: "Braize Records est un label de musique dévoué à la découverte et à la promotion des pépites de demain. Nous accompagnons les artistes dans les régions en manque de visibilité, offrant un soutien complet à 360° pour leur développement artistique. Découvrez comment nous donnons vie aux talents de Demain et les aidons à briller sur la scène musicale mondiale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
       <head>
<link rel="icon" type="image/x-icon" href="/logo.png" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css" integrity="sha512-d0olNN35C6VLiulAobxYHZiXJmq+vl+BGIgAxQtD5+kqudro/xNMvv2yIHAciGHpExsIbKX3iLg+0B6d0k4+ZA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-[#141414] text-white ${inter.className}">
      <ScrollToTopButton />
        <Header />

        {children}

        <Footer/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/fontawesome.min.js" integrity="sha512-C8qHv0HOaf4yoA7ISuuCTrsPX8qjolYTZyoFRKNA9dFKnxgzIHnYTOJhXQIt6zwpIFzCrRzUBuVgtC4e5K1nhA==" crossOrigin="anonymous" referrerPolicy="no-referrer" defer></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" defer></script>
       <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" defer></script>
        </body>
    </html>
  );
}
