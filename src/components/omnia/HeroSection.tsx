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
    <section className="relative w-full min-h-screen bg-omnia-light-teal overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
          alt="Luxury building"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-end py-20">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4">
          <div className="bg-card rounded-2xl border border-primary/20 shadow-xl p-8 sm:p-10 w-full max-w-md">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3160b332cf8437a1d7fb06796a5245c95e51e731?width=408"
              alt="OMNIA Logo"
              className="h-12 mb-8"
            />

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 leading-tight">
              Financiamento exclusivo para término de obra em condomínio
            </h2>

            <div className="mb-8">
              <p className="text-sm text-primary mb-4 font-semibold">
                Pré-requisitos:
              </p>
              <ul className="text-sm text-primary space-y-1">
                <li>• Imóvel avaliado em +1MM</li>
                <li>• Renda superior a R$ 25 mil</li>
              </ul>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-semibold text-primary mb-2 block">
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
                  className="w-full mt-4 accent-primary"
                />
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition">
              Solicitar Atendimento Premium
            </button>

            <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
              <p className="font-semibold mb-2">
                Obtenha até{" "}
                <span className="font-bold">
                  50% do valor de mercado do imóvel
                </span>
              </p>
              <p className="mb-2">
                Taxa a partir de{" "}
                <span className="font-bold">1,19% a.m + IPCA</span>
              </p>
              <p>
                Parcelamento em <span className="font-bold">até 20 anos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
