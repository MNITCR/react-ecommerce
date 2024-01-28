import { Inter } from "next/font/google";
import "../styles/main.scss";
import Provider from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MN Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true} className={inter.className}>
       <Provider>{children}</Provider>
      </body>
    </html>
  );
}
