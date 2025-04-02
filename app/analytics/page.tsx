import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Detailed analytics and performance metrics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>Website traffic sources and user engagement</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center border-t p-6">
            <p className="text-muted-foreground">Traffic chart visualization would go here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

