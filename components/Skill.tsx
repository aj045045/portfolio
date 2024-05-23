import React from "react";
import { Progress } from "@nextui-org/react";

export function Skill({ label, value }: { label: string; value: number; }) {
    return (
        <Progress
            size="md"
            radius="full"
            classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-teal-300 to-green-700",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
            }}
            label={label}
            value={value}
            showValueLabel={true}
        />
    );
}
