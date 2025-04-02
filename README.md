### Admin Dashboard Template

A modern, responsive, and feature-rich admin dashboard template built with Next.js, Tailwind CSS, and shadcn/ui components. This template provides a solid foundation for building administrative interfaces for web applications.





## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)

- [Prerequisites](#prerequisites)
- [Installation](#installation)



- [Project Structure](#project-structure)
- [Pages & Layouts](#pages--layouts)
- [Components](#components)
- [Customization](#customization)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)


## Features

- 🎨 **Modern UI Design** - Clean, professional, and responsive design
- 📱 **Fully Responsive** - Works on all devices (desktop, tablet, mobile)
- 🧩 **Modular Components** - Built with reusable and composable components
- 🎭 **Light & Dark Mode** - Built-in theme support with system preference detection
- 📊 **Multiple Dashboards** - Specialized dashboards for different use cases

- eCommerce
- Analytics
- Marketing
- CRM
- Stocks
- SaaS



- 📝 **Common Admin Pages**

- Authentication (Login, Register, Forgot Password)
- User Management
- Settings
- Notifications
- Email client
- Chat interface
- Invoice management



- 📑 **Landing Page Variations** - Multiple pre-built landing page designs
- 🚨 **Error Pages** - Custom 404, 500, maintenance, and coming soon pages
- 📁 **File Management** - Document, image, and media management interfaces
- 💳 **Payment Pages** - Transaction flow for payments (pending, success, failed states)
- 🔍 **Advanced Data Tables** - Feature-rich tables with sorting, filtering, and pagination
- 📚 **Component Library** - Comprehensive component showcase and documentation
- ⚡ **Performance Optimized** - Fast loading and rendering
- 🔒 **Best Practices** - Follows Next.js and React best practices


## Demo

A live demo of the AdminPanel template is available at: [https://admin-panel-demo.vercel.app](https://admin-panel-demo.vercel.app)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager


### Installation

1. Clone the repository:


```shellscript
git clone https://github.com/yourusername/admin-panel.git
cd admin-panel
```

2. Install dependencies:


```shellscript
npm install
# or
yarn install
```

3. Run the development server:


```shellscript
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## Project Structure

```plaintext
admin-panel/
├── app/                   # Next.js App Router pages and layouts
│   ├── components/        # Component pages and documentation
│   ├── dashboard/         # Dashboard pages (multiple variations)
│   ├── email/             # Email client pages
│   ├── pages/             # Various page templates (landing, error, etc.)
│   ├── payment/           # Payment flow pages
│   └── ...
├── components/            # Shared React components
│   ├── ui/                # UI components from shadcn/ui
│   │   ├── data-table/    # Advanced data table components
│   │   └── ...           
│   ├── header.tsx         # Application header
│   ├── sidebar.tsx        # Navigation sidebar
│   └── theme-provider.tsx # Theme context provider
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and libraries
├── public/                # Static assets
├── styles/                # Global styles
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies and scripts
```

## Pages & Layouts

### Main Dashboards

- **Default Dashboard** (`/dashboard`) - Overview with key metrics and insights
- **eCommerce Dashboard** (`/dashboard/ecommerce`) - Online store metrics and management
- **Analytics Dashboard** (`/dashboard/analytics`) - Data visualization and reporting
- **Marketing Dashboard** (`/dashboard/marketing`) - Campaign performance and metrics
- **CRM Dashboard** (`/dashboard/crm`) - Customer relationship management
- **Stocks Dashboard** (`/dashboard/stocks`) - Financial monitoring and stock tracking
- **SaaS Dashboard** (`/dashboard/saas`) - Software-as-a-Service metrics


### Communication

- **Chat** (`/chat`) - Real-time messaging interface
- **Email** (`/email/inbox`, `/email/sent`, etc.) - Complete email client
- **Notifications** (`/notifications`) - System and user notifications
- **Invoice** (`/invoice`) - Invoice creation and management


### Page Templates

- **Landing Pages** (`/pages/landing/1`, `/pages/landing/2`, etc.) - Marketing page templates
- **Error Pages** (`/pages/error/404`, `/pages/error/500`, etc.) - Error and status pages
- **File Management** (`/pages/files/documents`, etc.) - File storage and management
- **Payment Pages** (`/pages/payment/pending`, etc.) - Payment flow pages


## Components

The AdminPanel includes a comprehensive component library that serves as both documentation and a development resource.

### Component Categories

- **Inputs** (`/components/inputs`) - Form controls, buttons, inputs, selectors
- **Data Display** (`/components/data-display`) - Cards, tables, badges, lists
- **Data Tables** (`/components/data-tables`) - Advanced tables with sorting, filtering, pagination
- **Feedback** (`/components/feedback`) - Alerts, toasts, progress indicators
- **Navigation** (`/components/navigation`) - Tabs, breadcrumbs, menus, pagination


### Using the Data Table Component

The DataTable component provides advanced data management capabilities with minimal setup:

```typescriptreact
import { DataTable } from "@/components/ui/data-table/data-table"
import { columns } from "./columns"

// Your data array
const data = [
  {
    id: "1",
    name: "Product A",
    status: "active",
    price: "$29.99",
    // ...other fields
  },
  // ...more items
]

export function ProductsTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="name"
      searchPlaceholder="Search products..."
    />
  )
}
```

Custom columns definition example:

```typescriptreact
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header"

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.getValue("status") === "active" ? "success" : "secondary"}>
        {row.getValue("status")}
      </Badge>
    ),
  },
  // ...more columns
]
```

## Customization

### Theming

The AdminPanel uses Tailwind CSS for styling and supports both light and dark modes. The theme is configurable in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      // ... other color definitions
    },
    // ... other theme extensions
  }
}
```

### Layout Customization

You can customize the layout by modifying:

- `app/layout.tsx` - Main application layout
- `components/sidebar.tsx` - Navigation sidebar
- `components/header.tsx` - Application header


### Adding New Pages

1. Create a new file in the appropriate directory under `app/`
2. Export a React component as the default export
3. Add the route to the sidebar navigation in `components/sidebar.tsx` if needed


Example of adding a new dashboard page:

```typescriptreact
// app/dashboard/custom/page.tsx
export default function CustomDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Custom Dashboard</h1>
      <p className="text-muted-foreground">Your custom dashboard content here...</p>
      
      {/* Your dashboard components */}
    </div>
  )
}
```

## Best Practices

- Use the existing components whenever possible for consistency
- Follow the established folder and file naming conventions
- Keep pages and components focused on a single responsibility
- Utilize TypeScript for type safety
- Leverage server components for data fetching when appropriate
- Add appropriate loading states and error handling


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created with ❤️ using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).
