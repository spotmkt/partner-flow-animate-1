const StatsSection = () => {
  const stats = [
    { value: "+ de R$ 1 bilhão", label: "De solicitação de crédito" },
    { value: "+ de R$ 500 mi", label: "De crédito aprovado" },
    { value: "6 premiações nacionais", label: "por resultados em captações" },
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-omnia-light-teal overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9cb1e1150ff1ad87a7e71913e0bce388a3b691f6?width=570"
            alt="OMNIA Group"
            className="h-12 sm:h-16 mb-8"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-center mb-4">
            Somos reconhecidos no mercado nacional.
            <br className="hidden sm:block" />
            Maiores taxas de aprovações de crédito no segmento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-2 border-primary-foreground rounded-2xl p-6 sm:p-10 text-center"
            >
              <p className="text-2xl sm:text-4xl font-bold text-primary-foreground mb-4">
                {stat.value}
              </p>
              <p className="text-primary-foreground text-base sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
