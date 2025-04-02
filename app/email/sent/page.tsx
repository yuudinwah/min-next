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
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function EmailSentPage() {
  const emails = [
    {
      id: 101,
      to: "John Smith",
      email: "john.smith@example.com",
      subject: "Re: Project Update - Q2 Goals",
      preview: "Thanks for the update, John. I've reviewed the progress and I think we're on track...",
      time: "10:45 AM",
      isStarred: false,
      hasAttachment: false,
    },
    {
      id: 102,
      to: "Marketing Team",
      email: "marketing@company.com",
      subject: "Campaign Feedback",
      preview: "I've reviewed the campaign materials and have some suggestions for improvements...",
      time: "Yesterday",
      isStarred: true,
      hasAttachment: true,
    },
    {
      id: 103,
      to: "Sarah Johnson",
      email: "sarah.j@example.com",
      subject: "Design Review",
      preview: "The latest designs look great! I especially like the new color scheme and layout...",
      time: "Yesterday",
      isStarred: false,
      hasAttachment: false,
    },
    {
      id: 104,
      to: "Accounting Department",
      email: "accounting@company.com",
      subject: "Expense Report Submission",
      preview: "Please find attached my expense report for June. Let me know if you need any clarification...",
      time: "Jul 12",
      isStarred: false,
      hasAttachment: true,
    },
    {
      id: 105,
      to: "Tech Support",
      email: "support@company.com",
      subject: "Dashboard Access Issue",
      preview: "I'm having trouble accessing the analytics dashboard. Could you please help me resolve this issue?...",
      time: "Jul 11",
      isStarred: false,
      hasAttachment: false,
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
                  <Input placeholder="Search emails..." className="pl-8" />
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

              <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto">
                <TabsTrigger
                  value="primary"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  Sent
                </TabsTrigger>
                <TabsTrigger
                  value="scheduled"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  Scheduled
                </TabsTrigger>
              </TabsList>

              <TabsContent value="primary" className="m-0">
                <div className="divide-y">
                  {emails.map((email) => (
                    <Link href={`/email/detail/${email.id}`} key={email.id} className="block">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 p-3 hover:bg-muted/50">
                          <Checkbox id={`email-${email.id}`} onClick={(e) => e.stopPropagation()} />
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                            <Star className={`h-4 w-4 ${email.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`} />
                          </Button>
                          <div className="flex-1 min-w-0 cursor-pointer">
                            <div className="flex items-center gap-2">
                              <p className="font-medium truncate">To: {email.to}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm truncate">{email.subject}</p>
                              {email.hasAttachment && <Tag className="h-3 w-3 text-muted-foreground" />}
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{email.preview}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scheduled" className="m-0 p-4 text-center text-muted-foreground">
                <p>No scheduled emails to display.</p>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  )
}

