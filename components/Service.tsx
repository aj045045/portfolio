import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
export function Service({ icon, data }: { icon: React.ReactElement; data: string; }) {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } }
    }

    return (
        <motion.li variants={item}>
            <Card
                isPressable
                className="w-56 mt-10 border-none shadow-lg dark:shadow-green-400 shadow-green-600 h-44 md:h-56"
                shadow="sm"
            >
                <CardBody className="flex items-center bg-green-200">
                    <div className="p-1 mt-5 text-3xl text-green-700 border-green-700 rounded-full shadow-lg border-3 md:mt-10 dark:bg-green-200 dark:shadow-green-600 shadow-green-800 md:p-2 md:text-4xl dark:border-green-500">{icon}</div>
                    <div className="mt-8 font-sans text-lg font-bold tracking-wide text-center text-gray-700 capitalize md:text-xl hyphens-auto">{data}</div>
                </CardBody>
            </Card>
        </motion.li>
    )
}

export default Service;