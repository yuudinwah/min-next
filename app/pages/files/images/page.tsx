import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Eye,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  Plus,
  Search,
  Share,
  SlidersHorizontal,
  Trash2,
  Upload,
} from "lucide-react"
import Image from "next/image"

export default function ImagesPage() {
  const images = [
    {
      id: "IMG-001",
      name: "Product Photo 1.jpg",
      type: "JPG",
      size: "2.4 MB",
      dimensions: "1920 x 1080",
      owner: "John Smith",
      modified: "2 hours ago",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-002",
      name: "Banner Design.png",
      type: "PNG",
      size: "3.8 MB",
      dimensions: "2560 x 1440",
      owner: "Sarah Johnson",
      modified: "Yesterday",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-003",
      name: "Team Photo.jpg",
      type: "JPG",
      size: "5.2 MB",
      dimensions: "3840 x 2160",
      owner: "Michael Brown",
      modified: "3 days ago",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-004",
      name: "Logo Design.svg",
      type: "SVG",
      size: "0.5 MB",
      dimensions: "Vector",
      owner: "Emily Davis",
      modified: "1 week ago",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-005",
      name: "Event Flyer.jpg",
      type: "JPG",
      size: "1.8 MB",
      dimensions: "1080 x 1920",
      owner: "Robert Wilson",
      modified: "2 weeks ago",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-006",
      name: "Website Background.png",
      type: "PNG",
      size: "4.5 MB",
      dimensions: "3000 x 2000",
      owner: "Jennifer Lee",
      modified: "3 weeks ago",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-007",
      name: "Social Media Post.jpg",
      type: "JPG",
      size: "1.2 MB",
      dimensions: "1080 x 1080",
      owner: "David Miller",
      modified: "1 month ago",
      url: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "IMG-008",
      name: "Product Photo 2.jpg",
      type: "JPG",
      size: "2.1 MB",
      dimensions: "1920 x 1080",
      owner: "John Smith",
      modified: "1 month ago",
      url: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Images</h1>
        <p className="text-muted-foreground">Manage and organize your image files</p>
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
            <Input placeholder="Search images..." className="pl-8" />
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
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Images</CardTitle>
              <CardDescription>Manage your image files and folders</CardDescription>
            </div>
            <Tabs defaultValue="grid" className="w-[160px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid">
                  <Grid className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="list">
                  <List className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="grid" className="w-full">
            <TabsContent value="grid" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="group relative">
                    <div className="aspect-square overflow-hidden rounded-md border bg-muted">
                      <Image
                        src={image.url || "/placeholder.svg"}
                        alt={image.name}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-all group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex gap-2">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="secondary" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
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
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate">{image.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {image.dimensions} • {image.size}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="list" className="mt-0">
              <div className="space-y-2">
                {images.map((image) => (
                  <div key={image.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-md border">
                        <Image
                          src={image.url || "/placeholder.svg"}
                          alt={image.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{image.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {image.dimensions} • {image.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
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
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>8</strong> of <strong>8</strong> images
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

