"use client"
import { Delete, Edit2, Eye, MoreHorizontal, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

export const columns = [
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "program",
    header: "Program/Kegiatan",
  },
  {
    accessorKey: "lokasi",
    header: "Lokasi",
  },
  {
    accessorKey: "pagu",
    header: "Pagu",
  },
  {
    accessorKey: "alasan",
    header: "Alasan belum disepakati",
  },
  {
    id: "actions",
    header:"Pilihan",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="h-8 w-8 p-0 hover:cursor-pointer hover:text-[#acfa1b]">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-[#171717]" align="end">
            
            <DropdownMenuItem
                className="text-slate-200 hover:cursor-pointer"
            >
              <Eye className="text-slate-200" /> <span>Lihat</span>
            </DropdownMenuItem>
            <DropdownMenuItem
                className="text-slate-200 hover:cursor-pointer"
            >
              <Edit2 className="text-slate-200" /> <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
                className="text-slate-200 hover:cursor-pointer"
            >
              <Trash className="text-red-400" /> <span>Hapus</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
