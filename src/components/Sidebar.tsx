'use client'

import { useState } from 'react'
import SettingsPanel from './SettingsPanel'

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <aside className="w-64 h-screen bg-white dark:bg-black shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <a href="/"> 🚀 Blend 🚀 </a>
      </h2>
      <nav className="space-y-4">
        <a href="/" className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Feed</a>
        <a href="/trending" className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Trending</a>
        <a href="/favorites" className="block px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Favorites</a>
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
