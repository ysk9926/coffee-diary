import type { Metadata } from "next";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

export const metadata: Metadata = {
  title: "coffee diary app",
  description: "나만의 커피 일기를 작성해 봐요요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
