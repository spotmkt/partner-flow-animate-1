import { useState } from "react";
import { toast } from "sonner";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: 500000,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      amount: parseInt(e.target.value) || 0,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.");
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contato" className="relative py-16 sm:py-24 bg-omnia-light-teal overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Entre em contato agora mesmo
          </h2>
          <p className="text-primary-foreground text-base sm:text-lg font-semibold">
            Preencha os dados para ter acesso a um atendimento exclusivo
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="bg-card rounded-2xl p-8 sm:p-10 shadow-2xl"
        >
          <div className="mb-6">
            <label className="block text-foreground text-sm font-semibold mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleFormChange}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-foreground text-sm font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Seu melhor e-mail"
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-foreground text-sm font-semibold mb-2">
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-foreground font-semibold text-center mb-4">
              Quanto você precisa para concluir a obra?
            </label>
            <div className="border-b-2 border-border pb-2 text-center">
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
              onChange={handleAmountChange}
              className="w-full mt-4 accent-secondary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition"
          >
            Iniciar simulação agora
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
