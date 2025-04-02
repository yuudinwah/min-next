import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Archive,
  ArrowLeft,
  Download,
  Forward,
  MoreHorizontal,
  Printer,
  Reply,
  ReplyAll,
  Star,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

interface EmailDetailPageProps {
  params: {
    id: string
  }
}

export default function EmailDetailPage({ params }: EmailDetailPageProps) {
  // In a real app, you would fetch the email data based on the ID
  // For this example, we'll use mock data
  const emailId = params.id

  const email = {
    id: emailId,
    from: {
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "JS",
    },
    to: [{ name: "Me", email: "me@example.com" }],
    cc: [
      { name: "Sarah Johnson", email: "sarah@example.com" },
      { name: "Marketing Team", email: "marketing@example.com" },
    ],
    subject: "Project Update - Q2 Goals",
    date: "July 15, 2023 at 10:32 AM",
    isStarred: true,
    labels: ["work", "important"],
    attachments: [
      { name: "Q2_Report.pdf", size: "2.4 MB", type: "pdf" },
      { name: "Project_Timeline.xlsx", size: "1.8 MB", type: "excel" },
      { name: "Team_Photo.jpg", size: "3.2 MB", type: "image" },
    ],
    content: `
      <p>Hi team,</p>
      
      <p>I wanted to share an update on our Q2 goals and progress so far. We've made significant strides in several key areas, and I'm pleased with the overall direction we're heading.</p>
      
      <p>Here are some highlights:</p>
      
      <ul>
        <li>Revenue is up 15% compared to Q1, exceeding our target of 12%</li>
        <li>Customer acquisition cost has decreased by 8%</li>
        <li>User retention has improved to 78%, up from 72% last quarter</li>
        <li>The new feature rollout is on schedule for August 15th</li>
      </ul>
      
      <p>Please review the attached Q2 report for detailed metrics and analysis. I've also included the updated project timeline and a photo from our last team meeting.</p>
      
      <p>Let's discuss these results during our weekly meeting tomorrow. If you have any questions or concerns before then, feel free to reach out.</p>
      
      <p>Best regards,<br>John</p>
    `,
  }

  const getLabelColor = (label: string) => {
    switch (label) {
      case "work":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "important":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "personal":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getAttachmentIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return "📄"
      case "excel":
        return "📊"
      case "image":
        return "🖼️"
      case "word":
        return "📝"
      default:
        return "📎"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Email</h1>
        <p className="text-muted-foreground">Manage your emails and communications</p>
      </div>

      <Card>
        <CardHeader className="p-4 flex flex-row items-center gap-4 border-b">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/email/inbox">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="icon">
              <Reply className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ReplyAll className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Forward className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="icon">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Star className={`h-4 w-4 ${email.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-6 border-b">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{email.from.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{email.subject}</h2>
                    {email.labels.map((label) => (
                      <span key={label} className={`text-xs px-1.5 py-0.5 rounded ${getLabelColor(label)}`}>
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <span className="font-medium text-foreground">{email.from.name}</span>
                    <span>&lt;{email.from.email}&gt;</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    To: {email.to.map((recipient) => recipient.name).join(", ")}
                  </div>
                  {email.cc.length > 0 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Cc: {email.cc.map((recipient) => recipient.name).join(", ")}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{email.date}</div>
            </div>
          </div>

          <div className="p-6 border-b">
            <div
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: email.content }}
            />
          </div>

          {email.attachments.length > 0 && (
            <div className="p-6 border-b">
              <h3 className="text-sm font-medium mb-3">Attachments ({email.attachments.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {email.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-md hover:bg-muted/50">
                    <div className="text-2xl">{getAttachmentIcon(attachment.type)}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{attachment.name}</p>
                      <p className="text-xs text-muted-foreground">{attachment.size}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-6">
            <div className="flex gap-2">
              <Button>
                <Reply className="mr-2 h-4 w-4" />
                Reply
              </Button>
              <Button variant="outline">
                <Forward className="mr-2 h-4 w-4" />
                Forward
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

