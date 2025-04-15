import Hero from "@/components/hero";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import End from "@/components/end";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <div>
        <Faqs />
      </div>
      <div>
        <End />
      </div>
    </>
  );
}
