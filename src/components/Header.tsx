'use client'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '@/store/searchSlice'

export default function Header() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchTerm(input))
    }, 500)
    return () => clearTimeout(handler)
  }, [input, dispatch])

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-black shadow">
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded w-1/2 bg-white text-black dark:bg-black dark:text-white dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"

      />
      <button
        onClick={toggleDarkMode}
        className=" ml-4 p-2 border rounded 
    border-gray-400 text-black bg-white 
    hover:bg-gray-200 
    dark:bg-black dark:text-white dark:border-yellow-500
    dark:hover:bg-gray-700
    transition"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
