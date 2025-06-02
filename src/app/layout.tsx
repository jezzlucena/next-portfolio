import "./[locale]/globals.css";
import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
