"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <div className="container mx-auto px-4 dark:text-black">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-8 mt-8 lg:mt-12">
        <div className="relative mt-8 lg:mt-12 py-4 px-6">
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-300 -rotate-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-0"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around gap-8">
            <div className="text-3xl md:text-4xl lg:text-5xl max-w-2xl text-center lg:text-left font-black">
              <span className="bg-violet-500 text-white px-2 py-1 border-4 border-black">
                Pyxis
              </span>
              <span className="relative inline-block mx-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-3 after:bg-green-400 after:rotate-1 after:-z-10">
                - The best
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block my-2 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-3 after:bg-pink-400 after:-rotate-1 after:-z-10">
                market place to buy
              </span>
              <br className="hidden md:block" />
              <span className="relative inline-block ml-2 bg-blue-300 px-3 -rotate-2 border-b-4 border-r-4 border-black">
                pixel art NFTs.
              </span>
            </div>

            <div className="hidden lg:block absolute top-32 -right-4 -bottom-4 w-20 h-20 bg-orange-400 border-4 border-black rotate-12"></div>
          </div>
        </div>

        <div className="relative w-full max-w-md lg:max-w-lg">
          <Image
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-center mt-8 lg:mt-12">
        <Button
          onClick={handleClick}
          className="text-xl md:text-xl lg:text-2xl px-6 py-4 w-full sm:w-64 h-16 flex items-center justify-center gap-2"
        >
          Buy Now <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
