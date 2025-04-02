"use client"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Archive,
  Clock,
  Filter,
  Inbox,
  MailOpen,
  MoreHorizontal,
  RefreshCw,
  Search,
  Star,
  Tag,
  Trash2,
  Undo,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function EmailTrashPage() {
  const emails = [
    {
      id: 301,
      from: "Newsletter",
      email: "newsletter@example.com",
      subject: "Weekly Industry Updates",
      preview: "Stay up to date with the latest industry trends and news...",
      time: "2 days ago",
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      labels: [],
    },
    {
      id: 302,
      from: "System Notification",
      email: "noreply@company.com",
      subject: "Your Account Password Reset",
      preview: "You recently requested to reset your password. If you did not make this request, please ignore...",
      time: "5 days ago",
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      labels: [],
    },
    {
      id: 303,
      from: "Old Client",
      email: "oldclient@example.org",
      subject: "Past Project Files",
      preview: "Here are the files from our project last year. I thought you might want them for reference...",
      time: "2 weeks ago",
      isRead: true,
      isStarred: false,
      hasAttachment: true,
      labels: [],
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Email</h1>
        <p className="text-muted-foreground">Manage your emails and communications</p>
      </div>

      <Card className="overflow-hidden">
        <Tabs defaultValue="primary">
          <div className="flex flex-col md:flex-row border-b">
            <div className="p-4 border-r md:w-64 flex-shrink-0">
              <Button className="w-full mb-4" size="sm">
                <MailOpen className="mr-2 h-4 w-4" />
                Compose
              </Button>

              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Inbox className="mr-2 h-4 w-4" />
                  Inbox
                  <Badge className="ml-auto" variant="secondary">
                    128
                  </Badge>
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Star className="mr-2 h-4 w-4" />
                  Starred
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Clock className="mr-2 h-4 w-4" />
                  Snoozed
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Trash
                </Button>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Labels</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Work
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    Personal
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                    Finance
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                    Marketing
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    Support
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="p-4 border-b flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search trash..." className="pl-8" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-2 border-b bg-muted/20">
                <p className="text-xs text-muted-foreground text-center">
                  Messages in Trash will be permanently deleted after 30 days.
                </p>
              </div>

              <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto">
                <TabsTrigger
                  value="primary"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  Trash
                </TabsTrigger>
              </TabsList>

              <TabsContent value="primary" className="m-0">
                <div className="divide-y">
                  {emails.map((email) => (
                    <Link href={`/email/detail/${email.id}`} key={email.id} className="block">
                      <div className="flex items-center gap-2 p-3 hover:bg-muted/50">
                        <Checkbox id={`email-${email.id}`} onClick={(e) => e.stopPropagation()} />
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                          <Undo className="h-4 w-4" />
                        </Button>
                        <div className="flex-1 min-w-0 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <p className="font-medium truncate">{email.from}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm truncate">{email.subject}</p>
                            {email.hasAttachment && <Tag className="h-3 w-3 text-muted-foreground" />}
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{email.preview}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</p>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  )
}

