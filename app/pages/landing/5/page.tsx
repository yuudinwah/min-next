import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function LandingPage5() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="font-bold text-xl">CreativeStudio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-purple-600">
            Work
          </a>
          <a href="#" className="text-sm font-medium hover:text-purple-600">
            Services
          </a>
          <a href="#" className="text-sm font-medium hover:text-purple-600">
            About
          </a>
          <a href="#" className="text-sm font-medium hover:text-purple-600">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              We craft{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                digital experiences
              </span>{" "}
              that inspire
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Award-winning creative agency specializing in brand strategy, web design, and digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white gap-2"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Showreel
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">C{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Trusted by</span> industry leaders
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl opacity-50"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Creative work 1"
                width={250}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Creative work 2"
                width={250}
                height={250}
                className="rounded-lg shadow-lg mt-8"
              />
              <Image
                src="/placeholder.svg?height=200&width=250"
                alt="Creative work 3"
                width={250}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Creative work 4"
                width={250}
                height={300}
                className="rounded-lg shadow-lg -mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-muted-foreground">Trusted by innovative companies worldwide</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="h-8 flex items-center justify-center">
                  <div className="text-xl font-bold text-muted-foreground">Client {i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of creative and digital services to help your brand stand out
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Strategy",
              description:
                "We develop compelling brand strategies that connect with your audience and differentiate you from competitors.",
              icon: "🎯",
            },
            {
              title: "Web Design & Development",
              description:
                "Custom websites that are visually stunning, highly functional, and optimized for conversion.",
              icon: "💻",
            },
            {
              title: "Digital Marketing",
              description:
                "Data-driven marketing campaigns that increase visibility, engagement, and drive measurable results.",
              icon: "📈",
            },
            {
              title: "UI/UX Design",
              description:
                "User-centered design that creates intuitive, enjoyable digital experiences for your customers.",
              icon: "🎨",
            },
            {
              title: "Content Creation",
              description: "Compelling content that tells your story and resonates with your target audience.",
              icon: "✍️",
            },
            {
              title: "Social Media Management",
              description: "Strategic social media presence that builds community and strengthens your brand.",
              icon: "📱",
            },
          ].map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="ghost" className="p-0 hover:text-purple-600 hover:bg-transparent">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our latest projects and see how we've helped our clients achieve their goals
              </p>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white mt-4 md:mt-0">
              View All Projects
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovate App Redesign",
                category: "UI/UX Design",
                image: "/placeholder.svg?height=500&width=600",
              },
              {
                title: "EcoSmart Brand Identity",
                category: "Branding",
                image: "/placeholder.svg?height=500&width=600",
              },
              {
                title: "TechGiant Marketing Campaign",
                category: "Digital Marketing",
                image: "/placeholder.svg?height=500&width=600",
              },
              {
                title: "Luxury Hotel Website",
                category: "Web Development",
                image: "/placeholder.svg?height=500&width=600",
              },
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-purple-300 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <Button variant="outline" className="w-fit border-white text-white hover:bg-white hover:text-black">
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to ensure every project is delivered with excellence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Discovery",
              description: "We dive deep to understand your business, audience, and objectives.",
              icon: "🔍",
              step: "01",
            },
            {
              title: "Strategy",
              description: "We develop a comprehensive plan tailored to your specific needs.",
              icon: "📝",
              step: "02",
            },
            {
              title: "Creation",
              description: "Our team brings the strategy to life with creativity and precision.",
              icon: "✨",
              step: "03",
            },
            {
              title: "Optimization",
              description: "We continuously refine and improve to maximize results.",
              icon: "📈",
              step: "04",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/10 flex items-center justify-center mx-auto">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-xs text-white font-medium">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working with CreativeStudio transformed our brand. Their strategic approach and creative execution exceeded our expectations.",
                name: "Sarah Johnson",
                title: "Marketing Director, TechCorp",
                avatar: "SJ",
              },
              {
                quote:
                  "The team's attention to detail and commitment to quality is unmatched. They truly understood our vision and brought it to life.",
                name: "Michael Chen",
                title: "CEO, Innovate Inc.",
                avatar: "MC",
              },
              {
                quote:
                  "Not only did they deliver an exceptional website, but they also provided valuable insights that helped grow our business.",
                name: "Emma Rodriguez",
                title: "Founder, EcoSmart",
                avatar: "ER",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 text-purple-600">★★★★★</div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a diverse team of creative thinkers, strategic planners, and technical experts
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Morgan",
              role: "Creative Director",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Jessica Chen",
              role: "Lead Designer",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "David Kim",
              role: "Web Developer",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Sophia Patel",
              role: "Marketing Strategist",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10 border-white text-white hover:bg-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10 border-white text-white hover:bg-white hover:text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 gap-2">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              View Our Work
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-lg">CreativeStudio</span>
              </div>
              <p className="text-muted-foreground mb-4">
                We craft digital experiences that inspire and drive results for ambitious brands.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-purple-600">
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
                <a href="#" className="text-muted-foreground hover:text-purple-600">
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
                <a href="#" className="text-muted-foreground hover:text-purple-600">
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
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Brand Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Content Creation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-purple-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 CreativeStudio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

