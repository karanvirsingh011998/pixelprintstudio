'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsappButton() {
  const whatsappNumber = '+919815695007'; 
   const message = encodeURIComponent('Hello! I am interested in your printing services.');

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all flex items-center justify-center w-14 h-14"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'fixed' }}
    >
      <motion.div
        animate={{
          x: [-5, 5, -5], 
        }}
        transition={{
          repeat: Infinity, 
          duration: 2, 
          ease: 'easeInOut',
        }}
      >
        <MessageCircle className="h-7 w-7" />
      </motion.div>
    </motion.a>
  );
}
