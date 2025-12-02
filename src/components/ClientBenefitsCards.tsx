import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"
import { TrendingUp, Building2, Wallet, LineChart } from "lucide-react"

const CLIENT_BENEFITS = [
  {
    id: "benefit-1",
    icon: Building2,
    title: "Construtora MRV",
    highlight: "R$ 2,5M liberados",
    description:
      "Com o financiamento de término de obra, a construtora conseguiu finalizar 3 empreendimentos simultaneamente sem comprometer o fluxo de caixa. O capital próprio foi direcionado para aquisição de novos terrenos, aumentando em 40% o portfólio de projetos.",
  },
  {
    id: "benefit-2",
    icon: Wallet,
    title: "Incorporadora Horizonte",
    highlight: "Capital preservado",
    description:
      "Ao utilizar o crédito para conclusão de 2 torres residenciais, a incorporadora manteve R$ 4M em reserva estratégica. Esse montante foi investido em um novo loteamento que gerou retorno de 35% em 18 meses.",
  },
  {
    id: "benefit-3",
    icon: TrendingUp,
    title: "Grupo Constrular",
    highlight: "ROI de 28%",
    description:
      "Em vez de imobilizar recursos próprios na finalização de um shopping center, o grupo optou pelo financiamento e aplicou o capital em fundos imobiliários e CDBs. O rendimento superou o custo do crédito, gerando lucro adicional.",
  },
  {
    id: "benefit-4",
    icon: LineChart,
    title: "Empreiteira Costa Sul",
    highlight: "Expansão acelerada",
    description:
      "O financiamento permitiu concluir obras atrasadas enquanto o capital próprio foi utilizado para adquirir máquinas e equipamentos. A empresa dobrou sua capacidade operacional e fechou 5 novos contratos no mesmo ano.",
  },
]

const ClientBenefitsCards = () => {
  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="left-0 top-0 md:sticky md:h-screen md:py-20">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Casos de Sucesso
            </span>
            <h2 className="mb-6 mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Como nossos clientes{" "}
              <span className="text-primary">alocam capital</span> de forma
              estratégica
            </h2>
            <p className="max-w-prose text-muted-foreground">
              Descubra como empresas do setor imobiliário utilizam o crédito de
              financiamento de término de obra para liberar capital e investir
              em oportunidades de alto retorno.
            </p>
          </div>

          <ContainerScroll className="min-h-[350vh] space-y-6 py-12 md:py-20">
            {CLIENT_BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <CardSticky
                  key={benefit.id}
                  index={index + 2}
                  incrementY={12}
                  className="rounded-2xl border border-border bg-card p-6 shadow-lg backdrop-blur-md md:p-8"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                        {benefit.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {benefit.highlight}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardSticky>
              )
            })}
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}

export default ClientBenefitsCards
