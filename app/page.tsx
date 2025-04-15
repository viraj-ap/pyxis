import Hero from "@/components/hero";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import { ModeToggle } from "@/components/toggle";
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
      <div>
        <Testimonials />
      </div>
      <div>
        <Faqs />
      </div>

    </>
  );
}
