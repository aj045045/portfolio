"use client";
import Image from "next/image";
import { Typing } from "./Typing";
import { Button } from "@nextui-org/button";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";

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
        <div className="flex flex-col md:flex-row h-96 select-none mb-96 md:mb-24" id="home">
            <div className="text-justify self-center items-center md:w-3/5 w-4/5 md:px-10  md:mt-10 mt-5">
                <div className="text-4xl  font-semibold  text-shadow-md ">
                    Hi, I am <span className="dark:text-green-400 text-green-600">Ansh Yadav</span> a <Typing />
                </div>
                <div className="text-lg mt-5 dark:text-slate-400 text-slate-600">&#34;I am an Ahmedabad based developer focused on crafting, clean & user friendly software. I am passionate about building a software that improves the lives of the people&#34;</div>
                <Button color="success" radius="full" endContent={<FaDownload />} className="mt-5" onClick={handleDownload} >Download CV</Button>
                <div className="flex flex-row items-center space-x-4 mt-10 text-xl">
                    <div>Check Out my</div>
                    <Link href={"https://www.linkedin.com/in/ansh-yadav-0ab92424b/"} target="_blank"><FaLinkedin className="dark:text-green-500 text-green-700 text-4xl" /></Link>
                    <Link href={"https://www.freelancer.com/u/aj045045"} target="_blank"><SiFreelancer className="dark:text-green-500 text-green-700 text-4xl"  /></Link>
                    <Link href={"https://github.com/aj045045"} target="_blank"><FaGithub className="dark:text-green-500 text-green-700 text-4xl" /></Link>

                </div>
            </div>
            <div className="md:ml-20  select-none">
                <Image unoptimized src={'/image/blob.png'} alt="Blob Background" width={0} height={0} className="w-[430px] absolute" />
                <Image unoptimized src={'/image/user.png'} alt="User Image" width={0} height={0} className="w-60 mt-10 ml-16 md:ml-10 z-10 md:w-80 absolute" />
            </div>
        </div>
    </>)
}