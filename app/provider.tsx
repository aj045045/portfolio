"use client";
import { inter } from "@/lang";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { NavbarComponent } from "@/components";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <html lang="en" className={isDarkMode ? "dark" : "light"}>
      <body className={inter.className}>
        <NextUIProvider>
          <NavbarComponent isSelected={isDarkMode} valueChange={setDarkMode} />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
