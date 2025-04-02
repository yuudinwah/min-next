import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, CheckCircle2, ChevronRight, Clock, MapPin, Mic, Play, Users } from "lucide-react"
import Image from "next/image"

export default function LandingPage4() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="font-bold text-xl">ConferenceX</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-orange-600">
            Speakers
          </a>
          <a href="#" className="text-sm font-medium hover:text-orange-600">
            Schedule
          </a>
          <a href="#" className="text-sm font-medium hover:text-orange-600">
            Venue
          </a>
          <a href="#" className="text-sm font-medium hover:text-orange-600">
            Sponsors
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Login
          </Button>
          <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
            Register Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container mx-auto py-32 px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">🗓️</span> June 15-17, 2023 • San Francisco, CA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Ultimate Tech Conference of 2023</h1>
            <p className="text-xl opacity-90 mb-10 max-w-2xl">
              Join industry leaders, innovators, and tech enthusiasts for three days of inspiring talks, workshops, and
              networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 gap-2">
                Register Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 gap-2">
                <Play className="h-4 w-4" />
                Watch Highlights
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">S{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-medium">50+ speakers</span> from leading tech companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Event Starts In</h2>
              <p className="text-muted-foreground">Secure your spot before tickets sell out</p>
            </div>
            <div className="flex gap-4">
              {[
                { value: "45", label: "Days" },
                { value: "18", label: "Hours" },
                { value: "24", label: "Minutes" },
                { value: "52", label: "Seconds" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-background rounded-lg shadow-md flex items-center justify-center text-3xl font-bold text-orange-600">
                    {item.value}
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Speakers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from the brightest minds and industry leaders in technology
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "CTO, TechGiant",
              topic: "The Future of AI",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Chen",
              role: "VP of Product, InnovateCorp",
              topic: "Building for Scale",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Emily Rodriguez",
              role: "Founder, StartupX",
              topic: "From Idea to IPO",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "David Kim",
              role: "Lead Engineer, CloudSolutions",
              topic: "Next-Gen Cloud Architecture",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((speaker, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">{speaker.name}</h3>
                  <p className="text-white/80 text-sm">{speaker.role}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-orange-600 font-medium mb-2">
                  <Mic className="h-4 w-4" />
                  <span>{speaker.topic}</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-between hover:text-orange-600">
                  View Profile
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">View All Speakers</Button>
        </div>
      </section>

      {/* Schedule Highlights */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Schedule Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three days packed with inspiring talks, hands-on workshops, and networking opportunities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                day: "Day 1",
                date: "June 15",
                events: [
                  { time: "9:00 AM", title: "Opening Keynote", speaker: "Sarah Johnson", type: "keynote" },
                  { time: "11:00 AM", title: "The Future of AI", speaker: "Michael Chen", type: "talk" },
                  { time: "2:00 PM", title: "Building Scalable Systems", speaker: "David Kim", type: "workshop" },
                ],
              },
              {
                day: "Day 2",
                date: "June 16",
                events: [
                  { time: "9:00 AM", title: "Product Innovation", speaker: "Emily Rodriguez", type: "keynote" },
                  { time: "11:00 AM", title: "Cloud Architecture", speaker: "Alex Thompson", type: "talk" },
                  { time: "2:00 PM", title: "UX Design Workshop", speaker: "Jessica Lee", type: "workshop" },
                ],
              },
            ].map((day, dayIndex) => (
              <div key={dayIndex} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                    {dayIndex + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{day.day}</h3>
                    <p className="text-muted-foreground">{day.date}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <Card key={eventIndex} className="border-none shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="md:w-1/6">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <div className="md:w-3/6">
                            <h4 className="font-bold text-lg">{event.title}</h4>
                            <p className="text-muted-foreground">{event.speaker}</p>
                          </div>
                          <div className="md:w-1/6">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                event.type === "keynote"
                                  ? "bg-orange-100 text-orange-600"
                                  : event.type === "workshop"
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-green-100 text-green-600"
                              }`}
                            >
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </span>
                          </div>
                          <div className="md:w-1/6 text-right">
                            <Button variant="ghost" size="sm" className="hover:text-orange-600">
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">View Full Schedule</Button>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Conference Venue</h2>
            <p className="text-muted-foreground mb-6">
              Join us at the stunning Tech Convention Center, located in the heart of San Francisco with easy access to
              hotels, restaurants, and attractions.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Tech Convention Center</h3>
                  <p className="text-muted-foreground">123 Innovation Street, San Francisco, CA 94103</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Event Dates</h3>
                  <p className="text-muted-foreground">June 15-17, 2023 (9:00 AM - 6:00 PM)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Capacity</h3>
                  <p className="text-muted-foreground">2,000 attendees</p>
                </div>
              </div>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white gap-2">
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Conference venue"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ticket Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the ticket that best fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Standard",
                price: "$299",
                description: "Perfect for individuals interested in attending the main conference",
                features: ["Access to all keynotes", "Access to all talks", "Conference swag", "Coffee breaks & lunch"],
              },
              {
                name: "Pro",
                price: "$499",
                description: "Ideal for professionals looking for the complete experience",
                features: [
                  "Everything in Standard",
                  "Workshop access",
                  "Networking reception",
                  "Video recordings",
                  "Priority seating",
                ],
                popular: true,
              },
              {
                name: "VIP",
                price: "$899",
                description: "The ultimate conference experience with exclusive perks",
                features: [
                  "Everything in Pro",
                  "Exclusive VIP lounge",
                  "Speaker dinner access",
                  "1-on-1 mentoring session",
                  "Premium swag package",
                ],
              },
            ].map((ticket, index) => (
              <Card key={index} className={`border ${ticket.popular ? "border-orange-600 shadow-lg" : ""}`}>
                {ticket.popular && (
                  <div className="bg-orange-600 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                )}
                <CardContent className={`pt-6 ${ticket.popular ? "pb-6" : "py-6"}`}>
                  <h3 className="text-xl font-bold mb-1">{ticket.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{ticket.price}</span>
                    <span className="text-muted-foreground ml-1">/person</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{ticket.description}</p>
                  <Button
                    variant={ticket.popular ? "default" : "outline"}
                    className={`w-full mb-6 ${ticket.popular ? "bg-orange-600 hover:bg-orange-700 text-white" : "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"}`}
                  >
                    {ticket.popular ? "Register Now" : "Get Tickets"}
                  </Button>
                  <ul className="space-y-3">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-orange-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Need to register a large group?</p>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Contact us for group discounts
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ConferenceX is made possible by the support of our amazing sponsors
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">Platinum Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="w-48 h-24 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-2xl font-bold text-muted-foreground">Sponsor {i}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">Gold Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-36 h-20 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-xl font-bold text-muted-foreground">Sponsor {i}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">Silver Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-28 h-16 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-lg font-bold text-muted-foreground">Sponsor {i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in sponsoring ConferenceX?</p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">Become a Sponsor</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to join us at ConferenceX?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to learn, connect, and grow with the tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 gap-2">
              Register Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Contact Us
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
                <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-lg">ConferenceX</span>
              </div>
              <p className="text-muted-foreground mb-4">
                The ultimate tech conference bringing together innovators, leaders, and enthusiasts.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-orange-600">
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
                <a href="#" className="text-muted-foreground hover:text-orange-600">
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
                <a href="#" className="text-muted-foreground hover:text-orange-600">
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
              <h3 className="font-semibold mb-4">Conference</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Venue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-orange-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 ConferenceX. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-orange-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-orange-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

