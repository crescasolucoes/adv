import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advocacia | Assessoria Jurídica Estratégica",
  description: "Assessoria jurídica estratégica com foco em segurança e resultado. Atendimento humanizado, transparência e atuação técnica para proteger seus interesses.",
  keywords: ["advocacia", "advogado", "direito", "jurídico", "Mossoró", "RN", "assessoria jurídica"],
  authors: [{ name: "Advocacia Especializada" }],
  openGraph: {
    title: "Advocacia Especializada",
    description: "Assessoria jurídica estratégica com foco em segurança e resultado",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        <div className="pt-24">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
