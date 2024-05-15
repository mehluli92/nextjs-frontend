import "../styles/clientSide.scss";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from "@/components/navigation/Navbar";
import Topnav from "@/components/navigation/Topnav";
import Footer from "@/components/footer/Footer";
import BootstrapClient from "./components/BootstrapClient";
import GlobalProvider from "./GlobalProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function RootLayout({ children }) {     
  return (
    <html lang="en">
      <body >
        <GlobalProvider>
            <Topnav/>
            <Navbar/>
              { children }
            <BootstrapClient/>
            <Footer/>
        </GlobalProvider>
      </body>
      
    </html>
  );
}
