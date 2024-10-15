import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Webwaves Marketing",
    template:"%s | Digital marketing Agency and Social media manager"
  },
  description: "Digital marketing and Social media manager ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      <Navbar></Navbar>
        <div className="min-h-screen px-2">
        {children}
        </div>
     <Footer></Footer>
        </body>
    </html>
  );
}
