import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ServerErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-md mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-4">Server Error</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, something went wrong on our server. We're working to fix the issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Report Issue</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

