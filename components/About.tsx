'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { motion } from "framer-motion";

export function About() {
    interface TableValueInterface {
        key: string;
        value: string;
    }

    const tableValues: TableValueInterface[] = [
        { key: "Name", value: "Ansh Yadav" },
        { key: "Birth Year", value: "2004" },
        { key: "Objective", value: "Software Developer" },
        { key: "Gender", value: "Male" },
        { key: "Religion", value: "Hindu" },
        { key: "Language", value: "Hindi, English, Gujarat" },
        { key: "Marital Status", value: "Single" },
        { key: "E-mail", value: "aj045045@gmail.com" },
        { key: "No. of Project", value: "5" },
        { key: "Experience", value: "3 Year" },
        { key: "Website", value: "https://portfolio-ansh-yadav.vercel.app/" },
        { key: "Address", value: "Ahmedabad, Gujarat" },
        { key: "Nationality", value: "Indian" },
    ];
    return (
        <motion.div initial={{ opacity: 0,y:-100 }} whileInView={{ opacity: 1,y:0 }} transition={{ delay: 2, duration: 2 }} className="p-10 rounded-lg dark:bg-green-200/20 bg-green-300/20 w-fit mx-auto">
            <motion.div className="w-fit mx-auto"  drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}>
                <Table>
                    <TableHeader >
                        <TableColumn className="select-none md:text-sm">ITEM</TableColumn>
                        <TableColumn className="md:text-sm select-none">INFO.</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {tableValues.map((value, index) => (
                            <TableRow key={index}>
                                <TableCell className="md:text-sm select-none">{value.key}</TableCell>
                                <TableCell className="md:text-sm ">{value.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </motion.div>
        </motion.div>
    );
}
