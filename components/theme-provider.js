"use client"
import { ThemeProvider } from "next-themes"

export function ThemeProviderComponent({children,...props}) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>
}
