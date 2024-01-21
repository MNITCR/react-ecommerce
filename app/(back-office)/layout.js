import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex'>
        {/* Sidebar */}
        <Sidebar />
        <div className="w-full">
            {/* Header */}
            <Navbar/>
            <main className='ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-16'>
                {children}
            </main>
            {/* Main */}
        </div>
        {/* Main Body */}
    </div>
  )
}

export default Layout
