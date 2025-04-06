import { AppSidebar } from '@/components/appsidebar'
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      
      <main className='bg-[#08080a] h-screen w-full overflow-y-auto pt-12'>
        <div className="fixed h-12 top-0 z-50 bg-[#08080a]/80 px-4 backdrop-blur-md w-full border-b border-grid flex items-center">
            <SidebarTrigger className="text-slate-200" />
        </div>
        <div className='px-4 h-screen w-full overflow-y-auto'>
            {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

// bg-[#08080a]/80

export default DashboardLayout