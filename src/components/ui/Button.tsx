import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
}

export default function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300",
                variant === "primary"
                    ? "bg-luxury-gold text-black hover:bg-white"
                    : "border border-white/30 text-white hover:border-luxury-gold hover:text-luxury-gold",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}
