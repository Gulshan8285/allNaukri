"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface Slide {
  image: string;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  alt: string;
}

const slides: Slide[] = [
  {
    image: "/images/banner-ground-staff.jpg",
    badge: "✈️ AIRPORT RECRUITMENT DRIVE 2026",
    title: "Airport Ground Staff &",
    highlight: "Customer Service Careers",
    subtitle: "Lifetime Job Security • Salary ₹35,000 - ₹35,800/Month • 100% Free Application Process • Freshers & Experienced Welcome",
    ctaText: "Apply Online (Free)",
    ctaLink: "/apply",
    alt: "Professional Indian airport ground staff team in international terminal"
  },
  {
    image: "/images/banner-ramp-crew.jpg",
    badge: "✈️ IMMEDIATE DIRECT JOINING",
    title: "Airport Ramp Operations &",
    highlight: "Baggage Handling Posts",
    subtitle: "Permanent Employment • Tarmac & Cargo Duties • Fixed Working Hours + Overtime + Duty Meals & PF / ESI Coverage",
    ctaText: "View Ramp Openings",
    ctaLink: "/sarkari-naukri",
    alt: "Aviation ramp crew and tarmac operations team standing by aircraft"
  },
  {
    image: "/images/banner-ticketing-desk.jpg",
    badge: "✈️ VERIFIED AIRPORT OPENINGS",
    title: "Airline Ticketing & Boarding",
    highlight: "Pass Counter Executive",
    subtitle: "Terminal 1, 2 & 3 Vacancies Across Major Indian Airports • Free Placement • Direct HR Verification: 8929103286",
    ctaText: "Call HR Now",
    ctaLink: "tel:8929103286",
    alt: "Friendly airport customer executive at airline check-in counter"
  }
];

export function AirportBannerSlider({ onOpenApply }: { onOpenApply?: () => void }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  return (
    <div
      className="heroSliderWrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Airport Careers Highlights"
    >
      <div className="sliderTrack">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.image}
              className={`slideItem ${isActive ? "active" : ""}`}
              aria-hidden={!isActive}
            >
              <div className="slideImageWrapper">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="slideImg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                <div className="slideOverlay" />
              </div>

              <div className="slideContent container">
                <span className="slideBadge">
                  <Sparkles size={14} />
                  {slide.badge}
                </span>

                <h1 className="slideTitle">
                  {slide.title} <span className="highlightText">{slide.highlight}</span>
                </h1>

                <p className="slideSubtitle">{slide.subtitle}</p>

                <div className="slideFeaturesList">
                  <div className="slideFeatureItem">
                    <ShieldCheck size={16} />
                    <span>Lifetime Job Security</span>
                  </div>
                  <div className="slideFeatureItem">
                    <span>💰</span>
                    <span>Salary ₹35,000 - ₹35,800/mo</span>
                  </div>
                  <div className="slideFeatureItem">
                    <span>🆓</span>
                    <span>Zero Registration Fee</span>
                  </div>
                </div>

                <div className="slideActions">
                  {onOpenApply ? (
                    <button
                      type="button"
                      onClick={onOpenApply}
                      className="btnPrimary btnGlow"
                      id="hero-apply-btn"
                    >
                      <span>Apply Online Now</span>
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <Link href="/apply" className="btnPrimary btnGlow" id="hero-apply-btn">
                      <span>Apply Online Now</span>
                      <ArrowRight size={18} />
                    </Link>
                  )}

                  <a
                    href="tel:8929103286"
                    className="btnSecondary"
                    id="hero-call-btn"
                    title="Call HR Direct Helpline"
                  >
                    <Phone size={17} />
                    <span>Call HR: 8929103286</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        className="sliderArrow prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        className="sliderArrow next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="sliderDots" role="tablist">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`sliderDot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === current}
          />
        ))}
      </div>
    </div>
  );
}
