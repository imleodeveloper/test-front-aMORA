import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Teste Simulador - aMORA",
  description: "Developed by Leonardo Vieira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
