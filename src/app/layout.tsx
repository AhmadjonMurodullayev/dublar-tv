import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900", "300"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://dublar-tv.vercel.app"),
  title: "In house",
  description:
    "Dublar.tv — bu O‘zbekistonda kino va dublyaj san’atining yangi manzili. Biz eng sara filmlar, sifatli ovozlashtirish va original tarjimalarni bitta sahnada jamladik. Har bir kadr, har bir ovoz va har bir tarjima — bizning muhabbatimiz bilan ishlangan.",
  // icons: {
  //   icon: "/images/icon.png",
  // },
  openGraph: {
    description:
      "Dublar.tv — bu O‘zbekistonda kino va dublyaj san’atining yangi manzili. Biz eng sara filmlar, sifatli ovozlashtirish va original tarjimalarni bitta sahnada jamladik. Har bir kadr, har bir ovoz va har bir tarjima — bizning muhabbatimiz bilan ishlangan.",
    images: "/meta.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font} bg-[#191919] `}
      >
        <header>
          <Header/>
        </header>
        <main>
        {children}
        </main>
       <footer> 
           <Footer/>
      </footer>
      </body>
    </html>
  );
}
