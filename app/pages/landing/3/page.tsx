import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function LandingPage3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background dark:from-green-950/20 dark:to-background">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="font-bold text-xl">EcoSmart</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-green-600">
            About
          </a>
          <a href="#" className="text-sm font-medium hover:text-green-600">
            Products
          </a>
          <a href="#" className="text-sm font-medium hover:text-green-600">
            Sustainability
          </a>
          <a href="#" className="text-sm font-medium hover:text-green-600">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            Shop Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Sustainable living <span className="text-green-600">made simple</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Eco-friendly products that help you reduce your carbon footprint without compromising on quality or style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">Sustainable Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">Plastic-Free</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-600/20 rounded-full blur-3xl opacity-50"></div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Eco-friendly products"
                width={500}
                height={500}
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Bestsellers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular eco-friendly products that are helping thousands of customers live more
            sustainably.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Bamboo Cutlery Set",
              price: "$24.99",
              description: "Portable and reusable bamboo utensils to replace single-use plastic.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Organic Cotton Tote",
              price: "$18.99",
              description: "Durable, washable shopping bag made from 100% organic cotton.",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Beeswax Food Wraps",
              price: "$15.99",
              description: "Natural alternative to plastic wrap for food storage.",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="font-medium text-green-600">{product.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button
                  variant="outline"
                  className="w-full hover:bg-green-600 hover:text-white border-green-600 text-green-600"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-green-600 hover:bg-green-700 text-white">View All Products</Button>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-muted-foreground mb-6">
                We believe that small changes can make a big difference. That's why we're committed to creating products
                that are:
              </p>
              <ul className="space-y-4">
                {[
                  "Made from renewable or recycled materials",
                  "Produced using ethical manufacturing practices",
                  "Designed to be durable and long-lasting",
                  "Packaged in plastic-free, compostable materials",
                  "Carbon neutral from production to delivery",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white gap-2">
                Learn About Our Process
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Sustainable manufacturing"
                width={500}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of customers who are making a positive impact on the planet with our products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "I've been trying to reduce my plastic waste for years, and these products have made it so much easier!",
              name: "Emily K.",
              location: "Portland, OR",
              avatar: "EK",
            },
            {
              quote:
                "The quality is outstanding. I've had my bamboo cutlery set for over a year now and it still looks brand new.",
              name: "James T.",
              location: "Austin, TX",
              avatar: "JT",
            },
            {
              quote:
                "Not only are these products eco-friendly, but they're also beautifully designed. I love showing them off!",
              name: "Sophia L.",
              location: "Chicago, IL",
              avatar: "SL",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 text-green-600">★★★★★</div>
                <p className="mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together with our customers, we're making a real difference for the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              stat: "500,000+",
              label: "Single-use plastics avoided",
              icon: "🌊",
            },
            {
              stat: "10,000+",
              label: "Trees planted through our program",
              icon: "🌳",
            },
            {
              stat: "250 tons",
              label: "CO₂ emissions offset",
              icon: "☁️",
            },
          ].map((impact, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{impact.icon}</div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">{impact.stat}</h3>
              <p className="text-muted-foreground">{impact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="bg-green-600 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Sustainable Living Movement</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Small changes add up. Start your sustainable journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="font-bold text-lg">EcoSmart</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Making sustainable living accessible and stylish for everyone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 EcoSmart. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-green-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-green-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

