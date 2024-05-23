'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";

export function About() {
    interface TableValueInterface {
        key: string;
        value: string;
    }

    const tableValues: TableValueInterface[] = [
        { key: "Name", value: "Ansh Yadav" },
        { key: "Birth Year", value: "2004" },
        { key: "No. of Project", value: "4" },
        { key: "Experience", value: "3 Year" },
        { key: "Language", value: "Hindi, English, Gujarat" },
        { key: "Address", value: "Ahmedabad, Gujarat" },
        { key: "Nationality", value: "Indian" },
    ];
    return (
        <div className="w-fit select-none mx-auto">
            <Table>
                <TableHeader>
                    <TableColumn className="lg:text-lg md:text-medium">ITEM</TableColumn>
                    <TableColumn className="lg:text-lg md:text-medium">INFO.</TableColumn>
                </TableHeader>
                <TableBody>
                    {tableValues.map((value, index) => (
                        <TableRow key={index}>
                            <TableCell className="lg:text-lg md:text-medium">{value.key}</TableCell>
                            <TableCell className="lg:text-lg md:text-medium">{value.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
