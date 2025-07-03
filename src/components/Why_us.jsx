import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const Why_Us = () => {
  const skills = [
    {
      id: 1,
      name: "Creativity",
      description: "We craft innovative solutions with imagination and originality.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-700",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Innovation",
      description: "Transforming fresh ideas into impactful, scalable products.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Strategy",
      description: "We align vision with data to guide every decision with clarity.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];


  const statistics = [
    { id: 1, number: 20, label: "Clients Helped", hasPlus: true },
    { id: 2, number: 15, label: "Years Of Experience", hasPlus: true },
    { id: 3, number: 200, label: "Hours of Data Audited", hasPlus: true },
  ];

  const [startCount, setStartCount] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setStartCount(true);
            setHasAnimated(true); // Prevent future animations
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Slightly delay the trigger
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="max-w-7xl mx-auto px-6  md:pt-10">
      {/* Skills Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-primary-text md:px-10 mb-12">
          Why <span className="font-instrument-serif font-medium italic">Us ?</span></h2>

        <p className="text-lg md:text-xl text-secondary-text max-w-4xl mx-auto mb-12">
          We empower decision-makers with meaningful metrics and strategic support, driven by Creativity, Innovation, and proven Strategy.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-8 ">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="w-full max-w-xs rounded-2xl border border-neutral-300 bg-white dark:bg-neutral-900 shadow-md p-6 text-center transition-shadow duration-300"
            >
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${skill.bgColor} ${skill.textColor}`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Stats Grid */}
      <div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6 max-w-6xl mx-auto"
      >
        {statistics.map((stat, index) => (
          <div
            key={stat.id}
            className={`p-8 border-border transition-all duration-300 hover:-translate-y-1 group ${index !== statistics.length - 1 ? "md:border-r" : ""
              }`}
          >
            <div className="text-center">
              <div className="relative mb-4">
                <div className="text-7xl md:text-9xl font-semibold text-primary-text mb-2 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  {stat.hasPlus && (
                    <span className="text-4xl md:text-6xl absolute top-0  lg:-left-5 left-6 font-normal text-secondary-text ml-2">
                      +
                    </span>
                  )}
                  <span>
                    {startCount ? (
                      <CountUp
                        start={0}
                        end={Number(stat.number)}
                        duration={2}
                        separator=","
                      />
                    ) : (
                      0
                    )}
                  </span>
                </div>
              </div>
              <p className="text-secondary-text text-lg font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why_Us;