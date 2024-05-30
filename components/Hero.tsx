"use client";
import Image from "next/image";
import { Typing } from "./Typing";
import { Button } from "@nextui-org/button";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { motion } from "framer-motion";
export function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/resume.pdf';
        link.download = 'ansh-yadav-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (<>
        <div className="flex flex-col pt-20 select-none md:flex-row h-96 mb-96 md:mb-24 max-w-screen" id="home">
            <motion.div className="items-center self-center w-4/5 mt-5 text-justify md:w-3/5 md:px-10 md:mt-10" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3, delay: 1 }}>
                <div className="text-4xl font-semibold text-shadow-md cursor-text">
                    Hello, I am <span className="text-green-600 dark:text-green-400">Ansh Yadav</span>,&nbsp;a <Typing />
                </div>
                <div className="mt-5 text-lg dark:text-slate-400 text-slate-600">&#34;I am an Ahmedabad-based developer who focuses on creating clean, user-friendly applications. I am passionate about developing software that enhances the lives of people.&#34;</div>
                <Button color="success" radius="full" endContent={<FaDownload />} className="mt-5" onClick={handleDownload} >Download CV</Button>
                <div className="flex flex-row items-center mt-10 space-x-4 text-xl cursor-pointer">
                    <div>Check Out my</div>
                    <Link href={"https://www.linkedin.com/in/ansh-yadav-0ab92424b/"} target="_blank"><FaLinkedin className="text-4xl text-green-700 dark:text-green-500" /></Link>
                    <Link href={"https://www.freelancer.com/u/aj045045"} target="_blank"><SiFreelancer className="text-4xl text-green-700 dark:text-green-500" /></Link>
                    <Link href={"https://github.com/aj045045"} target="_blank"><FaGithub className="text-4xl text-green-700 dark:text-green-500" /></Link>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5, delay: 4 }} className="select-none md:ml-20" >
                <Image unoptimized src={'/image/blob.png'} alt="Blob Background" width={0} height={0} className="w-[420px] absolute" />
                <Image unoptimized src={'/image/user.png'} alt="User Image" width={0} height={0} className="absolute z-10 mt-10 ml-16 w-60 md:ml-10 md:w-80" />
            </motion.div>
        </div>
    </>)
}