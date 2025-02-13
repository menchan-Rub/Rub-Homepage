import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Added import for React

export const metadata: Metadata = {
  title: "Rub - ウェブ開発学習中",
  description: "ウェブ開発を学ぶ学生、Rubのウェブサイトです。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

