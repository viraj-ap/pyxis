"use client";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconBrandTwitter, IconBrandDiscord } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t-4 border-[var(--border)] bg-[var(--background)] py-12 flex justify-center items-center">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <div className="flex items-center space-x-2 rounded-md border-2 border-[var(--border)] bg-[var(--background)] px-4 py-2 shadow-[4px_4px_0px_0px_var(--border)]">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={40}
                  height={100}
                />
                <span className="font-['Pixelify_Sans'] text-[var(--foreground)]">Pyxis</span>
              </div>
            </Link>
            <p className="text-[var(--foreground)] text-center md:text-left max-w-xs font-['Pixelify_Sans']">
              The best marketplace to buy and sell pixel art NFTs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 font-['Pixelify_Sans']">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[var(--foreground)] hover:underline font-['Pixelify_Sans']">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[var(--foreground)] hover:underline font-['Pixelify_Sans']">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[var(--foreground)] hover:underline font-['Pixelify_Sans']">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 font-['Pixelify_Sans']">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="default" size="icon" className="border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]">
                <IconBrandGithub className="h-6 w-6" />
              </Button>
              <Button variant="default" size="icon" className="border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]">
                <IconBrandTwitter className="h-6 w-6" />
              </Button>
              <Button variant="default" size="icon" className="border-2 border-[var(--border)] shadow-[4px_4px_0px_0px_var(--border)]">
                <IconBrandDiscord className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-2 border-[var(--border)] pt-8">
          <p className="text-center text-[var(--foreground)] font-['Pixelify_Sans']">
            © {new Date().getFullYear()} Pyxis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 