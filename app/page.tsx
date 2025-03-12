'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { Sun, Moon, Printer, Gift, Star, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Marketing Director",
  //     text: "Pixel Print Studios delivered exceptional quality for our corporate branding materials. Their attention to detail is unmatched!",
  //     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "CEO",
  //     text: "The team went above and beyond our expectations. Their creative solutions helped us stand out in our industry.",
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Design Lead",
  //     text: "Working with Pixel Print Studios has been a game-changer for our business. Their innovative approach sets them apart.",
  //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  //   }
  // ];

  const services = [
    {
      title: "Premium Printing",
      description: "High-quality printing services for all your business needs",
      icon: <Printer className="h-8 w-8" />,
    },
    {
      title: "Corporate Gifting",
      description: "Unique and personalized corporate gift solutions",
      icon: <Gift className="h-8 w-8" />,
    },
    {
      title: "Custom Design",
      description: "Bespoke design services tailored to your brand",
      icon: <Star className="h-8 w-8" />,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#DD087F] via-[#008ED6] to-[#FFE801] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Image src="/assets/images/logo.png" alt="Logo" width={100} height={100} className="mx-auto"  />

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#DD087F] via-[#008ED6] to-[#FFE801]">
              Pixel Print Studios
            </h1>
            <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-[#DD087F] to-[#008ED6] text-transparent bg-clip-text">
              Ink Your Imagination
            </p>
            {/* <Button
              size="lg"
              className="bg-gradient-to-r from-[#DD087F] to-[#008ED6] hover:opacity-90 transition-all duration-300"
            >
              Get Started
            </Button> */}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-[#DD087F] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={`https://images.unsplash.com/photo-${item + 500}?w=500&h=300&fit=crop`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center gap-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Card className="flex-1 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                <p className="text-lg italic">{testimonials[currentTestimonial].text}</p>
              </Card>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6 text-[#DD087F]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">pixelprintstudios7@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-6 w-6 text-[#008ED6]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 9815695007</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-[#FFE801]" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">182/56, Industrial Area Phase 1</p>
                    <p className="text-muted-foreground">Chandigarh, IN 160002</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <Card className="max-w-2xl mx-auto p-8">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button
                className="w-full bg-gradient-to-r from-[#DD087F] to-[#008ED6] hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section> */}
    </div>
  );
}