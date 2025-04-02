"use client"

import { DataTable } from "@/components/ui/data-table/data-table"
import { columns, type Payment } from "@/components/ui/data-table/columns"

// Generate random data
const data: Payment[] = Array.from({ length: 100 }).map((_, i) => {
  const statuses = ["pending", "processing", "success", "failed"] as const
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

  return {
    id: `PAY-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`,
    amount: Math.floor(Math.random() * 10000) / 100,
    status: randomStatus,
    email: `user${i + 1}@example.com`,
    name: `User ${i + 1}`,
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  }
})

export function DataTableDemo() {
  return <DataTable columns={columns} data={data} searchKey="email" searchPlaceholder="Filter emails..." />
}

