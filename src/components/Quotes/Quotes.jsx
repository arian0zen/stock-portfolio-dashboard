import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaRegUser } from "react-icons/fa";
import { RiSingleQuotesL } from "react-icons/ri";

const quotes = [
  {
    quote:
      "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    author: "Ayn Rand",
    category: "Trap",
  },
  {
    quote:
      "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
    author: "A. J. Liebling",
    category: "Confidence",
  },
  {
    quote: "This book fills a much-needed gap.",
    author: "Moses Hadas in a review",
    category: "Trust",
  },
  {
    quote: "A mathematician is a device for turning coffee into theorems.",
    author: "Paul Erdos",
    category: "Skills",
  },
  {
    quote: "The only difference between me and a madman is that I'm not mad.",
    author: "Salvador Dali",
    category: "Famous",
  },
  {
    quote: "Never interrupt your enemy when he is making a mistake.",
    author: "Napoleon Bonaparte",
    category: "Mistake",
  },
  {
    quote: "If you are going through hell, keep going.",
    author: "Sir Winston Churchill ",
    category: "Heaven",
  },
  {
    quote: "He who has a 'why' to live, can bear with almost any 'how'.",
    author: "Friedrich Nietzsche",
    category: "Life",
  },
  {
    quote:
      "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
    author: "Frank Lloyd Wright",
    category: "Learn",
  },
  {
    quote:
      "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
    author: "Sir Winston Churchill",
    category: "End",
  },
];

const Quotes = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    let interval = setInterval(() => {
      let randomQuote = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomQuote]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 hidden w-[90%] h-[350px] px-8 mx-auto md:flex flex-col justify-center items-center relative rounded-xl">
      <span className="absolute top-0 left-0 mt-4 mx-6">
        <FaQuoteLeft className="text-7xl text-blue-400" />
      </span>
      <span className="absolute bottom-0 right-0  mx-6 mb-4 rotate-180">
        <FaQuoteLeft className="text-7xl text-cyan-400" />
      </span>
      <p className="text-center text-xl italic">{quote.quote}</p>
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-row justify-center items-center">
          <RiSingleQuotesL size={25} className="text-2xl"/>
          <div className="flex flex-col justify-center ml-4 mr-auto">
            <h2 className="text-sm">{quote.author}</h2>
            <p className="text-gray-600 text-xs">{quote.category}</p>
          </div>
      </div>
    </div>
  );
};

export default Quotes;
