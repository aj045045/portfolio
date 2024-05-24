"use client";
import { inter } from "@/lang";
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { NavbarComponent } from "@/components";
import { motion, useScroll, useSpring } from "framer-motion"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <html lang="en" className={isDarkMode ? "dark" : "light"}>
      <body className={inter.className}>
        <NextUIProvider>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="fixed left-0 right-0  top-18 z-30 h-1 mb-5 [transform-origin:0%] dark:bg-green-300 bg-green-500" style={{ scaleX }} />
          <NavbarComponent isSelected={isDarkMode} valueChange={setDarkMode} />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
