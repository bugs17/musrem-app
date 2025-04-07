"use client"
import { Calendar, Home, Inbox, Search, Settings, BookCopy, ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "Form",
    icon: BookCopy,
    submenus : [
      {
        title: "B-4",
        url:"#"
      },
      {
        title: "B-5",
        url:"#"
      }
    ]
  },
  {
    title: "Form2",
    icon: BookCopy,
    submenus : [
      {
        title: "B-6",
        url:"#"
      },
      {
        title: "B-7",
        url:"#"
      }
    ]
  },
]

export function AppSidebar() {
  const {state} = useSidebar()
  return (
    <Sidebar collapsible="icon">
    <SidebarHeader className="bg-[#08080a] text-slate-200 border-b border-grid flex flex-row justify-center items-center h-12">
    <span className="w-8 h-8 flex items-center justify-center text-[20px] bg-[#acfa1b] font-extrabold cursor-pointer text-black rounded-full">
      {/* <img src="/logo.png" className="h-6 w-6" /> */}
      M
    </span>

      {/* komponen client H3, nanti pindahkan ke komponen berbeda */}
      <h3 className={state === 'collapsed' ? "hidden" : "text-white font-bold cursor-pointer"}>musrenbang</h3>
    </SidebarHeader>
      <SidebarContent className="bg-[#08080a] text-slate-200 border-r border-grid">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-200">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={true}
                  className="group/collapsible"
                >
                  <SidebarMenuItem >

                    <CollapsibleTrigger asChild className={cn(item.submenus[0].title === "B-4" ? "hover:bg-neutral-700 hover:text-slate-200" : "hover:bg-neutral-700 hover:text-slate-200")}>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub className="border-l-neutral-700">
                        {item.submenus?.map((submenu) => (
                          <SidebarMenuSubItem key={submenu.title}>
                            <SidebarMenuSubButton asChild className="hover:bg-neutral-900 hover:text-slate-200 text-slate-200">
                              <a href={submenu.url}>
                                <span>{submenu.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>

                  </SidebarMenuItem>
              </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter className="bg-[#08080a] border-r border-grid">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
