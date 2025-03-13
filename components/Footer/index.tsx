import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaArrowUp, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="relative py-12 bg-muted">
      {/* Glassmorphic Container */}
      <Card className="max-w-5xl mx-auto px-6 py-8 text-center flex flex-col items-center shadow-lg">
        {/* Brand Info */}
        <h2 className="w-fit text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DD087F] via-[#008ED6] to-[#FFE801]">Pixel Print Studios</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Bringing your ideas to life with high-quality prints.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-4">
          {[
            { icon: <FaFacebookF size={18} />, link: "https://facebook.com" },
            { icon: <FaInstagram size={18} />, link: "https://instagram.com" },
            { icon: <FaLinkedinIn size={18} />, link: "https://linkedin.com" },
            { icon: <FaEnvelope size={18} />, link: "mailto:pixelprintstudios7@gmail.com" }
          ].map(({ icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted-foreground/20 rounded-full hover:bg-muted-foreground/30 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Back to Top Button with Infinite Animation */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-muted-foreground/20 rounded-full hover:bg-muted-foreground/30 transition shadow-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowUp size={20} />
        </motion.button>

        {/* Copyright & Personal Credit */}
        <p className="mt-6 text-xs text-muted-foreground">© 2025 Pixel Print Studios. All rights reserved.</p>
        <p className="mt-1 text-xs text-muted-foreground hover:opacity-100 transition">
          Created with ❤️ by {" "}
          <a 
            href="https://karanvirsingh011998.github.io/portfolio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary font-bold hover:underline transition"
          >
            Karan
          </a>
        </p>
      </Card>
    </footer>
  );
};

export default Footer;