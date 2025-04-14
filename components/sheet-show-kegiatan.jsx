import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function PreviewKegiatan({children, judul}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="bg-[#18181a] border-neutral-600 text-neutral-200">
        <SheetHeader>
          <SheetTitle className="text-neutral-200">{judul}</SheetTitle>
          <SheetDescription className="text-neutral-400">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter className="flex flex-row gap-4 w-full">
        <div className="w-full">
          <Button size="sm" className="bg-neutral-600 w-full hover:bg-neutral-600 text-neutral-50 hover:text-[#acfa1b] cursor-pointer">Edit</Button>
        </div>
        <div className="w-full">
          <Button size="sm" className="bg-red-500 w-full hover:bg-red-400 text-neutral-50 hover:text-neutral-100 cursor-pointer">Hapus</Button>
        </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
