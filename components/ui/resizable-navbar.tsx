"use client";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/toggle";
import { Button } from "./button";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 w-full border-b-4 border-[var(--border)] bg-[var(--background)]",
        className
      )}
    >
      <div className="relative z-[60] mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center space-x-2 rounded-md border-2 border-[var(--border)] bg-[var(--background)] px-4 py-2 shadow-[4px_4px_0px_0px_var(--border)] transition-all duration-200 hover:-translate-y-1"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={100}
          />
          <span className="font-bold text-base text-[var(--foreground)]">Pyxis</span>
        </Link>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/viraj-ap/pyxis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white">
              <img src="github.svg" alt="github" className="w-6 h-6" />
            </Button>
            
          </a>
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  );
};
