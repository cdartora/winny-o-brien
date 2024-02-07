import { Work_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "./side-bar";

// import localFont from "next/font/local";
// const cakelan = localFont({ src: "./fonts/cakelan.woff" });

const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Winny O'Brien",
  description: "Tiragem de tarot.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={workSans.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
};

export default RootLayout;
