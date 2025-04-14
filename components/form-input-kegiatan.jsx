import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'


const FormInputKegiatan = () => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button  size="sm" className="bg-neutral-100 text-black hover:bg-neutral-300 cursor-pointer">Tambah</Button>
      </DialogTrigger>
     
      <DialogContent  className="bg-[#18181a] border-neutral-600 h-10/12 sm:max-w-[425px] flex flex-col overflow-auto items-start">
       
        <DialogTitle className="text-neutral-100">Form pemetaan</DialogTitle>
        <div className="flex flex-col gap-4 w-full pt-4">
          {/* opd */}
          <div className="flex flex-col items-start gap-2">
            <Label  className="text-left text-neutral-200">
              OPD
            </Label>
            <Select>
              <SelectTrigger className="w-full border-neutral-600 text-neutral-50">
                <SelectValue placeholder="Pilih OPD" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup className="">
                  <SelectLabel>OPD</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>                                     
          </div>
          
          {/* program */}
          <div className="flex flex-col items-start gap-2">
            <Label  className="text-left text-neutral-200">
              Program
            </Label>
            <Select>
              <SelectTrigger className="w-full border-neutral-600 text-neutral-50">
                <SelectValue placeholder="Pilih Program" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup className="">
                  <SelectLabel>Program</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>                                     
          </div>

          {/* kegiatan */}
          <div className="flex flex-col items-start gap-2">
            <Label  className="text-left text-neutral-200">
              Kegiatan
            </Label>
            <Select>
              <SelectTrigger className="w-full border-neutral-600 text-neutral-50">
                <SelectValue placeholder="Pilih Kegiatan" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup className="">
                  <SelectLabel>Kegiatan</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>                                     
          </div>

          {/* sub-kegiatan */}
          <div className="flex flex-col items-start gap-2">
            <Label  className="text-left text-neutral-200">
              Sub-kegiatan
            </Label>
            <Select>
              <SelectTrigger className="w-full border-neutral-600 text-neutral-50">
                <SelectValue placeholder="Pilih Sub-kegiatan" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup className="">
                  <SelectLabel>Sub-kegiatan</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>                                     
          </div>

          {/* lokasi */}
          <div className="flex flex-col items-start gap-2">
            <Label  className="text-left text-neutral-200">
              Lokasi (Kampung)
            </Label>
            <Select>
              <SelectTrigger className="w-full border-neutral-600 text-neutral-50">
                <SelectValue placeholder="Pilih lokasi (kampung)" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup className="">
                  <SelectLabel>kampung</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Permintaan */}
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-left text-neutral-200">
              Permintaan
            </Label>
            <Input id="name" placeholder="Permintaan" className="col-span-3 h-8 border-neutral-600 text-neutral-50 selection:bg-slate-50 selection:text-black w-full" />
          </div>

          {/* satuan */}
          <div className="flex flex-col items-start gap-2">
            <Label  className="text-left text-neutral-200">
            Satuan
            </Label>
            <Select>
              <SelectTrigger className="w-full border-neutral-600 text-neutral-50">
                <SelectValue placeholder="Pilih Satuan" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup className="">
                  <SelectLabel>Satuan</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          {/* Volume */}
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="volume" className="text-left text-neutral-200">
            Volume
            </Label>
            <Input type="number" id="volume" placeholder="Volume" className="col-span-3 h-8 border-neutral-600 text-neutral-50 selection:bg-slate-50 selection:text-black w-full" />
          </div>

          {/* Anggaran */}
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-left text-neutral-200">
              Anggaran
            </Label>
            <Input type="number" id="name" placeholder="Anggaran" className="col-span-3 h-8 border-neutral-600 text-neutral-50 selection:bg-slate-50 selection:text-black w-full" />
          </div>
          
          {/* Anggaran */}
          <div className="flex flex-col items-end ">
            <Button  size="sm" className="bg-neutral-100 text-black hover:bg-neutral-300 cursor-pointer">Simpan</Button>
          </div>
          
          
        </div>
      </DialogContent>
    </Dialog>


  )
}

{/*  */}

export default FormInputKegiatan