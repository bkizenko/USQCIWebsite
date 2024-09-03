import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <TruckIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">US Quality Carrier</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Home</Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>About</Link>
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Services</Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Contact</Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-4">We'd love to hear from you. Please fill out this form and we will get in touch with you shortly.</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p><strong>Address:</strong> 123 Logistics Lane, Trucking City, TC 12345</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@usqualitycarrier.com</p>
                <p><strong>Hours:</strong> Monday - Friday: 8am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-12 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 US Quality Carrier Inc. All rights reserved.</p>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Privacy</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Terms</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Contact</Link>
        </nav>
      </footer>
    </div>
  );
};

const TruckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

export default Contact;
