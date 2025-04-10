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
  metadataBase: new URL("https://in-house-l.vercel.app"),
  title: "In house",
  description:
    "O’zbekistondagi mebellar hamda dizayn va qurilish soxasi professionallarini izlashning  eng qulay platformasi",
  // icons: {
  //   icon: "/images/icon.png",
  // },
  openGraph: {
    description:
      "O’zbekistondagi mebellar hamda dizayn va qurilish soxasi professionallarini izlashning  eng qulay platformasi",
    // images: "/images/poster.png",
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
