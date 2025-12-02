import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "/logos/parceiro-1.webp", alt: "Parceiro 1" },
  { src: "/logos/parceiro-2.webp", alt: "Parceiro 2" },
  { src: "/logos/parceiro-3.webp", alt: "Parceiro 3" },
  { src: "/logos/parceiro-4.webp", alt: "Parceiro 4" },
  { src: "/logos/parceiro-5.webp", alt: "Parceiro 5" },
  { src: "/logos/parceiro-6.webp", alt: "Parceiro 6" },
  { src: "/logos/parceiro-7.webp", alt: "Parceiro 7" },
  { src: "/logos/parceiro-8.webp", alt: "Parceiro 8" },
  { src: "/logos/parceiro-9.webp", alt: "Parceiro 9" },
  { src: "/logos/parceiro-10.webp", alt: "Parceiro 10" },
  { src: "/logos/parceiro-11.webp", alt: "Parceiro 11" },
  { src: "/logos/parceiro-12.webp", alt: "Parceiro 12" },
  { src: "/logos/parceiro-13.webp", alt: "Parceiro 13" },
  { src: "/logos/parceiro-14.webp", alt: "Parceiro 14" },
  { src: "/logos/parceiro-15.webp", alt: "Parceiro 15" },
  { src: "/logos/parceiro-16.webp", alt: "Parceiro 16" },
  { src: "/logos/parceiro-17.webp", alt: "Parceiro 17" },
];

const FloatingLogos = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Split logos into two rows
  const row1Logos = logos.slice(0, 9);
  const row2Logos = logos.slice(9);

  // Duplicate logos for infinite scroll effect
  const row1Extended = [...row1Logos, ...row1Logos, ...row1Logos];
  const row2Extended = [...row2Logos, ...row2Logos, ...row2Logos];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much the section is visible
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Only animate when section is in view
      if (sectionBottom > 0 && sectionTop < windowHeight) {
        const scrollProgress = (windowHeight - sectionTop) * 0.15;
        setScrollOffset(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[500px] bg-white overflow-hidden py-20"
    >
      {/* Row 1 - moves left on scroll */}
      <div 
        className="flex items-center gap-12 mb-8 will-change-transform"
        style={{ 
          transform: `translateX(${-scrollOffset - 200}px)`,
        }}
        aria-hidden="true"
      >
        {row1Extended.map((logo, index) => (
          <img
            key={`row1-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto flex-shrink-0 opacity-20 grayscale"
            loading="lazy"
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          nossos parceiros
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
          Juntos revolucionamos negócios e o mercado de crédito brasileiro
        </h2>
      </div>

      {/* Row 2 - moves right on scroll */}
      <div 
        className="flex items-center gap-12 mt-8 will-change-transform"
        style={{ 
          transform: `translateX(${scrollOffset - 400}px)`,
        }}
        aria-hidden="true"
      >
        {row2Extended.map((logo, index) => (
          <img
            key={`row2-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto flex-shrink-0 opacity-20 grayscale"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default FloatingLogos;
