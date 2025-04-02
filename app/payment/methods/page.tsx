import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CreditCard, Home, Wallet, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaymentMethodsPage() {
  // Mock data for the payment and saved payment methods
  const payment = {
    id: "PAY-001",
    amount: "$249.99",
    items: [{ name: "Premium Plan Subscription", quantity: 1, price: "$249.99" }],
  }

  const savedMethods = [
    {
      id: "pm_1",
      type: "Visa",
      last4: "4242",
      expiry: "05/25",
      isDefault: true,
    },
    {
      id: "pm_2",
      type: "Mastercard",
      last4: "5678",
      expiry: "08/24",
      isDefault: false,
    },
  ]

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
          <h1 className="text-2xl font-bold">Select Payment Method</h1>
          <p className="text-muted-foreground">Choose how you'd like to pay</p>
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-xl">Payment Methods</CardTitle>
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
              <RadioGroup defaultValue={savedMethods[0].id}>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Saved Payment Methods</h3>
                  {savedMethods.map((method) => (
                    <div key={method.id} className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label htmlFor={method.id} className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="h-4 w-4 text-blue-500" />
                        <div className="flex-1">
                          <span className="font-medium">
                            {method.type} •••• {method.last4}
                          </span>
                          <span className="text-xs text-muted-foreground ml-2">Expires {method.expiry}</span>
                        </div>
                        {method.isDefault && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Default</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-medium mb-2">Other Payment Options</h3>
                  <div className="flex items-center space-x-2 border rounded-md p-3">
                    <RadioGroupItem value="new-card" id="new-card" />
                    <Label htmlFor="new-card" className="flex items-center gap-2 cursor-pointer">
                      <Plus className="h-4 w-4" />
                      Add New Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-3 mt-2">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet" className="flex items-center gap-2 cursor-pointer">
                      <Wallet className="h-4 w-4" />
                      Digital Wallet
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-6">
            <Button className="w-full">
              Continue to Payment
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

