import "./globals.css";
import "../styles/clientSide.scss";
import Navbar from "@/components/navigation/Navbar";
import Topnav from "@/components/navigation/Topnav";
import Footer from "@/components/footer/Footer";
import BootstrapClient from "./components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Topnav/>
        <Navbar/>
        {children}
        <BootstrapClient/>
        <Footer/>
      </body>
      
    </html>
  );
}
