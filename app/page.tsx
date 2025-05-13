"use client";

import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Printer,
  Gift,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import WhatsappButton from "@/components/WhatsappContact";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What types of printing do you offer?",
    answer:
      "We offer digital, offset, and large-format printing for various materials.",
  },
  {
    question: "How fast is the turnaround?",
    answer:
      "Our standard turnaround is 2-5 business days depending on the project.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "We don't have a strict minimum order quantity for most products. Whether you need just a few or hundreds, we can accommodate your needs!",
  },
  {
    question: "Can I get a sample of my print before placing a full order?",
    answer:
      "Yes, we offer a sample service for most products. Please contact us to request a sample print before finalizing your order.",
  },
  {
    question: "Can I get a custom design?",
    answer:
      "Yes! Our team can help design custom materials based on your needs.",
  },
];

export default function Home() {
  const [currentChooseUs, setCurrentChooseUs] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whyChooseUs = [
    "High-quality prints",
    "Affordable pricing",
    "Eco-friendly materials",
    "Custom design support",
    "Fast turnaround times",
  ];

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
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#DD087F] via-[#008ED6] to-[#FFE801] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 1.5, repeat: Infinity },
              }}
            >
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </motion.div>

            <h1 className="text-4xl sm:text-8xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#DD087F] via-[#008ED6] to-[#FFE801]">
              Pixel Print Studios
            </h1>
            <p className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-[#DD087F] to-[#008ED6] text-transparent bg-clip-text">
              <Typewriter
                options={{
                  strings: ["Ink Your Imagination"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </p>

            <p className="text-sm sm:text-xl text-muted-foreground">
              Looking for top-quality printing in Chandigarh? We’ve got you
              covered! At our printing service, we combine cutting-edge
              technology with expert craftsmanship to deliver flawless
              prints—whether it’s business cards, banners, or custom projects.
              No matter your needs, we ensure precision, quality, and complete
              satisfaction. Whether you're a business aiming to stand out or an
              individual with unique printing requirements, we bring your vision
              to life with unmatched expertise. Experience printing perfection
              with us—where your ideas meet exceptional quality!
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#DD087F] to-[#008ED6] hover:opacity-90 transition-all duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
        <ThemeSwitcher />
      </section>

      {/* Coming Soon Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-6 rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center text-white">
              🚀 Coming Soon!
            </DialogTitle>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-white"
          >
            <p className="text-lg">
              We’re working on something amazing. Stay tuned! 🎨✨
            </p>
            <Button
              className="mt-4 bg-gradient-to-r from-[#DD087F] to-[#008ED6] hover:opacity-90 transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Popular Products Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Business Cards',
                image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'Best Seller',
              },
              {
                title: 'Custom Mugs',
                image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'New',
              },
              {
                title: 'Brochures',
                image: 'https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'Popular',
              },
              {
                title: 'Custom T-Shirts',
                image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'Featured',
              },
              {
                title: 'Business Cards',
                image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'Best Seller',
              },
              {
                title: 'Custom Mugs',
                image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'New',
              },
              {
                title: 'Brochures',
                image: 'https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'Popular',
              },
              {
                title: 'Custom T-Shirts',
                image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&q=80',
                price: 'Starting from Rs.500',
                badge: 'Featured',
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">{product.badge}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#DD087F] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center gap-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentChooseUs((prev) =>
                    prev === 0 ? whyChooseUs.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Card className="flex-1 p-8">
                <p className="text-lg italic text-center">
                  {whyChooseUs[currentChooseUs]}
                </p>
              </Card>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentChooseUs((prev) =>
                    prev === whyChooseUs.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-[#DD087F]" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        pixelprintstudios7@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
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
                      <p className="text-muted-foreground">
                        182/56, Industrial Area Phase 1
                      </p>
                      <p className="text-muted-foreground">
                        Chandigarh, IN 160002
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-80 md:h-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.4095892633858!2d76.79598947364369!3d30.702838486789187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed41e45d0ea3%3A0x4ce50a6db2fdd0b3!2sPixel%20Print%20Studios!5e0!3m2!1sen!2sin!4v1741853827066!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Special Offers & Discounts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Offer Card 1 */}
            <Card className="bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#DD087F]">
                  10% OFF Your First Order!
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Get 10% off your first print order.
                  {/* Use code: <span className="font-bold text-[#008ED6]">WELCOME10</span> */}
                </p>
                {/* <Button
                size="lg"
                className="mt-6 bg-gradient-to-r from-[#DD087F] to-[#008ED6] text-white hover:opacity-90 transition-all duration-300"
              >
                Claim Your Offer
              </Button> */}
              </div>
            </Card>

            {/* Offer Card 2 */}
            <Card className="bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-[#FFE801]">
                  Bulk Order Discount
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Ordering in bulk? Get up to 20% off on large orders.
                  {/* Use code: <span className="font-bold text-[#DD087F]">BULK20</span> */}
                </p>
                {/* <Button
                size="lg"
                className="mt-6 bg-gradient-to-r from-[#FFE801] to-[#008ED6] text-white hover:opacity-90 transition-all duration-300"
              >
                Order Now
              </Button> */}
              </div>
            </Card>
          </div>

          {/* Limited-time Banner */}
          <Card className="mt-4 bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#DD087F]">
                Limited Time Offer!
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Get an additional 5% off on all orders above ₹2000. Hurry, offer
                ends soon!
              </p>
              {/* <Button
                size="lg"
                className="mt-6 bg-gradient-to-r from-[#DD087F] to-[#008ED6] text-white hover:opacity-90 transition-all duration-300"
              >
                Claim Your Offer
              </Button> */}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsappButton />
      <Footer />
    </div>
  );
}
