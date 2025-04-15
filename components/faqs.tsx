import React from "react";
import Hero from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Faqs() {
  return (
    <div>
        <div className="text-3xl md:text-4xl lg:text-5xl text-center mt-12">
            Frequently Asked Questions
        </div>
      <div className="container flex justify-center items-center mt-12 mb-32">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-xl flex gap-5 flex-col"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Is Pyxis a good place to buy pixel art NFTs?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Pyxis is a good place to buy pixel art NFTs. We have a wide
              range of pixel art NFTs for you to choose from.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="">
            <AccordionTrigger>How do I buy a pixel art NFT?</AccordionTrigger>
            <AccordionContent>
              To buy a pixel art NFT, you need to connect your wallet to the
              Pyxis platform and then select the NFT you want to buy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do I sell a pixel art NFT?</AccordionTrigger>
            <AccordionContent>
              To sell a pixel art NFT, you need to connect your wallet to the
              Pyxis platform and then select the NFT you want to sell.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How is the customer support?</AccordionTrigger>
            <AccordionContent>
              Our customer support is available 24/7. You can contact us via
              email or phone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
