"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Users,
  Package,
  Settings,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Megaphone,
  Users2,
  BarChart2,
  Cloud,
  MessageSquare,
  Mail,
  Bell,
  FileText,
  Inbox,
  Send,
  Archive,
  Trash2,
  FileQuestion,
  AlertTriangle,
  FileCode,
  Clock,
  Layers,
  FolderOpen,
  CreditCard,
  CheckCircle,
  XCircle,
  HourglassIcon,
  Table,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [dashboardOpen, setDashboardOpen] = useState(true)
  const [emailOpen, setEmailOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  // Add new state variables for the standalone collapsible menus
  const [landingPagesOpen, setLandingPagesOpen] = useState(false)
  const [errorPagesOpen, setErrorPagesOpen] = useState(false)
  const [fileManagementOpen, setFileManagementOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [componentsOpen, setComponentsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Section 1: Dashboard and Data
  const dashboardSubRoutes = [
    {
      label: "eCommerce",
      icon: ShoppingCart,
      href: "/dashboard/ecommerce",
      active: pathname === "/dashboard/ecommerce",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      active: pathname === "/dashboard/analytics",
    },
    {
      label: "Marketing",
      icon: Megaphone,
      href: "/dashboard/marketing",
      active: pathname === "/dashboard/marketing",
    },
    {
      label: "CRM",
      icon: Users2,
      href: "/dashboard/crm",
      active: pathname === "/dashboard/crm",
    },
    {
      label: "Stocks",
      icon: BarChart2,
      href: "/dashboard/stocks",
      active: pathname === "/dashboard/stocks",
    },
    {
      label: "SaaS",
      icon: Cloud,
      href: "/dashboard/saas",
      active: pathname === "/dashboard/saas",
    },
  ]

  const dataRoutes = [
    {
      label: "Customers",
      icon: Users,
      href: "/customers",
      active: pathname === "/customers",
    },
    {
      label: "Products",
      icon: Package,
      href: "/products",
      active: pathname === "/products",
    },
  ]

  // Section 2: Communication
  const emailSubRoutes = [
    {
      label: "Inbox",
      icon: Inbox,
      href: "/email/inbox",
      active: pathname === "/email/inbox",
    },
    {
      label: "Sent",
      icon: Send,
      href: "/email/sent",
      active: pathname === "/email/sent",
    },
    {
      label: "Archive",
      icon: Archive,
      href: "/email/archive",
      active: pathname === "/email/archive",
    },
    {
      label: "Trash",
      icon: Trash2,
      href: "/email/trash",
      active: pathname === "/email/trash",
    },
  ]

  const communicationRoutes = [
    {
      label: "Chat",
      icon: MessageSquare,
      href: "/chat",
      active: pathname === "/chat",
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/notifications",
      active: pathname === "/notifications",
    },
    {
      label: "Invoice",
      icon: FileText,
      href: "/invoice",
      active: pathname === "/invoice",
    },
  ]

  // Section 3: Page Management
  const landingPageRoutes = [
    {
      label: "Landing Page 1",
      icon: Layers,
      href: "/pages/landing/1",
      active: pathname === "/pages/landing/1",
    },
    {
      label: "Landing Page 2",
      icon: Layers,
      href: "/pages/landing/2",
      active: pathname === "/pages/landing/2",
    },
    {
      label: "Landing Page 3",
      icon: Layers,
      href: "/pages/landing/3",
      active: pathname === "/pages/landing/3",
    },
    {
      label: "Landing Page 4",
      icon: Layers,
      href: "/pages/landing/4",
      active: pathname === "/pages/landing/4",
    },
    {
      label: "Landing Page 5",
      icon: Layers,
      href: "/pages/landing/5",
      active: pathname === "/pages/landing/5",
    },
  ]

  const errorPageRoutes = [
    {
      label: "404 Not Found",
      icon: FileQuestion,
      href: "/pages/error/404",
      active: pathname === "/pages/error/404",
    },
    {
      label: "500 Server Error",
      icon: AlertTriangle,
      href: "/pages/error/500",
      active: pathname === "/pages/error/500",
    },
    {
      label: "Maintenance",
      icon: FileCode,
      href: "/pages/error/maintenance",
      active: pathname === "/pages/error/maintenance",
    },
    {
      label: "Coming Soon",
      icon: Clock,
      href: "/pages/error/coming-soon",
      active: pathname === "/pages/error/coming-soon",
    },
  ]

  // Section 4: Components
  const componentRoutes = [
    {
      label: "Inputs",
      icon: FileText,
      href: "/components/inputs",
      active: pathname === "/components/inputs",
    },
    {
      label: "Data Display",
      icon: Layers,
      href: "/components/data-display",
      active: pathname === "/components/data-display",
    },
    {
      label: "Data Tables",
      icon: Table,
      href: "/components/data-tables",
      active: pathname === "/components/data-tables",
    },
    {
      label: "Feedback",
      icon: Bell,
      href: "/components/feedback",
      active: pathname === "/components/feedback",
    },
    {
      label: "Navigation",
      icon: Menu,
      href: "/components/navigation",
      active: pathname === "/components/navigation",
    },
  ]

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="px-3 py-4 flex-1 overflow-y-auto">
        <Link href="/" className="flex items-center pl-3 mb-6">
          <div className="w-8 h-8 mr-2 rounded-md bg-primary flex items-center justify-center">
            <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold">AdminPanel</h1>
        </Link>

        {/* Section 1: Dashboard and Data */}
        <div className="mb-4">
          <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Dashboard & Data
          </div>
          <div className="space-y-1">
            <Collapsible open={dashboardOpen} onOpenChange={setDashboardOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setDashboardOpen(!dashboardOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/dashboard") && !pathname.includes("/dashboard/settings")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <LayoutDashboard
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/dashboard") && !pathname.includes("/dashboard/settings")
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    />
                    Dashboard
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", dashboardOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {dashboardSubRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {dataRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => isMobile && setIsOpen(false)}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.active ? "text-primary" : "text-muted-foreground")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Section 2: Communication */}
        <div className="mb-4">
          <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Communication
          </div>
          <div className="space-y-1">
            <Collapsible open={emailOpen} onOpenChange={setEmailOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setEmailOpen(!emailOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/email") ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <Mail
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/email") ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    Email
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", emailOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {emailSubRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {communicationRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => isMobile && setIsOpen(false)}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.active ? "text-primary" : "text-muted-foreground")} />
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Section 3: Page Management */}
        <div className="mb-4">
          <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Page Management
          </div>
          <div className="space-y-1">
            <Collapsible open={pagesOpen} onOpenChange={setPagesOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/pages") &&
                      !pathname.includes("/pages/landing") &&
                      !pathname.includes("/pages/error") &&
                      !pathname.includes("/pages/files")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <FileText
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/pages") &&
                          !pathname.includes("/pages/landing") &&
                          !pathname.includes("/pages/error") &&
                          !pathname.includes("/pages/files")
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    />
                    Pages
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", pagesOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {/* Other page content can go here */}
              </CollapsibleContent>
            </Collapsible>

            {/* Add Landing Pages as a standalone collapsible */}
            <Collapsible open={landingPagesOpen} onOpenChange={setLandingPagesOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setLandingPagesOpen(!landingPagesOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/pages/landing") ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <Layers
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/pages/landing") ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    Landing Pages
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", landingPagesOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {landingPageRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Add Error Pages as a standalone collapsible */}
            <Collapsible open={errorPagesOpen} onOpenChange={setErrorPagesOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setErrorPagesOpen(!errorPagesOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/pages/error") ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <AlertTriangle
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/pages/error") ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    Error Pages
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", errorPagesOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {errorPageRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Add File Management as a standalone collapsible */}
            <Collapsible open={fileManagementOpen} onOpenChange={setFileManagementOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setFileManagementOpen(!fileManagementOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/pages/files") ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <FolderOpen
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/pages/files") ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    File Management
                    <ChevronDown
                      className={cn(
                        "ml-auto h-5 w-5 transition-transform",
                        fileManagementOpen && "transform rotate-180",
                      )}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {[
                  {
                    label: "Documents",
                    icon: FileText,
                    href: "/pages/files/documents",
                    active: pathname === "/pages/files/documents",
                  },
                  {
                    label: "Images",
                    icon: Layers,
                    href: "/pages/files/images",
                    active: pathname === "/pages/files/images",
                  },
                  {
                    label: "Media",
                    icon: FileCode,
                    href: "/pages/files/media",
                    active: pathname === "/pages/files/media",
                  },
                ].map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Add Payment as a standalone collapsible */}
            <Collapsible open={paymentOpen} onOpenChange={setPaymentOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setPaymentOpen(!paymentOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/pages/payment") ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <CreditCard
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/pages/payment") ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    Payment
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", paymentOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {[
                  {
                    label: "Pending",
                    icon: HourglassIcon,
                    href: "/pages/payment/pending",
                    active: pathname === "/pages/payment/pending",
                  },
                  {
                    label: "Settlement",
                    icon: CheckCircle,
                    href: "/pages/payment/settlement",
                    active: pathname === "/pages/payment/settlement",
                  },
                  {
                    label: "Failed",
                    icon: XCircle,
                    href: "/pages/payment/failed",
                    active: pathname === "/pages/payment/failed",
                  },
                ].map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Section 4: Components */}
        <div className="mb-4">
          <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Components
          </div>
          <div className="space-y-1">
            <Link
              href="/components"
              onClick={() => isMobile && setIsOpen(false)}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === "/components" ? "text-primary bg-primary/10" : "text-muted-foreground",
              )}
            >
              <div className="flex items-center flex-1">
                <Layers
                  className={cn("h-5 w-5 mr-3", pathname === "/components" ? "text-primary" : "text-muted-foreground")}
                />
                All Components
              </div>
            </Link>

            <Collapsible open={componentsOpen} onOpenChange={setComponentsOpen} className="w-full">
              <CollapsibleTrigger asChild>
                <button
                  onClick={() => setComponentsOpen(!componentsOpen)}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname.includes("/components/") ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center flex-1">
                    <FileText
                      className={cn(
                        "h-5 w-5 mr-3",
                        pathname.includes("/components/") ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    Component Types
                    <ChevronDown
                      className={cn("ml-auto h-5 w-5 transition-transform", componentsOpen && "transform rotate-180")}
                    />
                  </div>
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-10 space-y-1 pt-1">
                {componentRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={cn(
                      "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                      route.active ? "text-primary bg-primary/10" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon
                        className={cn("h-4 w-4 mr-3", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Section 5: Settings */}
        <div className="mb-4">
          <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Settings</div>
          <div className="space-y-1">
            <Link
              href="/settings"
              onClick={() => isMobile && setIsOpen(false)}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === "/settings" ? "text-primary bg-primary/10" : "text-muted-foreground",
              )}
            >
              <div className="flex items-center flex-1">
                <Settings
                  className={cn("h-5 w-5 mr-3", pathname === "/settings" ? "text-primary" : "text-muted-foreground")}
                />
                Settings
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start" size="sm">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {isMobile && (
        <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50" onClick={toggleSidebar}>
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      )}

      {isMobile ? (
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transition-transform duration-300 transform",
            isOpen ? "translate-x-0" : "-translate-x-full",
            className,
          )}
        >
          {sidebarContent}
        </div>
      ) : (
        <div className={cn("h-full w-64 border-r bg-background", className)}>{sidebarContent}</div>
      )}
    </>
  )
}

