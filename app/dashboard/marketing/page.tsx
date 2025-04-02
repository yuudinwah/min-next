import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, Mail, Share2, TrendingUp } from "lucide-react"

export default function MarketingDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg gradient-bg-3 text-white mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Marketing Dashboard</h1>
        <p className="text-white/80">Track your marketing campaigns and performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-stat-card orange">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campaign Reach</CardTitle>
            <div className="p-2 rounded-full bg-orange-100 text-orange-600">
              <Megaphone className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">+15% from last campaign</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Email Opens</CardTitle>
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <Mail className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5%</div>
            <p className="text-xs text-muted-foreground">+2.4% from last campaign</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card purple">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Social Shares</CardTitle>
            <div className="p-2 rounded-full bg-purple-100 text-purple-600">
              <Share2 className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,827</div>
            <p className="text-xs text-muted-foreground">+32% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card red">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <div className="p-2 rounded-full bg-red-100 text-red-600">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8%</div>
            <p className="text-xs text-muted-foreground">+0.4% from last campaign</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Performance metrics across all marketing campaigns</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center p-6">
            <div className="w-full h-full rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 flex items-center justify-center">
              <p className="text-muted-foreground">Campaign performance chart would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Currently running marketing campaigns</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col justify-between p-6">
            {[
              { name: "Summer Sale", type: "Email", status: "Active", performance: "High" },
              { name: "New Product Launch", type: "Social", status: "Active", performance: "Medium" },
              { name: "Customer Loyalty", type: "Email", status: "Active", performance: "High" },
              { name: "Holiday Special", type: "Multi-channel", status: "Scheduled", performance: "N/A" },
            ].map((campaign, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{campaign.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {campaign.type} • {campaign.status}
                  </p>
                </div>
                <div
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    campaign.performance === "High"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : campaign.performance === "Medium"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {campaign.performance}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

