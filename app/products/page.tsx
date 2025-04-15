// app/products/page.tsx
"use client";

import React from "react";
import ImageCard from "@/components/ui/image-card";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { nftProducts } from "@/lib/nft-data";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 6;
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = nftProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(nftProducts.length / productsPerPage);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 dark:text-black">
      {/* Header */}
      <div className="relative mb-12 max-w-6xl mx-auto">
        <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-300 border-4 border-black -rotate-1 z-0"></div>
        <div className="relative bg-white border-4 border-black p-6 z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-black relative inline-block">
                <span className="bg-purple-500 text-white px-3 py-1 border-4 border-black">Pyxis</span>
                <span className="ml-2">NFT Market</span>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-green-400 -z-10"></div>
              </h1>
            </Link>
            
            <div className="flex gap-4">
              <div className="bg-pink-300 border-4 border-black px-4 py-2 font-bold">
                {nftProducts.length} Items
              </div>
              <div className="bg-blue-300 border-4 border-black px-4 py-2 font-bold">
                {currentPage} / {totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ImageCard
                imageUrl={product.imageUrl}
                caption={`${product.title} - ${product.price} ETH`}
              />
            </Link>
          ))}
        </div>
      </div>
      
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center">
          <div className="flex gap-4">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`bg-white border-4 dark:text-black border-black px-6 py-3 font-black flex items-center gap-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
            >
              <ArrowLeftIcon size={20} />
              Prev
            </button>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`bg-white dark:text-black border-4 border-black px-6 py-3 font-black flex items-center gap-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
            >
              Next
              <ArrowRightIcon size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}