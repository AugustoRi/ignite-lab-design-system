import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button ({ children, asChild, className, ...props } : ButtonProps) {
  const Tag = asChild ? Slot : "button";

  return (
    <Tag 
      className={
        clsx(
          "w-full py-3 px-4 rounded font-semibold text-sm text-black bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
          className,
        )
      }
      { ...props }
    >
      { children }
    </Tag>
  )
}