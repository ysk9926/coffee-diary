import type { Metadata } from "next";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import CustomProvider from "@/components/provider/CustomProvider";

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
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
