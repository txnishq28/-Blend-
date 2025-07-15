// src/components/Layout.tsx

import Sidebar from './Sidebar'
import Header from './Header'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
