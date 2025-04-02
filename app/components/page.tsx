import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Layers, Bell, Menu } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Components",
  description: "Browse all available UI components for your admin dashboard.",
}

export default function ComponentsPage() {
  const componentCategories = [
    {
      title: "Inputs",
      description: "Form controls, buttons, and selection components",
      icon: FileText,
      href: "/components/inputs",
    },
    {
      title: "Data Display",
      description: "Tables, cards, badges, and other data visualization components",
      icon: Layers,
      href: "/components/data-display",
    },
    {
      title: "Feedback",
      description: "Alerts, progress indicators, and notifications",
      icon: Bell,
      href: "/components/feedback",
    },
    {
      title: "Navigation",
      description: "Tabs, breadcrumbs, pagination, and menus",
      icon: Menu,
      href: "/components/navigation",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground mt-2">Browse all available UI components for your admin dashboard.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {componentCategories.map((category) => (
          <Link key={category.href} href={category.href}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <category.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <span className="text-sm text-primary">View components →</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Component Usage</h2>
        <p className="mb-4">
          This section provides a comprehensive library of UI components that you can use in your admin dashboard. Each
          component comes with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Live interactive examples</li>
          <li>Code snippets that you can copy and paste</li>
          <li>Usage guidelines and best practices</li>
          <li>Variants and customization options</li>
        </ul>
        <p className="mt-4">Click on any category above to explore the components within that category.</p>
      </div>
    </div>
  )
}

