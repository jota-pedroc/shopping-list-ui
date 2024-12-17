import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./_components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shopping List App",
  description: "TODO", // TODO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="grid justify-items-center w-8/12 m-2">
          <main className="w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
