import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, PieChart, Users, Clock } from "lucide-react"

export default function AnalyticsDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg gradient-bg-2 text-white mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="text-white/80">Detailed analytics and performance metrics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-stat-card teal">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <div className="p-2 rounded-full bg-teal-100 text-teal-600">
              <BarChart3 className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <Users className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">+5.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card pink">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <div className="p-2 rounded-full bg-pink-100 text-pink-600">
              <PieChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.5%</div>
            <p className="text-xs text-muted-foreground">-2.1% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card yellow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
            <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 42s</div>
            <p className="text-xs text-muted-foreground">+12s from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-3 lg:col-span-2 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20">
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>Website traffic sources and user engagement</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] flex items-center justify-center p-6">
            <div className="w-full h-full rounded-lg bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 flex items-center justify-center">
              <p className="text-muted-foreground">Traffic chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 lg:col-span-1 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] flex flex-col justify-between p-6">
            {[
              { source: "Organic Search", percentage: 38, value: "38%", color: "bg-teal-500" },
              { source: "Direct", percentage: 24, value: "24%", color: "bg-blue-500" },
              { source: "Social Media", percentage: 18, value: "18%", color: "bg-purple-500" },
              { source: "Referral", percentage: 12, value: "12%", color: "bg-pink-500" },
              { source: "Email", percentage: 8, value: "8%", color: "bg-yellow-500" },
            ].map((source, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${source.color}`}></div>
                  <span>{source.source}</span>
                </div>
                <span className="font-medium">{source.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

