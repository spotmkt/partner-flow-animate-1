import { motion, useAnimation } from "framer-motion";
import { Zap, FileText } from "lucide-react";
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
    const runAnimation = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await controls.start("hidden");
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };
    runAnimation();
  }, [controls]);

  return (
    <motion.div 
      className="flex flex-col items-center w-full max-w-md mx-auto py-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Card Boleto */}
      <motion.div 
        className="bg-card border border-up-burgundy/20 rounded-xl p-5 flex items-start gap-4 w-full shadow-sm"
        variants={cardVariants}
      >
        <div className="bg-up-burgundy/10 p-3 rounded-lg shrink-0">
          <FileText className="w-8 h-8 text-up-burgundy" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground">Boleto</h3>
          <p className="text-muted-foreground text-sm">
            Recebimento do boleto de aluguel e encargos
          </p>
        </div>
      </motion.div>

      {/* Linha vertical pontilhada */}
      <motion.svg 
        width="2" 
        height="40" 
        className="my-0"
        variants={lineVariants}
      >
        <motion.line 
          x1="1" 
          y1="0" 
          x2="1" 
          y2="40" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Badge Inquilino NÃO pagou - com ênfase */}
      <motion.div 
        className="bg-up-burgundy text-up-cream px-5 py-3 rounded-full flex items-center gap-2 font-bold text-base shadow-lg border-2 border-up-gold/50"
        variants={badgeVariants}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 4px 14px rgba(128, 45, 64, 0.4)",
            "0 6px 20px rgba(128, 45, 64, 0.7)",
            "0 4px 14px rgba(128, 45, 64, 0.4)",
          ],
        }}
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
          <Zap className="w-5 h-5" />
        </motion.div>
        <span>Inquilino NÃO pagou</span>
      </motion.div>

      {/* Linha vertical pontilhada */}
      <motion.svg 
        width="2" 
        height="40" 
        className="my-0"
        variants={lineVariants}
      >
        <motion.line 
          x1="1" 
          y1="0" 
          x2="1" 
          y2="40" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Card Pagamento em dia */}
      <motion.div 
        className="bg-card border border-up-burgundy/20 rounded-xl p-5 flex items-center gap-4 w-full shadow-sm"
        variants={cardVariants}
      >
        <img src={upLogo} alt="UP Estate" className="w-16 h-16 shrink-0" />
        <div>
          <h3 className="font-bold text-lg text-up-burgundy">Pagamento em dia</h3>
          <p className="text-muted-foreground text-sm">
            A UP Estate assume, garante o pagamento para a imobiliária e para o proprietário. Além de cuidar de todo o resto
          </p>
        </div>
      </motion.div>

      {/* SVG com linhas diagonais */}
      <motion.svg 
        width="300" 
        height="50" 
        className="my-0"
        viewBox="0 0 300 50"
        variants={lineVariants}
      >
        {/* Linha central */}
        <motion.line 
          x1="150" 
          y1="0" 
          x2="150" 
          y2="50" 
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
          y2="50" 
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
          y2="50" 
          stroke="hsl(var(--up-burgundy))" 
          strokeWidth="2" 
          strokeDasharray="4 4"
          variants={lineVariants}
        />
      </motion.svg>

      {/* Badges inferiores */}
      <motion.div 
        className="flex justify-between w-full px-2 gap-3"
        variants={bottomBadgesContainerVariants}
      >
        {["Cobranças", "Sinistros", "Despejo"].map((label) => (
          <motion.div 
            key={label}
            className="bg-up-burgundy text-up-cream px-4 py-2 rounded-full flex items-center gap-2 font-medium text-sm shadow-md"
            variants={badgeVariants}
          >
            <Zap className="w-4 h-4" />
            <span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PaymentFlowDiagram;
