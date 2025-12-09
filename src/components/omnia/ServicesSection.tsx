const ServicesSection = () => {
  const services = [
    {
      title: "Entendemos as suas necessidades",
      description: "Atendemos pessoas físicas e jurídicas",
      link: "Entre em contato",
    },
    {
      title: "Direcionamos sua proposta para os bancos ideais",
      description:
        "Até 50% do valor de venda do imóvel, parcelados em até 20 anos",
      link: "Simule agora",
    },
    {
      title: "Análise de crédito e imóvel por especialistas",
      description:
        "Não se preocupe com a burocracia. Liberação conforme estágio da obra",
      link: "Conheça a OMNIA",
    },
    {
      title: "Apresentamos as melhores condições",
      description: "Agilidade na aprovação e liberação do crédito",
      link: "Receba uma proposta",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-primary/30 rounded-xl p-6 sm:p-8 hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm sm:text-base mb-6">
                {service.description}
              </p>
              <a
                href="#contato"
                className="text-primary font-semibold text-sm underline hover:opacity-70 transition"
              >
                {service.link}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
