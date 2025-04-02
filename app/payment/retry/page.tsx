import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Home, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaymentRetryPage() {
  // Mock data for the payment being retried
  const payment = {
    id: "PAY-001",
    amount: "$249.99",
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
          <h1 className="text-2xl font-bold">Retry Payment</h1>
          <p className="text-muted-foreground">Complete your payment to continue</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-xl">Payment Details</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 pt-2">
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex justify-between py-1">
                <span className="font-medium">{payment.items[0].name}</span>
                <span>{payment.items[0].price}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between pt-2">
                <span className="font-medium">Total</span>
                <span className="font-bold">{payment.amount}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="payment-method">Payment Method</Label>
                <RadioGroup defaultValue="card" id="payment-method" className="mt-2">
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Smith" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Your payment information is secure</span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-6">
            <Button className="w-full">
              Pay {payment.amount}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full" asChild>
              <Link href="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Cancel and Return to Dashboard
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

