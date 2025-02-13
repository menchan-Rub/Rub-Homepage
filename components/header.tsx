"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Ruby Lover
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
        </nav>
        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-700"
          >
            {theme === "dark" ? (
              <RiSunLine size={24} className="text-white" />
            ) : (
              <RiMoonFill size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

