import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
export function Service({ icon, data }: { icon: React.ReactElement; data: string; }) {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } }
    }

    return (
        <motion.li variants={item}>
            <Card
                isPressable
                className="border-none shadow-lg mt-10 dark:shadow-green-400  shadow-green-600 h-44 md:h-56 w-56"
                shadow="sm"
            >
                <CardBody className="items-center flex bg-green-200">
                    <div className="text-green-700  border-3 md:mt-10 mt-5 dark:bg-green-200 shadow-lg dark:shadow-green-600 shadow-green-800 md:p-2 p-1 md:text-4xl text-3xl rounded-full dark:border-green-500 border-green-700">{icon}</div>
                    <div className="md:text-xl text-lg hyphens-auto text-center font-sans font-bold mt-8 text-gray-700 capitalize tracking-wide">{data}</div>
                </CardBody>
            </Card>
        </motion.li>
    )
}

export default Service;