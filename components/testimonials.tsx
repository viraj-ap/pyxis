import React from 'react';
import Image from 'next/image';

type TestimonialProps = {
  name: string;
  title: string;
  quote: string;
  imageSrc: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, quote, imageSrc }) => {
  
  const bgColors = [
    'bg-yellow-200',
    'bg-blue-200',
    'bg-green-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-orange-200',
    'bg-red-200',
    'bg-gray-200',
    'bg-teal-200',
    'bg-lime-200',
    'bg-cyan-200',
    'bg-fuchsia-200',
    'bg-violet-200',
    
  ];
  
  const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
  
  return (
    <div 
      className={`${randomBg} dark:text-black p-6 rounded-none transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black transition-transform hover:translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-24 h-24 border-4 border-black overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={name} 
            width={96} 
            height={96} 
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-black text-xl mb-0">{name}</h3>
          <p className="font-bold text-sm">{title}</p>
        </div>
      </div>
      <p className="font-bold leading-snug">{quote}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const users = [
    {
      name: "Willis Cummings",
      title: "NFT Artist & Collector",
      imageSrc: "/images/user1.jpg",
    },
    {
      name: "Ignacio Beier",
      title: "Digital Art Investor",
      imageSrc: "/images/user2.png",
    },
    {
      name: "Megan Franey",
      title: "Crypto Enthusiast",
      imageSrc: "/images/user3.png",
    },
    {
      name: "John Doe",
      title: "NFT Gallery Owner",
      imageSrc: "/images/user4.png",
    },
    {
      name: "Lillie Green",
      title: "Web3 Developer",
      imageSrc: "/images/user5.png",
    },
    {
      name: "Pedro Carroll",
      title: "Blockchain Consultant",
      imageSrc: "/images/user6.png",
    },
  ];

  const positiveQuotes = [
    "Pyxis has completely transformed how I create and sell NFTs. The UI is intuitive and the support team responds within minutes!",
    "I've tried multiple NFT platforms, but nothing compares to Pyxis. The website design makes browsing collections an absolute joy!",
    "The customer support at Pyxis is unmatched. They helped me set up my first collection and I sold out in hours!",
    "Pyxis' user interface is a breath of fresh air in the NFT space. Clean, bold, and incredibly easy to navigate.",
    "I love how Pyxis makes complex blockchain transactions feel simple. Their UI/UX team deserves an award!",
    "After switching to Pyxis, my NFT sales increased by 300%. The platform's visibility and user experience are game-changers!",
    "The Pyxis team has built something truly special. Their platform combines bold design with flawless functionality!"
  ];

  // Map users to testimonials with positive quotes
  const testimonials = users.map((user, index) => ({
    ...user,
    quote: positiveQuotes[index]
  }));

  return (
    <div className="relative py-12 px-4 overflow-hidden mt-12">
     
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-12 underline decoration-8 decoration-yellow-400 ">
          Loved by the community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;