import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  AlertCircle,
  ArrowLeft,
  CreditCard,
  ExternalLink,
  RefreshCw,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  XCircle,
  AlertTriangle,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

export default function FailedPaymentPage() {
  // Mock data for a single failed payment transaction
  const payment = {
    id: "PAY-201",
    reference: "REF789012",
    amount: "$249.99",
    currency: "USD",
    method: "Credit Card",
    card: {
      type: "Visa",
      last4: "4242",
      expiry: "05/25",
    },
    date: "Jul 15, 2023, 10:30 AM",
    status: "Payment Declined",
    statusDescription: "The payment was declined by the issuing bank",
    failureReason: "Insufficient Funds",
    failureCode: "CARD_DECLINED",
    customer: {
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, Anytown, CA 94321",
    },
    invoice: "INV-2023-201",
    items: [{ name: "Premium Plan Subscription", quantity: 1, price: "$249.99" }],
    timeline: [
      { time: "Jul 15, 10:30 AM", event: "Payment initiated", status: "Completed" },
      { time: "Jul 15, 10:31 AM", event: "Payment authorization", status: "Failed", reason: "Insufficient Funds" },
    ],
    suggestedActions: [
      "Contact the customer to update their payment method",
      "Verify the billing address matches the card's registered address",
      "Check if the card has expired or has spending limits",
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Payment Declined":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">
            <XCircle className="mr-1 h-3 w-3" />
            Payment Declined
          </Badge>
        )
      case "Authentication Failed":
        return (
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300">
            <AlertCircle className="mr-1 h-3 w-3" />
            Authentication Failed
          </Badge>
        )
      case "Transaction Rejected":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300">
            <AlertCircle className="mr-1 h-3 w-3" />
            Transaction Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTimelineStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
            Completed
          </Badge>
        )
      case "Failed":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">
            <XCircle className="mr-1 h-3 w-3" />
            Failed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Failed Payment</h1>
          <p className="text-muted-foreground">View details of failed payment transaction</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/pages/payment">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Payments
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Main payment details */}
        <Card className="md:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Transaction information and status</CardDescription>
            </div>
            <div>{getStatusBadge(payment.status)}</div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Payment ID</p>
                <p className="font-medium">{payment.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Reference</p>
                <p className="font-medium">{payment.reference}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="font-medium text-lg">{payment.amount}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{payment.date}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-blue-500" />
                  <p className="font-medium">{payment.method}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Card</p>
                <p className="font-medium">
                  {payment.card.type} ending in {payment.card.last4}
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-3">Items</h3>
              <div className="bg-muted/50 rounded-lg p-3">
                {payment.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">{item.price}</p>
                  </div>
                ))}
                <Separator className="my-2" />
                <div className="flex justify-between pt-2">
                  <p className="font-medium">Total</p>
                  <p className="font-bold">{payment.amount}</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-3">Failure Information</h3>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-lg p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800 dark:text-red-300">Payment failed: {payment.failureReason}</p>
                  <p className="text-sm text-red-700 dark:text-red-400">{payment.statusDescription}</p>
                  <p className="text-xs text-red-700/80 dark:text-red-400/80 mt-1">Error code: {payment.failureCode}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Suggested Actions</h3>
              <ul className="space-y-2">
                {payment.suggestedActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <Button>
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry Payment
              </Button>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact Customer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Customer and timeline */}
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <CardDescription>Details about the customer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{payment.customer.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{payment.customer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{payment.customer.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">{payment.customer.address}</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Invoice</p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{payment.invoice}</p>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Timeline</CardTitle>
              <CardDescription>Transaction processing stages</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-muted-foreground/20 ml-3 space-y-6">
                {payment.timeline.map((event, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-background">
                      {event.status === "Completed" ? (
                        <div className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 w-4 h-4 rounded-full flex items-center justify-center">
                          <RefreshCw className="h-3 w-3" />
                        </div>
                      ) : (
                        <div className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 w-4 h-4 rounded-full flex items-center justify-center">
                          <XCircle className="h-3 w-3" />
                        </div>
                      )}
                    </span>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{event.event}</h3>
                        <p className="text-xs text-muted-foreground">{event.time}</p>
                        {event.reason && (
                          <p className="text-xs text-red-600 dark:text-red-400 mt-1">Reason: {event.reason}</p>
                        )}
                      </div>
                      <div>{getTimelineStatusBadge(event.status)}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

