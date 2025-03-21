"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Menu */}
      {isOpen && (
        <div className="fixed top-12 left-4 w-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 space-y-3 z-10">
          <Link
            href="/"
            className="block text-gray-700 dark:text-white hover:text-blue-500"
          >
            Home
          </Link>
          {/* <Link
            href="/categories"
            className="block text-gray-700 dark:text-white hover:text-blue-500"
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 dark:text-white hover:text-blue-500"
          >
            Contact Us
          </Link> */}
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
