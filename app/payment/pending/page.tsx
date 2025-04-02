"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, CreditCard, Home, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomerPendingPaymentPage() {
  // Mock data for a customer's pending payment
  const payment = {
    id: "PAY-001",
    reference: "REF123456",
    amount: "$249.99",
    date: "Today, 10:30 AM",
    estimatedCompletion: "5-10 minutes",
    method: "Credit Card",
    card: {
      type: "Visa",
      last4: "4242",
    },
    items: [{ name: "Premium Plan Subscription", quantity: 1, price: "$249.99" }],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Company Logo"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Payment Processing</h1>
          <p className="text-muted-foreground">Your payment is being processed</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="text-center pb-2 pt-6">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <CardTitle className="text-xl">Payment in Progress</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 pt-2">
            <div className="flex justify-center">
              <div className="animate-pulse flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 py-2 px-4 rounded-full text-sm">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Processing your payment
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>This usually takes {payment.estimatedCompletion}</p>
              <p>Please don't close this page</p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-medium">{payment.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-medium flex items-center">
                  <CreditCard className="h-4 w-4 mr-1 text-blue-500" />
                  {payment.card.type} •••• {payment.card.last4}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference:</span>
                <span className="font-medium">{payment.reference}</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex justify-between py-1">
                <span className="font-medium">{payment.items[0].name}</span>
                <span>{payment.items[0].price}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Started processing at {payment.date}</span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-6">
            <Button className="w-full" onClick={() => window.location.reload()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Check Payment Status
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Return to Dashboard
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Having issues?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

