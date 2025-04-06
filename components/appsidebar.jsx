"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const {state} = useSidebar()
  return (
    <Sidebar collapsible="icon">
    <SidebarHeader className="bg-[#08080a] text-slate-200 border-b border-grid flex flex-row justify-center items-center h-12">
    <span className="w-8 h-8 flex items-center justify-center text-[20px] bg-white font-extrabold hover:-rotate-[35deg] hover:bg-violet-500 cursor-pointer text-black rounded-full">
      M
    </span>
      <h3 className={state === 'collapsed' ? "hidden" : "text-white font-bold cursor-pointer"}>musrembang</h3>
    </SidebarHeader>
      <SidebarContent className="bg-[#08080a] text-slate-200 border-r border-grid">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-200">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
    </Sidebar>
  )
}
