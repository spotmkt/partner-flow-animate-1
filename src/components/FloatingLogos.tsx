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

  // Split logos into 4 rows
  const row1Logos = logos.slice(0, 5);
  const row2Logos = logos.slice(5, 9);
  const row3Logos = logos.slice(9, 13);
  const row4Logos = logos.slice(13);

  // Duplicate logos for infinite scroll effect
  const row1Extended = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
  const row2Extended = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];
  const row3Extended = [...row3Logos, ...row3Logos, ...row3Logos, ...row3Logos];
  const row4Extended = [...row4Logos, ...row4Logos, ...row4Logos, ...row4Logos];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const scrollProgress = (windowHeight - rect.top) * 0.12;
        setScrollOffset(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LogoRow = ({ 
    logos, 
    direction, 
    offset 
  }: { 
    logos: typeof row1Extended; 
    direction: "left" | "right"; 
    offset: number;
  }) => (
    <div 
      className="flex items-center gap-12 md:gap-16 will-change-transform py-3"
      style={{ 
        transform: `translateX(${direction === "left" ? -offset - 200 : offset - 400}px)`,
        transition: 'transform 0.1s ease-out',
      }}
      aria-hidden="true"
    >
      {logos.map((logo, index) => (
        <img
          key={`${logo.alt}-${index}`}
          src={logo.src}
          alt={logo.alt}
          className="h-10 md:h-14 w-auto flex-shrink-0 opacity-20 grayscale"
          loading="lazy"
        />
      ))}
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden py-12"
    >
      {/* Logo rows container */}
      <div className="relative">
        <LogoRow logos={row1Extended} direction="left" offset={scrollOffset} />
        <LogoRow logos={row2Extended} direction="right" offset={scrollOffset} />
        <LogoRow logos={row3Extended} direction="left" offset={scrollOffset} />
        <LogoRow logos={row4Extended} direction="right" offset={scrollOffset} />
      </div>

      {/* Content overlay with white transparent gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            background: "radial-gradient(ellipse 70% 60% at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 70%)"
          }}
        >
          <div className="container mx-auto px-4 text-center pointer-events-auto">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              nossos parceiros
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              Juntos revolucionamos negócios e o mercado de crédito brasileiro
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingLogos;
