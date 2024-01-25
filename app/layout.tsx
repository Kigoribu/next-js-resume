import "./globals.css";
import {
  Nunito_Sans,
  Cousine,
  Manrope,
  Montserrat_Alternates,
  Geologica,
  Kaushan_Script,
} from "next/font/google";
import { kaushan_script, geologica } from "@/app/utils/fonts";

export const metadata = {
  title: "Kigoribu`s page",
  description: "Resume",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geologica.className}`}>
      <body>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
