const FeaturesSection = () => {
  const creditTypes = [
    { height: "h-32 sm:h-40 lg:h-52", label: "Rotativo do Cartão" },
    { height: "h-40 sm:h-48 lg:h-64", label: "Cheque especial" },
    { height: "h-52 sm:h-60 lg:h-80", label: "Empréstimo Pessoal" },
    { height: "h-16 sm:h-20 lg:h-24", label: "Financiamento para término de obra" },
  ];

  return (
    <section className="relative w-full py-20 sm:py-32 bg-omnia-light-teal overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Crédito exclusivo e de baixo custo
            <br />
            para obras de alto padrão
          </h2>
          <p className="text-xl sm:text-2xl text-primary-foreground font-light">
            Sem filas, sem burocracia, sem perda de tempo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-16">
          {creditTypes.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`${item.height} w-full bg-primary opacity-40 rounded-t-2xl`}
              />
              <p className="text-primary-foreground font-semibold text-center mt-4 text-sm sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <svg
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto text-secondary"
          viewBox="0 0 118 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6444 39.3333C30.2615 43.4742 29.5 48.0005 29.5 52.7425C29.5 72.4908 42.7076 88.5 59 88.5C75.2924 88.5 88.5 72.4908 88.5 52.7425C88.5 48.0005 87.7384 43.4742 86.3558 39.3333"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M71.2917 103.25C71.2917 103.25 67.9385 88.5 59 88.5C50.0615 88.5 46.7083 103.25 46.7083 103.25"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M91.0572 25.7125C92.4924 33.907 86.0432 39.3333 86.0432 39.3333C86.0432 39.3333 78.1593 36.5653 76.7241 28.3708C75.289 20.1763 81.7382 14.75 81.7382 14.75C81.7382 14.75 89.622 17.5181 91.0572 25.7125Z"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54.0833 44.25L59 41.7917V66.375M63.9167 66.375H54.0833"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M103.713 59.6849C97.413 65.9133 88.8826 63.4265 88.8826 63.4265C88.8826 63.4265 86.6519 54.7107 92.9521 48.482C99.2518 42.2532 107.783 44.7403 107.783 44.7403C107.783 44.7403 110.013 53.456 103.713 59.6849Z"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M89.648 89.4322C82.273 86.6022 81.125 78.6667 81.125 78.6667C81.125 78.6667 87.352 73.5612 94.727 76.3913C102.102 79.2213 103.25 87.1568 103.25 87.1568C103.25 87.1568 97.023 92.2623 89.648 89.4322Z"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.352 89.4317C35.727 86.6017 36.875 78.6662 36.875 78.6662C36.875 78.6662 30.648 73.5607 23.273 76.3908C15.898 79.2208 14.75 87.1563 14.75 87.1563C14.75 87.1563 20.977 92.2618 28.352 89.4317Z"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2861 59.6849C20.5861 65.9133 29.1167 63.4265 29.1167 63.4265C29.1167 63.4265 31.3472 54.7107 25.0472 48.482C18.7473 42.2532 10.2167 44.7403 10.2167 44.7403C10.2167 44.7403 7.9861 53.456 14.2861 59.6849Z"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.9427 25.7125C25.5076 33.907 31.9568 39.3333 31.9568 39.3333C31.9568 39.3333 39.841 36.5653 41.2761 28.3708C42.7111 20.1763 36.262 14.75 36.262 14.75C36.262 14.75 28.3778 17.5181 26.9427 25.7125Z"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;
