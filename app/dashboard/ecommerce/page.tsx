import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Users, DollarSign, ShoppingBag, TrendingUp } from "lucide-react"

export default function EcommerceDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg gradient-bg-1 text-white mb-6">
        <h1 className="text-3xl font-bold tracking-tight">eCommerce Dashboard</h1>
        <p className="text-white/80">Overview of your online store performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-stat-card blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground flex items-center">
              +20.1% from last month
              <ArrowUpRight className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card green">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <div className="p-2 rounded-full bg-green-100 text-green-600">
              <ShoppingBag className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground flex items-center">
              +12.2% from last month
              <ArrowUpRight className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card purple">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <div className="p-2 rounded-full bg-purple-100 text-purple-600">
              <Users className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground flex items-center">
              +3.1% from last month
              <ArrowUpRight className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card orange">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <div className="p-2 rounded-full bg-orange-100 text-orange-600">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <p className="text-xs text-muted-foreground">+0.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly revenue and order trends</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center p-6">
            <div className="w-full h-full rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 flex items-center justify-center">
              <p className="text-muted-foreground">Sales chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Your best selling products this month</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col justify-between p-6">
            {[
              { name: "Premium Headphones", sales: 245, revenue: "$12,250" },
              { name: "Wireless Keyboard", sales: 187, revenue: "$8,415" },
              { name: "Smart Watch", sales: 154, revenue: "$15,400" },
              { name: "Bluetooth Speaker", sales: 132, revenue: "$5,280" },
            ].map((product, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-10 rounded-sm mr-3 bg-gradient-to-b ${
                      i === 0
                        ? "from-purple-400 to-purple-600"
                        : i === 1
                          ? "from-blue-400 to-blue-600"
                          : i === 2
                            ? "from-green-400 to-green-600"
                            : "from-orange-400 to-orange-600"
                    }`}
                  ></div>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                  </div>
                </div>
                <div className="text-sm font-medium">{product.revenue}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

