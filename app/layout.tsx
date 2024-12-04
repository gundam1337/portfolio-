import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { LanguageContextProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar | Personal Portfolio",
  description: "Omar is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Your background elements */}
        <ThemeContextProvider>
          <LanguageContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <ThemeSwitch />
              <LanguageSwitch />
            </ActiveSectionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
