import { motion, useAnimation } from "framer-motion";
import { Zap, FileText, Check } from "lucide-react";
import { useFlowAnimation } from "@/hooks/useFlowAnimation";
import upLogo from "@/assets/up-logo.svg";
import { useEffect } from "react";

const PaymentFlowDiagram = () => {
  const { 
    containerVariants, 
    cardVariants, 
    badgeVariants, 
    lineVariants,
    bottomBadgesContainerVariants,
  } = useFlowAnimation({ staggerDelay: 0.4, duration: 0.6 });

  const controls = useAnimation();

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      // garante reset antes do 1º ciclo (e evita ficar travado em "hidden")
      controls.set("hidden");
      await sleep(50);

      while (!cancelled) {
        try {
          await controls.start("visible");
          await sleep(5000); // pausa estática
          await controls.start("hidden");
          await sleep(500);
        } catch {
          // se alguma animação for interrompida, tenta retomar no próximo ciclo
          await sleep(250);
        }
      }
    };

    void run();

    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.div 
      className="flex flex-col items-center w-full max-w-md mx-auto py-6 sm:py-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Card Boleto */}
      <motion.div 
        className="bg-card border border-up-burgundy/20 rounded-lg sm:rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 w-full"
        variants={cardVariants}
      >
        <div className="bg-up-burgundy/10 p-2.5 sm:p-3 rounded-lg shrink-0">
          <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-up-burgundy" />
        </div>
        <div>
          <h3 className="font-semibold text-base sm:text-lg text-foreground">Boleto</h3>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Recebimento do boleto de aluguel e encargos
          </p>
        </div>
      </motion.div>

      {/* Linha vertical pontilhada */}
      <motion.svg 
        width="2" 
        height="24" 
        className="my-0"
        variants={lineVariants}
      >
        <motion.line 
          x1="1" 
          y1="0" 
          x2="1" 
          y2="24" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Badge Inquilino NÃO pagou - com ênfase */}
      <motion.div 
        className="bg-up-burgundy text-up-cream px-4 sm:px-5 py-2.5 sm:py-3 rounded-full flex items-center gap-2 font-bold text-sm sm:text-base border-2 border-up-gold/50"
        variants={badgeVariants}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
        <span>Inquilino NÃO pagou</span>
      </motion.div>

      {/* Linha vertical pontilhada */}
      <motion.svg 
        width="2" 
        height="24" 
        className="my-0"
        variants={lineVariants}
      >
        <motion.line 
          x1="1" 
          y1="0" 
          x2="1" 
          y2="24" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Card Imobiliária recebeu */}
      <motion.div 
        className="bg-card border border-success-border rounded-lg sm:rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 w-full"
        variants={cardVariants}
      >
        <div className="bg-success-soft p-2.5 sm:p-3 rounded-lg shrink-0 ring-1 ring-success-border">
          <Check className="w-6 h-6 sm:w-7 sm:h-7 text-success" strokeWidth={3} />
        </div>
        <div>
          <h3 className="font-bold text-sm sm:text-base text-success">Imobiliária recebeu o<br />pagamento EM DIA</h3>
        </div>
      </motion.div>

      {/* Linha vertical pontilhada */}
      <motion.svg 
        width="2" 
        height="24" 
        className="my-0"
        variants={lineVariants}
      >
        <motion.line 
          x1="1" 
          y1="0" 
          x2="1" 
          y2="24" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Card Proprietário recebeu */}
      <motion.div 
        className="bg-card border border-success-border rounded-lg sm:rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 w-full"
        variants={cardVariants}
      >
        <div className="bg-success-soft p-2.5 sm:p-3 rounded-lg shrink-0 ring-1 ring-success-border">
          <Check className="w-6 h-6 sm:w-7 sm:h-7 text-success" strokeWidth={3} />
        </div>
        <div>
          <h3 className="font-bold text-sm sm:text-base text-success">Proprietário recebeu o<br />pagamento EM DIA</h3>
        </div>
      </motion.div>

      {/* Linha vertical pontilhada */}
      <motion.svg 
        width="2" 
        height="24" 
        className="my-0"
        variants={lineVariants}
      >
        <motion.line 
          x1="1" 
          y1="0" 
          x2="1" 
          y2="24" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Card UP Estate */}
      <motion.div 
        className="bg-card border border-up-burgundy/20 rounded-lg sm:rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 w-full"
        variants={cardVariants}
      >
        <img src={upLogo} alt="UP Estate" className="w-12 h-12 sm:w-16 sm:h-16 shrink-0" />
        <div>
          <h3 className="font-bold text-base sm:text-lg text-up-burgundy">A UP Estate assume todo o resto</h3>
        </div>
      </motion.div>

      {/* SVG com linhas diagonais */}
      <motion.svg 
        width="100%" 
        height="36" 
        className="my-0 w-full max-w-[280px] sm:max-w-[300px]"
        viewBox="0 0 300 36"
        preserveAspectRatio="xMidYMid meet"
        variants={lineVariants}
      >
        {/* Linha central */}
        <motion.line 
          x1="150" 
          y1="0" 
          x2="150" 
          y2="36" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
        {/* Linha esquerda */}
        <motion.line 
          x1="150" 
          y1="0" 
          x2="50" 
          y2="36" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
        {/* Linha direita */}
        <motion.line 
          x1="150" 
          y1="0" 
          x2="250" 
          y2="36" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Badges inferiores */}
      <motion.div 
        className="flex flex-wrap justify-center sm:justify-between w-full px-1 sm:px-2 gap-2 sm:gap-3"
        variants={bottomBadgesContainerVariants}
      >
        {['Cobranças', 'Sinistros', 'Despejo'].map((label) => (
          <motion.div 
            key={label}
            className="bg-up-burgundy text-up-cream px-3 sm:px-4 py-2 rounded-full inline-flex items-center gap-2 font-medium text-[11px] sm:text-sm border border-up-gold/40 whitespace-nowrap"
            variants={badgeVariants}
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PaymentFlowDiagram;
