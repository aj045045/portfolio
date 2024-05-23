import type { Metadata } from "next";
import "@/css/style.css";
import RootLayout from "./provider";

export const metadata: Metadata = {
  title: "Ansh Yadav | Full-Stack Developer",
  description:
    "Explore the portfolio of Ansh yadav, a skilled full-stack developer. Discover projects, technical skills, and business ventures that showcase a blend of coding proficiency. Connect for professional opportunities, collaborations, and insights into the latest in technology and business development.",
  keywords:
    "ansh yadav, aj, ansh, aj045045 ,portfolio, full-stack developer, portfolio, web development, software engineering, business development",
  authors: [
    {
      name: "Ansh Yadav",
      url: "https://www.linkedin.com/in/ansh-yadav-0ab92424b/",
    },
  ],
  icons: "/icons.png",
};

export default RootLayout;
