import React from "react";
import clsx from "clsx";

const Button = ({
  text = "Let's Collaborate",
  link = "#",
  className = "",
}) => {
  return (
    <div className="inline-block">
      <a href={link}>
        <button
          className={clsx(
            `relative flex items-center justify-center overflow-hidden 
            rounded-full px-6 py-3 min-w-52 font-medium transition-all duration-300 
            group hover:scale-105 shadow-lg hover:shadow-xl pr-12 hover:pr-0`, 
            className
          )}
        >
          {/* Sliding background */}
          <span
            className="absolute inset-0 z-0 w-0 h-full  rounded-full transition-all 
            duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full"
          />

          {/* Button text */}
          <span className="relative z-10  transition-colors duration-300">
            {text}
          </span>

          {/* Animated arrow icon */}
          <span
            className="absolute right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center 
            justify-center rounded-full border  transition-all duration-500 
            ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-x-[145px]"
          >
            <svg
              className="w-4 h-"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </a>
    </div>
  );
};

export default Button;
 