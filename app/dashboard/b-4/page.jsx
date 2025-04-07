import {  columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(){
  // Fetch data from your API here.
  return [
    {
      id: "728ed525",
      no: "1",
      program:"bla bla. blaa okajd",
      lokasi: "ansus",
      pagu: "-",
      alasan:"-"
    },
    {
      id: "728ed52g",
      no: "2",
      program:"bla bla. blaa",
      lokasi: "ansus",
      pagu: "-",
      alasan:"-"
    },
    {
      id: "728ed52f",
      no: "3",
      program:"bla bla. blaa",
      lokasi: "-",
      pagu: "-",
      alasan:"-"
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
