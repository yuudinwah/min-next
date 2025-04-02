import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, TrendingUp, DollarSign, Clock } from "lucide-react"

export default function StocksDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Stocks Dashboard</h1>
        <p className="text-white/80">Monitor your stock portfolio and market trends</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="dashboard-stat-card blue">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.24M</div>
            <p className="text-xs text-muted-foreground flex items-center">
              +3.2% from yesterday
              <TrendingUp className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card green">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Day's Gain/Loss</CardTitle>
            <div className="p-2 rounded-full bg-green-100 text-green-600">
              <BarChart2 className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$12,450</div>
            <p className="text-xs text-muted-foreground">+1.2% today</p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card teal">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
            <div className="p-2 rounded-full bg-teal-100 text-teal-600">
              <TrendingUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AAPL</div>
            <p className="text-xs text-muted-foreground flex items-center">
              +4.5% today
              <TrendingUp className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-stat-card yellow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Close</CardTitle>
            <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
              <Clock className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3h 24m</div>
            <p className="text-xs text-muted-foreground">NYSE trading hours</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>Track your portfolio performance over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center p-6">
            <div className="w-full h-full rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 flex items-center justify-center">
              <p className="text-muted-foreground">Portfolio chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 dashboard-chart-card">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20">
            <CardTitle>Top Holdings</CardTitle>
            <CardDescription>Your top performing stocks</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col justify-between p-6">
            {[
              { symbol: "AAPL", name: "Apple Inc.", price: "$182.63", change: "+4.5%" },
              { symbol: "MSFT", name: "Microsoft Corp.", price: "$337.22", change: "+2.1%" },
              { symbol: "GOOGL", name: "Alphabet Inc.", price: "$142.17", change: "+1.8%" },
              { symbol: "AMZN", name: "Amazon.com Inc.", price: "$178.35", change: "-0.7%" },
            ].map((stock, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      i === 0
                        ? "bg-blue-100 text-blue-600"
                        : i === 1
                          ? "bg-teal-100 text-teal-600"
                          : i === 2
                            ? "bg-purple-100 text-purple-600"
                            : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {stock.symbol.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{stock.symbol}</p>
                    <p className="text-xs text-muted-foreground">{stock.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{stock.price}</p>
                  <p className={`text-xs ${stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                    {stock.change}
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

