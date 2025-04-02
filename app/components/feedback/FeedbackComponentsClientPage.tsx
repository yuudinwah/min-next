"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Info, Terminal, XCircle } from "lucide-react"

export default function FeedbackComponentsClientPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Feedback Components</h1>
        <p className="text-muted-foreground mt-2">Components for providing feedback and status information to users.</p>
      </div>

      <div className="space-y-10">
        {/* Alerts Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>This is an informational alert to provide context to the user.</AlertDescription>
              </Alert>

              <Alert variant="default">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>You can use this alert to highlight important information.</AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
              </Alert>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      Success
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Your changes have been saved successfully.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <XCircle className="h-4 w-4" />
                      Error
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">There was an error processing your request.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Alert Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, Terminal, AlertCircle, CheckCircle, XCircle } from 'lucide-react'

// Info Alert
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational alert to provide context to the user.
  </AlertDescription>
</Alert>

// Default Alert
<Alert variant="default">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>
    You can use this alert to highlight important information.
  </AlertDescription>
</Alert>

// Destructive Alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again later.
  </AlertDescription>
</Alert>

// Success Card Alert
<Card>
  <CardHeader className="pb-2">
    <CardTitle className="flex items-center gap-2 text-green-600">
      <CheckCircle className="h-4 w-4" />
      Success
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm">Your changes have been saved successfully.</p>
  </CardContent>
</Card>

// Error Card Alert
<Card>
  <CardHeader className="pb-2">
    <CardTitle className="flex items-center gap-2 text-red-600">
      <XCircle className="h-4 w-4" />
      Error
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm">There was an error processing your request.</p>
  </CardContent>
</Card>`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Progress Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Progress</h2>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Indicators</CardTitle>
                  <CardDescription>Show progress for operations and tasks.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Default Progress (25%)</span>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Half Complete (50%)</span>
                      <span className="text-sm text-muted-foreground">50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Almost Complete (75%)</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Complete (100%)</span>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`import { Progress } from "@/components/ui/progress"

// Progress with different values
<div className="space-y-2">
  <div className="flex justify-between">
    <span className="text-sm font-medium">Default Progress (25%)</span>
    <span className="text-sm text-muted-foreground">25%</span>
  </div>
  <Progress value={25} className="h-2" />
</div>

<div className="space-y-2">
  <div className="flex justify-between">
    <span className="text-sm font-medium">Half Complete (50%)</span>
    <span className="text-sm text-muted-foreground">50%</span>
  </div>
  <Progress value={50} className="h-2" />
</div>

<div className="space-y-2">
  <div className="flex justify-between">
    <span className="text-sm font-medium">Almost Complete (75%)</span>
    <span className="text-sm text-muted-foreground">75%</span>
  </div>
  <Progress value={75} className="h-2" />
</div>

<div className="space-y-2">
  <div className="flex justify-between">
    <span className="text-sm font-medium">Complete (100%)</span>
    <span className="text-sm text-muted-foreground">100%</span>
  </div>
  <Progress value={100} className="h-2" />
</div>`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Skeleton Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skeleton Loaders</CardTitle>
                  <CardDescription>Display loading placeholders for content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>

                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Skeleton className="h-[125px] w-full rounded-xl" />
                      <div className="flex gap-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Skeleton Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`import { Skeleton } from "@/components/ui/skeleton"

// Text Skeleton
<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>

// User Card Skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
</div>

// Content Card Skeleton
<div className="space-y-2">
  <Skeleton className="h-[125px] w-full rounded-xl" />
  <div className="flex gap-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
  </div>
</div>`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Toast Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Toast</h2>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Toast Notifications</CardTitle>
                  <CardDescription>Display temporary notifications to users.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline">Show Toast</Button>
                    <Button variant="outline">Show Success Toast</Button>
                    <Button variant="outline">Show Error Toast</Button>
                  </div>
                  <div className="mt-6 border rounded-lg p-4">
                    <div className="bg-background rounded-lg border shadow-lg p-4 max-w-sm">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-medium">Toast Title</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            This is how a toast notification would appear.
                          </p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Toast Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

// Success Toast
toast({
  title: "Success!",
  description: "Your changes have been saved.",
  variant: "default",
})

// Error Toast
toast({
  title: "Error!",
  description: "There was a problem with your request.",
  variant: "destructive",
})`}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}

