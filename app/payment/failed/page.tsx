import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, CreditCard, Home, RefreshCw, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CustomerFailedPaymentPage() {
  // Mock data for a customer's failed payment
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
    failureReason: "Your card was declined by your bank",
    suggestedActions: [
      "Check if you have sufficient funds in your account",
      "Verify your card details are entered correctly",
      "Contact your bank to authorize the transaction",
      "Try a different payment method",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-background dark:from-red-950/10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Company Logo"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Payment Failed</h1>
          <p className="text-muted-foreground">We couldn't process your payment</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="text-center pb-2 pt-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-xl">Payment Unsuccessful</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 pt-2">
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 py-2 px-4 rounded-full text-sm">
                <AlertTriangle className="h-4 w-4" />
                Payment could not be processed
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>{payment.failureReason}</p>
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

            <div className="space-y-2">
              <h3 className="text-sm font-medium">What to do next:</h3>
              <ul className="space-y-1">
                {payment.suggestedActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <HelpCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-6">
            <Button className="w-full" asChild>
              <Link href="/payment/retry">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/payment/methods">
                <CreditCard className="mr-2 h-4 w-4" />
                Use Different Payment Method
              </Link>
            </Button>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Return to Dashboard
              </Link>
            </Button>
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

