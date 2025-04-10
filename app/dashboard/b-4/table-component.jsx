import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"

const TableComponent = () => {
  return (
    <div className="rounded-md border border-neutral-500 overflow-hidden">
        <Table>
           <TableHeader>
                <TableRow key={"1"} className="hover:bg-transparent">
                    <TableHead className="text-neutral-500" key={"01"}>
                          #
                    </TableHead>
                    <TableHead className="text-neutral-500" key={"1"}>
                          header 1
                    </TableHead>
                    <TableHead className="text-neutral-500" key={"2"}>
                          header 2
                    </TableHead>
                    <TableHead className="text-neutral-500" key={"3"}>
                          header 3
                    </TableHead>
                    <TableHead className="text-neutral-500" key={"4"}>
                          header 4
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow key={1} className="text-slate-200 hover:bg-neutral-700" >
                  <TableCell className="border-t border-t-neutral-500" key={1}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={2}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={3}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={4}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={5}>
                    <span>haloo</span>
                  </TableCell>
              </TableRow>
              <TableRow key={2} className="text-slate-200 hover:bg-neutral-700" >
                  <TableCell className="border-t border-t-neutral-500" key={1}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={2}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={3}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={4}>
                    <span>haloo</span>
                  </TableCell>
                  <TableCell className="border-t border-t-neutral-500" key={5}>
                    <span>haloo</span>
                  </TableCell>
              </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default TableComponent