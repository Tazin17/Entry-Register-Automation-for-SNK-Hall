import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// src/lib/utils.js or src/lib/utils.ts

// Correct function name should be 'formatDate'
export const formatDate = (date) => {
  const d = new Date(date);
  // Format date logic
  return d.toLocaleDateString();
};

// Correct 'formatDateInDDMMYYY'
export const formatDateInDDMMYYY = (date) => {
  const d = new Date(date);
  // Convert to DD/MM/YYYY format
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

