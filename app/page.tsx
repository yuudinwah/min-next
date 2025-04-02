import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 sm:p-10 rounded-xl bg-gradient-to-r from-primary/90 to-purple-600 text-white">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Welcome to your Admin Dashboard</h1>
            <p className="text-white/80 text-lg mb-6 max-w-xl">
              Manage your business, track performance, and make data-driven decisions with our comprehensive admin
              tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-5 w-5" />
                  Go to Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Settings className="mr-2 h-5 w-5" />
                Configure Settings
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center justify-center">
                    <Users className="h-8 w-8 mb-2 text-white" />
                    <span className="text-xl font-bold">1.2k</span>
                    <span className="text-xs text-white/70">Users</span>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center justify-center">
                    <ShoppingCart className="h-8 w-8 mb-2 text-white" />
                    <span className="text-xl font-bold">$8.4k</span>
                    <span className="text-xs text-white/70">Sales</span>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center justify-center">
                    <BarChart3 className="h-8 w-8 mb-2 text-white" />
                    <span className="text-xl font-bold">+12%</span>
                    <span className="text-xs text-white/70">Growth</span>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg flex flex-col items-center justify-center">
                    <MessageSquare className="h-8 w-8 mb-2 text-white" />
                    <span className="text-xl font-bold">24</span>
                    <span className="text-xs text-white/70">Messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 dark:from-blue-950/20 dark:to-indigo-950/20 dark:border-blue-900/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">1,234</div>
            <p className="text-xs text-blue-600/80 dark:text-blue-400/80 flex items-center">
              +12% from last month
              <ArrowUpRight className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100 dark:from-green-950/20 dark:to-emerald-950/20 dark:border-green-900/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700 dark:text-green-400">$48,294</div>
            <p className="text-xs text-green-600/80 dark:text-green-400/80 flex items-center">
              +8.2% from last month
              <ArrowUpRight className="ml-1 h-3 w-3 text-green-500" />
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 dark:from-purple-950/20 dark:to-pink-950/20 dark:border-purple-900/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">24</div>
            <p className="text-xs text-purple-600/80 dark:text-purple-400/80">5 due today</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100 dark:from-orange-950/20 dark:to-amber-950/20 dark:border-orange-900/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">7</div>
            <p className="text-xs text-orange-600/80 dark:text-orange-400/80">Next: Team Meeting (2h)</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
            <CardDescription>Frequently used sections and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Dashboard",
                  icon: LayoutDashboard,
                  href: "/dashboard",
                  color: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                },
                {
                  title: "Analytics",
                  icon: BarChart3,
                  href: "/analytics",
                  color: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
                },
                {
                  title: "Customers",
                  icon: Users,
                  href: "/customers",
                  color: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
                },
                {
                  title: "Products",
                  icon: ShoppingCart,
                  href: "/products",
                  color: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
                },
                {
                  title: "Invoices",
                  icon: FileText,
                  href: "/invoice",
                  color: "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300",
                },
                {
                  title: "Settings",
                  icon: Settings,
                  href: "/settings",
                  color: "bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex flex-col items-center p-4 rounded-lg border border-muted hover:border-muted-foreground/50 transition-colors group"
                >
                  <div className={`p-3 rounded-full ${item.color} mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "New customer registered",
                  time: "10 minutes ago",
                  icon: Users,
                  color: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                },
                {
                  title: "New order received",
                  time: "1 hour ago",
                  icon: ShoppingCart,
                  color: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
                },
                {
                  title: "Payment processed",
                  time: "2 hours ago",
                  icon: CreditCard,
                  color: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
                },
                {
                  title: "System update completed",
                  time: "Yesterday",
                  icon: Settings,
                  color: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${item.color} mt-0.5`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/notifications">
                View all notifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Resources & Documentation</CardTitle>
          <CardDescription>Helpful guides and documentation to get you started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden group hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="User Guide"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">User Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">Learn how to use the dashboard effectively</p>
                <Button variant="outline" size="sm" className="w-full">
                  View Guide
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden group hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="API Documentation"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">API Documentation</h3>
                <p className="text-sm text-muted-foreground mb-3">Integrate with our powerful API</p>
                <Button variant="outline" size="sm" className="w-full">
                  View Docs
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden group hover:border-primary transition-colors">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Video Tutorials"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-3">Watch step-by-step video guides</p>
                <Button variant="outline" size="sm" className="w-full">
                  Watch Videos
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

