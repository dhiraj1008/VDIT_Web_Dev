import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/mock";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(
    () => setCurrent((p) => (p + 1) % heroSlides.length),
    []
  );
  const goPrev = () =>
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 6000);
    return () => clearInterval(id);
  }, [paused, goNext]);

  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[78vh] overflow-hidden bg-[#1a1a1a]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <div
                key={current}
                className="max-w-2xl bg-[#2a1a1f]/70 backdrop-blur-sm p-6 md:p-8 fade-in-up"
              >
                <div className="text-surface/90 font-sans-ui text-xs md:text-sm tracking-[0.2em] mb-2">
                  {slide.cta}
                </div>
                <h1
                  className="text-surface text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {slide.title}
                </h1>
                <p className="text-surface/85 mt-3 text-base md:text-lg italic">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute right-20 md:right-24 bottom-6 z-20 bg-surface/90 hover:bg-surface text-brand rounded-full p-2.5 shadow-md transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-6 bottom-6 z-20 bg-surface/90 hover:bg-surface text-brand rounded-full p-2.5 shadow-md transition"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute left-6 lg:left-10 bottom-6 z-20 flex gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "w-8 bg-surface" : "w-2 bg-surface/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
