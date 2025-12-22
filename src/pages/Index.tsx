import FloatingLogos from "@/components/FloatingLogos";
import ClientBenefitsCards from "@/components/ClientBenefitsCards";
import PaymentFlowDiagram from "@/components/PaymentFlowDiagram";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Como funciona</h2>
        <PaymentFlowDiagram />
      </section>
      <div className="h-[30vh]" />
      <FloatingLogos />
      <ClientBenefitsCards />
      <div className="h-[50vh]" />
    </main>
  );
};

export default Index;
