import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 px-5 font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid",
  {
    variants: {
      variant: {
        solid: "bg-acid text-bg hover:bg-fg",
        line: "border border-line bg-transparent text-fg hover:border-acid hover:text-acid",
        quiet: "px-0 text-fg underline decoration-line underline-offset-4 hover:text-acid hover:decoration-acid",
      },
    },
    defaultVariants: { variant: "solid" },
  },
);

export function buttonClass(variant?: VariantProps<typeof buttonVariants>["variant"], className?: string) {
  return cn(buttonVariants({ variant }), className);
}
