import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollTopButton from "./components/ScrollTopButton";

export const metadata = {
  title: "El Shafiq",
  description: "Welcome to El Shafiq for Trading & Construction",
  icons: {
    icon: "./assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    name: "el shafiq construction",
    description: "El Shafiq for Trading & Construction",
    url: "https://el-shafiq-cement.vercel.app/",
    logo: "https://el-shafiq-cement.vercel.app/assets/logo.png",
    telephone: "+20 1044184087",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B4 Degla Gardens Rd, October Gardens",
      addressLocality: "Giza",
      addressRegion: "Giza Governorate",
      postalCode: "3273303",
      addressCountry: "EG",
    },
    areaServed: "EG",
    serviceType: ["Construction", "Trading", "Cement Supply"],
  };

  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">
        <Navbar />
        {children}
        <ScrollTopButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
