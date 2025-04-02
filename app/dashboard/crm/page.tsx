import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users2, PhoneCall, Calendar, DollarSign } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function CrmDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg gradient-bg-4 text-white mb-6">
        <h1 className="text-3xl font-bold tracking-tight">CRM Dashboard</h1>
        <p className="text-white/80">Manage your customer relationships and sales pipeline</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-stat-card purple">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <div className="p-2 rounded-full bg-purple-100 text-purple-600">
              <Users2 className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calls Made</CardTitle>
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <PhoneCall className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,324</div>
            <p className="text-xs text-muted-foreground">+8% from last week</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card pink">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meetings Scheduled</CardTitle>
            <div className="p-2 rounded-full bg-pink-100 text-pink-600">
              <Calendar className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">432</div>
            <p className="text-xs text-muted-foreground">+24% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card green">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals Closed</CardTitle>
            <div className="p-2 rounded-full bg-green-100 text-green-600">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$245K</div>
            <p className="text-xs text-muted-foreground">+18% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
            <CardTitle>Sales Pipeline</CardTitle>
            <CardDescription>Track your deals through the sales pipeline</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center p-6">
            <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 flex items-center justify-center">
              <p className="text-muted-foreground">Sales pipeline visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest customer interactions</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col justify-between p-6">
            {[
              { name: "John Smith", action: "Email sent", time: "10 minutes ago" },
              { name: "Sarah Johnson", action: "Meeting scheduled", time: "1 hour ago" },
              { name: "Michael Brown", action: "Deal closed", time: "3 hours ago" },
              { name: "Emily Davis", action: "Call completed", time: "Yesterday" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b last:border-0">
                <Avatar className="h-9 w-9 bg-purple-100">
                  <AvatarFallback className="text-purple-600">{activity.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.action} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

