import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    amount: 500000,
  });

  const handleAmountChange = (value: number) => {
    setFormData((prev) => ({
      ...prev,
      amount: value,
    }));
  };

  return (
    <section className="relative w-full min-h-screen bg-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="Luxury building under construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10" />
      </div>

      {/* Logo positioned top right */}
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-20">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3160b332cf8437a1d7fb06796a5245c95e51e731?width=408"
          alt="OMNIA Logo"
          className="h-10 lg:h-14"
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-end py-20">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4">
          <div className="bg-card rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 leading-tight">
              Financiamento exclusivo para término de obra em condomínio
            </h2>

            <div className="mb-6">
              <p className="text-sm text-primary mb-3 font-semibold">
                Pré-requisitos:
              </p>
              <ul className="text-sm text-primary space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Imóvel avaliado em +1MM
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Renda superior a R$ 25 mil
                </li>
              </ul>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-semibold text-primary mb-3 block">
                  Quanto você precisa para concluir a obra?
                </label>
                <div className="border-b border-border pb-2">
                  <p className="text-3xl font-light text-muted-foreground">
                    R${" "}
                    {formData.amount.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="50000"
                  value={formData.amount}
                  onChange={(e) => handleAmountChange(parseInt(e.target.value))}
                  className="w-full mt-4 accent-primary h-2 cursor-pointer"
                />
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:opacity-90 transition text-base">
              Solicitar Atendimento Premium
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Benefits Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-primary-foreground text-sm">
            <p>
              Obtenha até{" "}
              <span className="font-bold">50% do valor de mercado do imóvel</span>
            </p>
            <p>
              Taxa a partir de{" "}
              <span className="font-bold">1,19% a.m + IPCA</span>
            </p>
            <p>
              Parcelamento em <span className="font-bold">até 20 anos</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
