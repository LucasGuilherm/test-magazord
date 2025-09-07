import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ReactQueryProvider } from "@/providers/QueryClientProvider";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Magazord",
  description: "App Test Magazord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
        <ReactQueryProvider>
          <Header />

          <main className="flex flex-row justify-center py-5 px-8">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
