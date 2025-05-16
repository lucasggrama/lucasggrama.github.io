import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...args: any[]): string {
  return twMerge(clsx(...args));
}
