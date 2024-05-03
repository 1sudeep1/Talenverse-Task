import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lookscout",
  description: "Lookscout Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/images/url-icon.png" type="image/x-icon" />
        <link rel="preload" href="/path-to-your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        <Toaster /> {/* toaster for notification */}
        {children}
        <Footer />
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
