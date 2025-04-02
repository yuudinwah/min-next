import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageSquare, Send, Phone, Video, MoreVertical, Paperclip, Smile } from "lucide-react"

export default function ChatPage() {
  const contacts = [
    { id: 1, name: "John Smith", status: "online", lastMessage: "Hey, how's it going?", time: "2m ago", unread: 3 },
    {
      id: 2,
      name: "Sarah Johnson",
      status: "online",
      lastMessage: "Can we discuss the project?",
      time: "15m ago",
      unread: 0,
    },
    {
      id: 3,
      name: "Michael Brown",
      status: "offline",
      lastMessage: "I'll send you the files tomorrow",
      time: "1h ago",
      unread: 0,
    },
    { id: 4, name: "Emily Davis", status: "online", lastMessage: "Thanks for your help!", time: "3h ago", unread: 0 },
    {
      id: 5,
      name: "Robert Wilson",
      status: "offline",
      lastMessage: "Let's schedule a meeting",
      time: "1d ago",
      unread: 0,
    },
  ]

  const messages = [
    { id: 1, sender: "John Smith", content: "Hey, how's it going?", time: "10:32 AM", isMine: false },
    {
      id: 2,
      sender: "You",
      content: "I'm good, thanks! Just working on the new dashboard design.",
      time: "10:33 AM",
      isMine: true,
    },
    {
      id: 3,
      sender: "John Smith",
      content: "That sounds great! Can you share a preview when you're done?",
      time: "10:35 AM",
      isMine: false,
    },
    {
      id: 4,
      sender: "You",
      content: "Sure thing! I'll send it over once I finish the main layout.",
      time: "10:36 AM",
      isMine: true,
    },
    {
      id: 5,
      sender: "John Smith",
      content: "Perfect. By the way, did you get a chance to look at the analytics report I sent yesterday?",
      time: "10:38 AM",
      isMine: false,
    },
    {
      id: 6,
      sender: "You",
      content: "Yes, I did. The numbers look promising. I think we're on the right track with the new strategy.",
      time: "10:40 AM",
      isMine: true,
    },
    {
      id: 7,
      sender: "John Smith",
      content: "Great! Let's discuss it in more detail during our team meeting tomorrow.",
      time: "10:42 AM",
      isMine: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Chat</h1>
        <p className="text-muted-foreground">Communicate with your team and clients</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        {/* Contacts List */}
        <Card className="md:col-span-1 overflow-hidden flex flex-col">
          <CardHeader className="px-4 py-3 border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Contacts</CardTitle>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-2">
              <Input placeholder="Search contacts..." className="h-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-auto flex-1">
            <div className="divide-y">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer ${contact.id === 1 ? "bg-muted/50" : ""}`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {contact.status === "online" && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-medium truncate">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">{contact.unread}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="md:col-span-2 overflow-hidden flex flex-col">
          <CardHeader className="px-4 py-3 border-b flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">John Smith</CardTitle>
                  <CardDescription>Online • Last active 2m ago</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 overflow-auto flex-1 flex flex-col-reverse">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] ${message.isMine ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-3 border-t flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input placeholder="Type a message..." className="flex-1" />
            <Button variant="ghost" size="icon">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

