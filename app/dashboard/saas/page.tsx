import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, CreditCard, Activity, TrendingUp } from "lucide-react"

export default function SaasDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white mb-6">
        <h1 className="text-3xl font-bold tracking-tight">SaaS Dashboard</h1>
        <p className="text-white/80">Monitor your software as a service metrics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-stat-card purple">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MRR</CardTitle>
            <div className="p-2 rounded-full bg-purple-100 text-purple-600">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$56,432</div>
            <p className="text-xs text-muted-foreground flex items-center">
              +12% from last month
              <TrendingUp className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <Users className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,642</div>
            <p className="text-xs text-muted-foreground">+5.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card red">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <div className="p-2 rounded-full bg-red-100 text-red-600">
              <Activity className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4%</div>
            <p className="text-xs text-muted-foreground">-0.3% from last month</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card pink">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">LTV</CardTitle>
            <div className="p-2 rounded-full bg-pink-100 text-pink-600">
              <CreditCard className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245</div>
            <p className="text-xs text-muted-foreground">+$120 from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Monthly recurring revenue growth over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center p-6">
            <div className="w-full h-full rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 flex items-center justify-center">
              <p className="text-muted-foreground">Revenue chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
            <CardTitle>Subscription Plans</CardTitle>
            <CardDescription>Distribution of users across plans</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col justify-between p-6">
            {[
              { plan: "Free Tier", users: 3240, percentage: "37.5%", color: "bg-blue-500" },
              { plan: "Basic Plan", users: 2845, percentage: "32.9%", color: "bg-purple-500" },
              { plan: "Pro Plan", users: 1876, percentage: "21.7%", color: "bg-pink-500" },
              { plan: "Enterprise", users: 681, percentage: "7.9%", color: "bg-indigo-500" },
            ].map((plan, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center">
                  <div className={`w-2 h-10 rounded-sm mr-3 ${plan.color}`}></div>
                  <div>
                    <p className="font-medium">{plan.plan}</p>
                    <p className="text-xs text-muted-foreground">{plan.users} users</p>
                  </div>
                </div>
                <div className="text-sm font-medium">{plan.percentage}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

