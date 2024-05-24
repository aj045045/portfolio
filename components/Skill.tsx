import React from "react";
import { Progress } from "@nextui-org/react";

export function Skill({ label, value }: { label: string; value: number; }) {
    return (
        <Progress
            size="md"
            radius="full"
            classNames={{
                base: "max-w-sm",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-teal-700 to-green-300",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60 select-none",
            }}
            label={label}
            value={value}
            showValueLabel={true}
        />
    );
}
