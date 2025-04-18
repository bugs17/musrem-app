import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Edit2, Eye, MoreHorizontal, Trash } from 'lucide-react'
import { Button } from './ui/button'
import { PreviewKegiatan } from './sheet-show-kegiatan'

const AksiDropdown = () => {
  return (
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" size="sm" className="h-8 w-8 p-0 bg-neutral-500 hover:cursor-pointer hover:text-[#acfa1b]">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-[#171717]" align="end">
            

            <DropdownMenuItem
                className="text-slate-200 hover:cursor-pointer"
            >
              <Edit2 className="text-slate-200" /> <span>Edit</span>
            </DropdownMenuItem>

            <DropdownMenuItem
                className="text-slate-200 hover:cursor-pointer"
            >
              <Trash className="text-red-400" /> <span>Hapus</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default AksiDropdown