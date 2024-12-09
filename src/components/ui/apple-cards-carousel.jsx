"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

// Create context
const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

// BlurImage Component
function BlurImage({ className, src, alt, ...rest }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt || "Background image"}
      {...rest}
    />
  );
}

// Card Component
export const Card = ({ card, index }) => {
  return (
    <div className="relative group block w-[400px]">
      <div className="relative overflow-hidden rounded-3xl p-8 h-[500px] bg-neutral-50 dark:bg-neutral-900 transition-all duration-300 transform group-hover:scale-[1.02]">
        <div className="relative z-10">
          <p className="text-sm font-light text-neutral-500 dark:text-neutral-400">
            {card.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {card.title}
          </h3>
        </div>
        <div className="relative z-10 mt-6">
          <img
            className="w-full h-[350px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
            src={card.src}
            alt={card.title}
          />
        </div>
        
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          <a
            href={card.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
            title="Visit Website"
          >
            <IconExternalLink className="w-6 h-6 text-white dark:text-black" />
          </a>

          <a
            href={card.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
            title="View Source"
          >
            <IconBrandGithub className="w-6 h-6 text-white dark:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Carousel Component
export const Carousel = ({ items }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
      {items}
    </div>
  );
};

export { CarouselContext };
