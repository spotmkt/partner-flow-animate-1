import { useEffect, useRef } from "react";

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

interface FloatingLogo {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  src: string;
  alt: string;
}

const FloatingLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<FloatingLogo[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Initialize floating logos with random positions
    logosRef.current = logos.map((logo, index) => ({
      id: index,
      x: Math.random() * (rect.width - 120),
      y: Math.random() * (rect.height - 60),
      size: 80 + Math.random() * 60,
      opacity: 0.15 + Math.random() * 0.2,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      src: logo.src,
      alt: logo.alt,
    }));

    const animate = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      logosRef.current = logosRef.current.map((logo) => {
        let newX = logo.x + logo.speedX;
        let newY = logo.y + logo.speedY;
        let newSpeedX = logo.speedX;
        let newSpeedY = logo.speedY;

        // Bounce off edges
        if (newX <= 0 || newX >= rect.width - logo.size) {
          newSpeedX = -newSpeedX;
          newX = Math.max(0, Math.min(newX, rect.width - logo.size));
        }
        if (newY <= 0 || newY >= rect.height - logo.size) {
          newSpeedY = -newSpeedY;
          newY = Math.max(0, Math.min(newY, rect.height - logo.size));
        }

        return {
          ...logo,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
        };
      });

      // Update DOM
      const logoElements = container.querySelectorAll<HTMLImageElement>(".floating-logo");
      logoElements.forEach((el, index) => {
        const logo = logosRef.current[index];
        if (logo) {
          el.style.transform = `translate(${logo.x}px, ${logo.y}px)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-[500px] bg-white overflow-hidden py-20">
      {/* Floating logos container */}
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="floating-logo absolute will-change-transform transition-opacity duration-1000"
            style={{
              width: `${80 + Math.random() * 60}px`,
              height: "auto",
              opacity: 0.15 + Math.random() * 0.2,
              transform: `translate(${Math.random() * 100}%, ${Math.random() * 100}%)`,
            }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          nossos parceiros
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
          Juntos revolucionamos negócios e o mercado de crédito brasileiro
        </h2>
      </div>
    </section>
  );
};

export default FloatingLogos;
