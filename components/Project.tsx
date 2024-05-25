import { Card, CardBody, Image } from "@nextui-org/react";
import { chakra_petch } from "@/lang";
import { motion } from "framer-motion";
export function ProjectLeft({ type, data, info }: { type: string; data: string; info: string }) {
    const item = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { duration: 2, delay: 1 } }
    }
    return (<motion.div variants={item}>
        <Card isHoverable isPressable className="w-4/5 h-auto mx-auto">
            <CardBody className="flex flex-row items-center space-x-6">
                <Image
                    alt="Album cover"
                    className="object-cover md:w-full min-w-44"
                    height={0}
                    shadow="md"
                    src="/image/project_1.webp"
                    width={0}
                />
                <div className="flex flex-col space-y-1.5 w-full">
                    <div className={`${chakra_petch.className} text-md md:text-xl`}>{type}</div>
                    <div className="text-lg text-green-600 md:text-2xl dark:text-green-500">{data}</div>
                    <div className="leading-6 tracking-wider text-justify text-slate-500 text-md md:text-lg">{info}</div>
                </div>
            </CardBody>
        </Card>
    </motion.div>);
}

export function ProjectRight({ type, data, info }: { type: string; data: string; info: string }) {
    const item = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: [100, 0], transition: { duration: 2, delay: 1 } }
    }
    return (<motion.div variants={item}>
        <Card isHoverable isPressable className="w-4/5 h-auto mx-auto" >
            <CardBody className="flex flex-row items-center space-x-6">
                <div className="flex flex-col space-y-1.5 w-full items-end">
                    <div className={`${chakra_petch.className} text-md md:text-xl`}>{type}</div>
                    <div className="text-lg text-green-600 md:text-2xl dark:text-green-500">{data}</div>
                    <div className="leading-6 tracking-wider text-justify text-slate-500 text-md md:text-lg">{info}</div>
                </div>
                <Image
                    alt="Album cover"
                    className="object-cover md:w-full min-w-44"
                    height={0}
                    shadow="md"
                    src="/image/project_2.webp"
                    width={0}
                />
            </CardBody>
        </Card>
    </motion.div>);
}