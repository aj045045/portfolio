import { motion } from "framer-motion";

export function Pill({ data, id }: { data: string, id: string }) {
    return <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeInOut", }} id={id} className="text-md max-h-9 mt-10 mb-4 dark:bg-green-400 shadow-lg md:text-lg text-white bg-green-600 lg:text-xl dark:text-black dark:shadow-green-600 shadow-green-400  tracking-wide rounded-full px-2 my-5 ms-5 md:py-1 md:px-4 py-0.5 w-fit select-none">{data}</motion.div>
}