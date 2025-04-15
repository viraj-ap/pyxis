"use client";

import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

function End() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute top-0 right-16 w-16 h-16 bg-red-400 border-4 border-black rotate-12"></div>
      <div className="absolute bottom-0 left-16 w-24 h-24 bg-blue-400 border-4 border-black -rotate-6"></div>

      <div className="max-w-4xl mx-auto px-4 dark:text-black">
        <div className="relative bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 transform rotate-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 relative">
            <span className="relative inline-block">
              Get your
              <span className="absolute -top-3 -right-3 w-6 h-6 bg-red-400 border-2 border-black rounded-full"></span>
            </span>
            <span className="inline-block bg-purple-500 text-white px-4 py-1 transform -rotate-2 border-4 border-black">
              Pyxis NFT
            </span>
            <span className="relative">
              now!
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-green-400 -z-10"></div>
            </span>
          </h2>

          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="group bg-green-400 hover:bg-green-500 text-black font-black text-xl md:text-2xl px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            >
              <div className="relative flex items-center justify-center gap-3 z-10">
                Buy Now
                <ArrowUpRightIcon
                  size={28}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;
