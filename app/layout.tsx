import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const findSansPro = localFont({
  src: [
    {
      path: "../public/fonts/FindSansPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FindSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FindSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FindSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-find-sans-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FRMWRK",
  description: "FRMWRK — Moscow Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={findSansPro.variable}>{children}</body>
    </html>
  );
}