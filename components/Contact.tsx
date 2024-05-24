'use client'
import { dm_mono } from "@/lang";
import Link from "next/link";
import { motion } from "framer-motion";
export function Contact({ image, data, link }: { image: any; data: string; link: string; }) {
    return (
        <motion.div whileHover={{scale:1.1}} className="flex flex-row items-center space-x-5">
            <div className="md:text-2xl text-lg dark:text-green-400 text-green-700">{image}</div>
            <Link className={`${dm_mono.className} dark:bg-green-100/10 select-none bg-green-200/50 text-green-800  dark:text-green-500 px-2 py-1 rounded-md`} color="success" target="_blank" href={link}>{data}</Link>
        </motion.div>
    )
}