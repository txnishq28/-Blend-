'use client'

import { useState } from 'react'
import SettingsPanel from './SettingsPanel'
import Link from 'next/link'

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <aside className="w-64 h-screen bg-white dark:bg-black shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Link href="/">🚀 Blend 🚀</Link>
      </h2>
      <nav className="space-y-4">
        <Link href="/" className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Feed</Link>
        <Link href="/trending" className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Trending</Link>
        <Link href="/favorites" className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Favorites</Link>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="block w-full text-left px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
        >
          Settings
        </button>
      </nav>

      {showSettings && (
        <div className="mt-6">
          <SettingsPanel />
        </div>
      )}
    </aside>
  )
}
