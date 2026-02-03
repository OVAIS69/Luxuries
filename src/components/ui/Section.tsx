import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export default function Section({ children, className, fullWidth = false, ...props }: SectionProps) {
    return (
        <section
            className={cn("relative w-full py-20 md:py-32 overflow-hidden", className)}
            {...props}
        >
            {fullWidth ? (
                children
            ) : (
                <div className="container mx-auto px-6">
                    {children}
                </div>
            )}
        </section>
    );
}
