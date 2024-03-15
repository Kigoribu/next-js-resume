import "./globals.css";
import { geologica } from "@/app/utils/fonts";

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
