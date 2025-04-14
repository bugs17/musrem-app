"use client"
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AksiDropdown from "@/components/aksi-dropdown";
import FormInputKegiatan from "@/components/form-input-kegiatan";
import { PreviewKegiatan } from "@/components/sheet-show-kegiatan";

const dummyData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  col1: "haloo",
  col2: "haloo",
  col3: "haloo",
  col4: "haloo",
}));

const TableComponent = () => {
  return (
    <>
      <div className="h-auto mb-5 w-full flex flex-row justify-between">
        <Input placeholder="Cari kegiatan" className="w-[30%] items-start flex h-8 text-slate-300 bg-[#18181a] selection:bg-slate-200 selection:text-black border-neutral-600" type="text" />
        <div className="items-end flex gap-3">
          {/* <Button size="sm" variant="destructive" className="cursor-pointer">Hapus pilihan</Button> */}
          {/* <Button size="sm" className="bg-neutral-100 text-black hover:bg-neutral-300 cursor-pointer">Tambah</Button> */}
          <FormInputKegiatan />
        </div>
      </div>

      <div className="flex flex-col h-[500px] border bg-[#18181a] border-neutral-600 rounded-md overflow-hidden">

        <Table className="min-w-full">
        <TableHeader className="sticky top-0 z-10 bg-neutral-300 shadow-sm">
          <TableRow>
            <TableHead>
              <Checkbox className="border-neutral-950" />
            </TableHead>
            <TableHead className="text-left">OPD</TableHead>
            <TableHead className="text-left">Kegiatan</TableHead>
            <TableHead className="text-left">Sub-kegiatan</TableHead>
            <TableHead className="text-left">Usulan</TableHead>
            <TableHead className="text-center">Lokasi</TableHead>
            <TableHead className="text-center">Satuan</TableHead>
            <TableHead className="text-center">Volume</TableHead>
            <TableHead className="text-center">Anggaran</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 1 }).map((_, i) => (
            <TableRow key={i} className='text-slate-200 '>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell onClick={() => alert(`haloo ${i+1}`)}>#</TableCell>
              <TableCell onClick={() => alert(`haloo ${i+1}`)}>#</TableCell>
              <TableCell onClick={() => alert(`haloo ${i+1}`)}>#</TableCell>
              <TableCell>#</TableCell>
              <TableCell className="text-center">#</TableCell>
              <TableCell className="text-center">#</TableCell>
              <TableCell className="text-center">#</TableCell>
              <TableCell className="text-center">
                <PreviewKegiatan judul="Halooo">
                  <Button size="sm" variant="custom1" >#</Button>
                </PreviewKegiatan>
              </TableCell>
              <TableCell className="text-right">
                <AksiDropdown />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        
      </div>
    </>
  );
};

export default TableComponent;
