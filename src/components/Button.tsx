import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button ({ children, asChild } : ButtonProps) {
  const Tag = asChild ? Slot : "button";

  return (
    <Tag 
      className={
        clsx(
          "w-full py-4 px-3 rounded font-semibold text-sm text-black bg-cyan-500 hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
        )
      }
    >
      { children }
    </Tag>
  )
}