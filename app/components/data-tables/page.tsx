import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTableDemo } from "./data-table-demo"

export const metadata: Metadata = {
  title: "Data Tables",
  description: "Advanced data tables with sorting, filtering, and more",
}

export default function DataTablesPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Data Tables</h1>
        <p className="text-muted-foreground mt-2">
          Advanced data tables with sorting, filtering, pagination, and more.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Card>
                <CardHeader>
                  <CardTitle>Payments</CardTitle>
                  <CardDescription>
                    Manage your payment transactions with advanced filtering and sorting.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DataTableDemo />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>DataTable Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">1. Define your columns</h3>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                        {`import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, ... } from "@/components/ui/dropdown-menu"

// Define your data type
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  // ...other fields
}

// Define your columns
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return <Badge variant="outline">{status}</Badge>
    },
  },
  // ...other columns
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">2. Use the DataTable component</h3>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                        {`import { DataTable } from "@/components/ui/data-table/data-table"
import { columns } from "./columns"

// Your data
const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "example@example.com",
    // ...other fields
  },
  // ...more data
]

export function DataTableDemo() {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="email"
      searchPlaceholder="Filter emails..."
    />
  )
}`}
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">3. Features included</h3>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Column sorting (click column headers)</li>
                        <li>Text filtering/search</li>
                        <li>Pagination</li>
                        <li>Row selection</li>
                        <li>Column visibility toggle</li>
                        <li>CSV export</li>
                        <li>Responsive design</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

