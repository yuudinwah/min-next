import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  File,
  FileAudio,
  FileVideo,
  Filter,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Share,
  SlidersHorizontal,
  Trash2,
  Upload,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function MediaPage() {
  const mediaFiles = [
    {
      id: "MED-001",
      name: "Product Demo.mp4",
      type: "Video",
      format: "MP4",
      size: "24.5 MB",
      duration: "2:34",
      owner: "John Smith",
      modified: "2 hours ago",
      progress: 100,
    },
    {
      id: "MED-002",
      name: "Company Podcast.mp3",
      type: "Audio",
      format: "MP3",
      size: "18.2 MB",
      duration: "32:15",
      owner: "Sarah Johnson",
      modified: "Yesterday",
      progress: 100,
    },
    {
      id: "MED-003",
      name: "Training Video.mp4",
      type: "Video",
      format: "MP4",
      size: "156.8 MB",
      duration: "45:22",
      owner: "Michael Brown",
      modified: "3 days ago",
      progress: 100,
    },
    {
      id: "MED-004",
      name: "Interview Recording.wav",
      type: "Audio",
      format: "WAV",
      size: "42.3 MB",
      duration: "18:47",
      owner: "Emily Davis",
      modified: "1 week ago",
      progress: 100,
    },
    {
      id: "MED-005",
      name: "Marketing Video.mov",
      type: "Video",
      format: "MOV",
      size: "87.6 MB",
      duration: "5:12",
      owner: "Robert Wilson",
      modified: "2 weeks ago",
      progress: 100,
    },
    {
      id: "MED-006",
      name: "Conference Presentation.mp4",
      type: "Video",
      format: "MP4",
      size: "112.4 MB",
      duration: "28:05",
      owner: "Jennifer Lee",
      modified: "3 weeks ago",
      progress: 65,
    },
    {
      id: "MED-007",
      name: "Customer Testimonial.mp3",
      type: "Audio",
      format: "MP3",
      size: "8.7 MB",
      duration: "4:53",
      owner: "David Miller",
      modified: "1 month ago",
      progress: 35,
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "Video":
        return <FileVideo className="h-4 w-4 text-blue-500" />
      case "Audio":
        return <FileAudio className="h-4 w-4 text-purple-500" />
      default:
        return <File className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Media</h1>
        <p className="text-muted-foreground">Manage and organize your audio and video files</p>
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
            <Input placeholder="Search media..." className="pl-8" />
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
          <CardTitle>Media Files</CardTitle>
          <CardDescription>Manage your audio and video files</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaFiles.map((file) => (
                <TableRow key={file.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getFileIcon(file.type)}
                      <span className="font-medium">{file.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{file.format}</TableCell>
                  <TableCell>{file.size}</TableCell>
                  <TableCell>{file.duration}</TableCell>
                  <TableCell>{file.owner}</TableCell>
                  <TableCell>
                    {file.progress === 100 ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                        Complete
                      </Badge>
                    ) : (
                      <div className="w-24">
                        <Progress value={file.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{file.progress}% uploaded</p>
                      </div>
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
                          <Play className="mr-2 h-4 w-4" />
                          Play
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
          Showing <strong>7</strong> of <strong>7</strong> media files
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

