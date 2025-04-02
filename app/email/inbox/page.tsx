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

export default function EmailInboxPage() {
  const emails = [
    {
      id: 1,
      from: "John Smith",
      email: "john.smith@example.com",
      subject: "Project Update - Q2 Goals",
      preview: "Hi team, I wanted to share an update on our Q2 goals and progress so far...",
      time: "10:32 AM",
      isRead: false,
      isStarred: true,
      hasAttachment: true,
      labels: ["work"],
    },
    {
      id: 2,
      from: "Marketing Team",
      email: "marketing@company.com",
      subject: "New Campaign Draft for Review",
      preview: "Please review the attached campaign materials before our meeting tomorrow...",
      time: "Yesterday",
      isRead: true,
      isStarred: false,
      hasAttachment: true,
      labels: ["marketing"],
    },
    {
      id: 3,
      from: "Sarah Johnson",
      email: "sarah.j@example.com",
      subject: "Client Feedback on Latest Designs",
      preview: "The client has provided some feedback on our latest designs. Overall they're pleased but...",
      time: "Yesterday",
      isRead: true,
      isStarred: true,
      hasAttachment: false,
      labels: ["client", "design"],
    },
    {
      id: 4,
      from: "Accounting Department",
      email: "accounting@company.com",
      subject: "Monthly Expense Report",
      preview: "Please find attached your monthly expense report for review and approval...",
      time: "Jul 12",
      isRead: true,
      isStarred: false,
      hasAttachment: true,
      labels: ["finance"],
    },
    {
      id: 5,
      from: "Tech Support",
      email: "support@company.com",
      subject: "Your Support Ticket #45678",
      preview: "We've received your support request regarding the dashboard access issue...",
      time: "Jul 11",
      isRead: false,
      isStarred: false,
      hasAttachment: false,
      labels: ["support"],
    },
    {
      id: 6,
      from: "Michael Brown",
      email: "michael.b@example.com",
      subject: "Weekend Team Building Event",
      preview: "Just a reminder about our team building event this weekend. Please let me know if you can attend...",
      time: "Jul 10",
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      labels: ["team"],
    },
    {
      id: 7,
      from: "Product Team",
      email: "product@company.com",
      subject: "New Feature Rollout Plan",
      preview: "We're excited to announce our plan for rolling out the new features we discussed last month...",
      time: "Jul 8",
      isRead: true,
      isStarred: true,
      hasAttachment: false,
      labels: ["product"],
    },
  ]

  const getLabelColor = (label: string) => {
    switch (label) {
      case "work":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "marketing":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "client":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "design":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
      case "finance":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "support":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "team":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "product":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

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
                  Primary
                </TabsTrigger>
                <TabsTrigger
                  value="social"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  Social
                </TabsTrigger>
                <TabsTrigger
                  value="promotions"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  Promotions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="primary" className="m-0">
                <div className="divide-y">
                  {emails.map((email) => (
                    <Link href={`/email/detail/${email.id}`} key={email.id} className="block">
                      <div
                        className={`flex items-center gap-2 p-3 hover:bg-muted/50 ${!email.isRead ? "bg-muted/30" : ""}`}
                      >
                        <Checkbox id={`email-${email.id}`} onClick={(e) => e.stopPropagation()} />
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                          <Star className={`h-4 w-4 ${email.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`} />
                        </Button>
                        <div className="flex-1 min-w-0 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <p className={`font-medium truncate ${!email.isRead ? "font-semibold" : ""}`}>
                              {email.from}
                            </p>
                            {email.labels.map((label) => (
                              <span key={label} className={`text-xs px-1.5 py-0.5 rounded ${getLabelColor(label)}`}>
                                {label}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <p className={`text-sm truncate ${!email.isRead ? "font-semibold" : ""}`}>
                              {email.subject}
                            </p>
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

              <TabsContent value="social" className="m-0 p-4 text-center text-muted-foreground">
                <p>No social emails to display.</p>
              </TabsContent>

              <TabsContent value="promotions" className="m-0 p-4 text-center text-muted-foreground">
                <p>No promotional emails to display.</p>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  )
}

