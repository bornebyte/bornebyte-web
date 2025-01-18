import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderComponent } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bornebyte",
  description: "Personal website of Bornebyte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviderComponent
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="lg:mx-20 lg:my-10 mx-2 my-2">
            {children}
          </main>
          <Toaster />
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
