'use client'
import { courgette } from "@/lang";
import { Typewriter } from "nextjs-simple-typewriter";
import { motion } from "framer-motion";
export function Typing() {
  return (
    <span className={courgette.className}>
      <Typewriter
        words={[
          "Full-Stack Web Developer",
          "Web Designer",
          "Mobile Application Developer",
          "SEO Optimizer",
          "Freelancer",
        ]}
        loop={3}
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={3000}
      /><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity,repeatDelay:0.5}}>_</motion.span>.
    </span>
  );
}
