import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Web5Provider } from "@/plugins/web5.client";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "FundFlit - Revolutionizing crowdfunding with web5",
  description: "We empower users and ensure trust",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Web5Provider>
      <html lang="en">
        <body >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </Web5Provider>
  );
}
