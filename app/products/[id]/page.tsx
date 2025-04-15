// app/products/[id]/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { nftProducts } from "@/lib/nft-data";
import { Toaster } from "@/components/ui/sonner";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  // Find the product by ID
  const product = nftProducts.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    toast.success(`You've purchased ${product.title} for ${product.price} ETH`);
  };

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 dark:text-black">
      <Toaster />
      {/* Back button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link href="/products">
          <div className="inline-block bg-white border-4 border-black px-4 py-2 font-bold flex items-center gap-2 transform hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <ArrowLeftIcon size={20} />
            Back to Products
          </div>
        </Link>
      </div>

      {/* Product Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-300 border-4 border-black rotate-1 z-0"></div>
            <div className="relative border-4 border-black bg-white z-10">
              <div className="relative w-full aspect-square">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-400 border-4 border-black rotate-12 z-0"></div>
          </div>

          {/* Product Details */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-pink-300 border-4 border-black -rotate-1 z-0"></div>
            <div className="relative border-4 border-black bg-white p-6 z-10">
              <h1 className="text-4xl font-black mb-2">{product.title}</h1>

              <div className="mb-6">
                <span className="bg-green-400 border-2 border-black px-3 py-1 font-bold">
                  By {product.artist}
                </span>
              </div>

              <p className="text-lg mb-6 border-b-4 border-black pb-6">
                {product.description}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-bold text-sm">Collection</h3>
                  <p className="font-black">{product.collection}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Created On</h3>
                  <p className="font-black">{product.created}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t-4 border-black">
                <div className="bg-yellow-300 border-4 border-black p-4 text-center md:text-left">
                  <p className="text-sm font-bold">Current Price</p>
                  <p className="text-3xl font-black">{product.price} ETH</p>
                </div>

                <Button
                  onClick={handleBuyNow}
                  className="bg-purple-500 text-white border-4 border-black px-8 py-4 font-black text-xl w-full md:w-auto flex items-center justify-center transform hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 border-4 border-black -rotate-6 z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
