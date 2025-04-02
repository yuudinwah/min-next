"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, CreditCard, Download, Printer, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomerSuccessPaymentPage() {
  // Mock data for a customer's successful payment
  const payment = {
    id: "PAY-001",
    reference: "REF123456",
    amount: "$249.99",
    date: "July 15, 2023, 10:30 AM",
    method: "Credit Card",
    card: {
      type: "Visa",
      last4: "4242",
    },
    items: [{ name: "Premium Plan Subscription", quantity: 1, price: "$249.99" }],
    receiptUrl: "#",
    nextBillingDate: "August 15, 2023",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background dark:from-green-950/10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Company Logo"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Payment Successful</h1>
          <p className="text-muted-foreground">Your payment has been processed successfully</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="text-center pb-2 pt-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-xl">Thank You for Your Payment</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 pt-2">
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 py-2 px-4 rounded-full text-sm">
                <CheckCircle className="h-4 w-4" />
                Payment completed successfully
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>A confirmation email has been sent to your registered email address</p>
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
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{payment.date}</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex justify-between py-1">
                <span className="font-medium">{payment.items[0].name}</span>
                <span>{payment.items[0].price}</span>
              </div>
            </div>

            {payment.nextBillingDate && (
              <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-3 rounded-lg text-sm">
                <p>
                  Your subscription is now active. Next billing date: <strong>{payment.nextBillingDate}</strong>
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-6">
            <Button className="w-full" asChild>
              <Link href="/dashboard">
                <ArrowRight className="mr-2 h-4 w-4" />
                Continue to Dashboard
              </Link>
            </Button>
            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1" asChild>
                <Link href={payment.receiptUrl}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Link>
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => window.print()}>
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Need help?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

