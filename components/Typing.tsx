import { courgette } from "@/lang";
import { Typewriter } from "nextjs-simple-typewriter";
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
        loop={2}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />.
    </span>
  );
}
