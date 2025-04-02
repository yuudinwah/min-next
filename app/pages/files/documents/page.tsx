import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Eye,
  File,
  FileText,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Share,
  SlidersHorizontal,
  Trash2,
  Upload,
} from "lucide-react"

export default function DocumentsPage() {
  const documents = [
    {
      id: "DOC-001",
      name: "Annual Report 2023.pdf",
      type: "PDF",
      size: "4.2 MB",
      owner: "John Smith",
      modified: "2 hours ago",
      shared: true,
    },
    {
      id: "DOC-002",
      name: "Project Proposal.docx",
      type: "Word",
      size: "1.8 MB",
      owner: "Sarah Johnson",
      modified: "Yesterday",
      shared: true,
    },
    {
      id: "DOC-003",
      name: "Financial Statement Q2.xlsx",
      type: "Excel",
      size: "3.5 MB",
      owner: "Michael Brown",
      modified: "3 days ago",
      shared: false,
    },
    {
      id: "DOC-004",
      name: "Marketing Strategy.pptx",
      type: "PowerPoint",
      size: "6.7 MB",
      owner: "Emily Davis",
      modified: "1 week ago",
      shared: true,
    },
    {
      id: "DOC-005",
      name: "Legal Contract.pdf",
      type: "PDF",
      size: "2.3 MB",
      owner: "Robert Wilson",
      modified: "2 weeks ago",
      shared: false,
    },
    {
      id: "DOC-006",
      name: "Product Specifications.docx",
      type: "Word",
      size: "1.2 MB",
      owner: "Jennifer Lee",
      modified: "3 weeks ago",
      shared: false,
    },
    {
      id: "DOC-007",
      name: "Customer Survey Results.xlsx",
      type: "Excel",
      size: "4.8 MB",
      owner: "David Miller",
      modified: "1 month ago",
      shared: true,
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-4 w-4 text-red-500" />
      case "Word":
        return <FileText className="h-4 w-4 text-blue-500" />
      case "Excel":
        return <FileText className="h-4 w-4 text-green-500" />
      case "PowerPoint":
        return <FileText className="h-4 w-4 text-orange-500" />
      default:
        return <File className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">Manage and organize your document files</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documents..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Documents</CardTitle>
          <CardDescription>Manage your document files and folders</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getFileIcon(doc.type)}
                      <span className="font-medium">{doc.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.owner}</TableCell>
                  <TableCell>{doc.modified}</TableCell>
                  <TableCell>
                    {doc.shared ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                        Shared
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                        Private
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>7</strong> of <strong>7</strong> documents
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

