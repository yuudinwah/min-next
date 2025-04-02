import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"
import Link from "next/link"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-md mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <Wrench className="h-12 w-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Under Maintenance</h1>
        <p className="text-xl mb-2">We'll be back soon!</p>
        <p className="text-muted-foreground mb-8">
          We're currently performing scheduled maintenance to improve your experience. Please check back in a little
          while.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Try Again</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://status.example.com" target="_blank" rel="noopener noreferrer">
              Check Status
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <p className="text-muted-foreground">
            Expected completion: <span className="font-medium text-foreground">June 15, 2023 at 2:00 PM UTC</span>
          </p>
        </div>
      </div>
    </div>
  )
}

