import { Card, CardBody, Image } from "@nextui-org/react";
import { chakra_petch } from "@/lang";

export function ProjectLeft({ type, data, info }: { type: string; data: string; info: string }) {
    return (<div className="w-4/5  mx-auto h-auto">
        <Card isHoverable isPressable >
            <CardBody className="flex flex-row space-x-6 items-center">
                <Image
                    alt="Album cover"
                    className="md:w-full w-32"
                    height={0}
                    shadow="md"
                    src="/image/project_1.webp"
                    width={0}
                />
                <div className="flex flex-col space-y-1.5 w-full">
                    <div className={`${chakra_petch.className} text-md md:text-xl`}>{type}</div>
                    <div className="text-lg md:text-2xl dark:text-green-500 text-green-600">{data}</div>
                    <div className="text-slate-500 text-justify tracking-wider leading-6 text-md md:text-lg">{info}</div>
                </div>
            </CardBody>
        </Card>
    </div>);
}

export function ProjectRight({ type, data, info }: { type: string; data: string; info: string }) {
    return (<div className="w-4/5  mx-auto h-auto">
        <Card isHoverable isPressable >
            <CardBody className="flex flex-row space-x-6 items-center">
                <div className="flex flex-col space-y-1.5 w-full items-end">
                    <div className={`${chakra_petch.className} text-md md:text-xl`}>{type}</div>
                    <div className="text-lg md:text-2xl dark:text-green-500 text-green-600">{data}</div>
                    <div className="text-slate-500 text-justify tracking-wider leading-6 text-md md:text-lg">{info}</div>
                </div>
                <Image
                    alt="Album cover"
                    className="md:w-full w-32 object-cover"
                    height={0}
                    shadow="md"
                    src="/image/project_2.webp"
                    width={0}
                />
            </CardBody>
        </Card>
    </div>);
}