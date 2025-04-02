import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Check, Clock, Filter, MessageSquare, Settings, ThumbsUp, MoreVertical } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "mention",
      user: "John Smith",
      action: "mentioned you in a comment",
      content: "I think @you would be perfect for this task. Can you take a look?",
      time: "2 minutes ago",
      isRead: false,
      project: "Dashboard Redesign",
    },
    {
      id: 2,
      type: "comment",
      user: "Sarah Johnson",
      action: "commented on your post",
      content: "Great insights! I especially liked your point about user engagement.",
      time: "1 hour ago",
      isRead: false,
      project: "Marketing Strategy",
    },
    {
      id: 3,
      type: "like",
      user: "Michael Brown",
      action: "liked your comment",
      content: "We should definitely implement this feature in the next sprint.",
      time: "3 hours ago",
      isRead: true,
      project: "Product Development",
    },
    {
      id: 4,
      type: "system",
      action: "System notification",
      content: "Your weekly report is ready to view.",
      time: "Yesterday",
      isRead: true,
      project: "Analytics",
    },
    {
      id: 5,
      type: "mention",
      user: "Emily Davis",
      action: "mentioned you in a task",
      content: "Let's assign this to @you for the final review.",
      time: "Yesterday",
      isRead: true,
      project: "Quality Assurance",
    },
    {
      id: 6,
      type: "comment",
      user: "Robert Wilson",
      action: "replied to your comment",
      content: "I agree with your approach. Let's discuss this further in our next meeting.",
      time: "2 days ago",
      isRead: true,
      project: "Strategic Planning",
    },
    {
      id: 7,
      type: "system",
      action: "System notification",
      content: "Your account password was changed successfully.",
      time: "3 days ago",
      isRead: true,
      project: "Security",
    },
  ]

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "mention":
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case "comment":
        return <MessageSquare className="h-4 w-4 text-purple-500" />
      case "like":
        return <ThumbsUp className="h-4 w-4 text-pink-500" />
      case "system":
        return <Bell className="h-4 w-4 text-yellow-500" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">Stay updated with all your activities and mentions</p>
      </div>

      <Card>
        <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread notifications</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  <Badge className="ml-1" variant="secondary">
                    3
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="mentions">Mentions</TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <TabsContent value="all" className="m-0">
              <div className="space-y-1 divide-y">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex gap-4 p-3 ${!notification.isRead ? "bg-muted/30" : ""} hover:bg-muted/50 rounded-md`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {notification.type === "system" ? (
                        <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                          <Bell className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                      ) : (
                        <Avatar>
                          <AvatarFallback>{notification.user?.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          {notification.user && <span className="font-medium">{notification.user} </span>}
                          <span className="text-muted-foreground">{notification.action}</span>
                          <div className="mt-1 text-sm">{notification.content}</div>
                          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {notification.time}
                            </div>
                            {notification.project && (
                              <div className="flex items-center">
                                <span className="bg-muted px-1.5 py-0.5 rounded">{notification.project}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {!notification.isRead && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unread" className="m-0">
              <div className="space-y-1 divide-y">
                {notifications
                  .filter((n) => !n.isRead)
                  .map((notification) => (
                    <div key={notification.id} className="flex gap-4 p-3 bg-muted/30 hover:bg-muted/50 rounded-md">
                      <div className="flex-shrink-0 mt-1">
                        {notification.type === "system" ? (
                          <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                            <Bell className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                          </div>
                        ) : (
                          <Avatar>
                            <AvatarFallback>{notification.user?.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            {notification.user && <span className="font-medium">{notification.user} </span>}
                            <span className="text-muted-foreground">{notification.action}</span>
                            <div className="mt-1 text-sm">{notification.content}</div>
                            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {notification.time}
                              </div>
                              {notification.project && (
                                <div className="flex items-center">
                                  <span className="bg-muted px-1.5 py-0.5 rounded">{notification.project}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="mentions" className="m-0">
              <div className="space-y-1 divide-y">
                {notifications
                  .filter((n) => n.type === "mention")
                  .map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex gap-4 p-3 ${!notification.isRead ? "bg-muted/30" : ""} hover:bg-muted/50 rounded-md`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Avatar>
                          <AvatarFallback>{notification.user?.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="font-medium">{notification.user} </span>
                            <span className="text-muted-foreground">{notification.action}</span>
                            <div className="mt-1 text-sm">{notification.content}</div>
                            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {notification.time}
                              </div>
                              {notification.project && (
                                <div className="flex items-center">
                                  <span className="bg-muted px-1.5 py-0.5 rounded">{notification.project}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

