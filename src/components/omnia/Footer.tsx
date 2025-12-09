const Footer = () => {
  return (
    <footer className="bg-background pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7b7d95bc531240ba256752fc5512957c972f9170?width=320"
            alt="OMNIA Logo"
            className="h-10 sm:h-12 mb-8"
          />

          <div className="prose prose-sm max-w-none text-foreground/70 mb-12 space-y-6">
            <p className="text-xs sm:text-sm leading-relaxed">
              A <strong>OMNIA GROUP</strong> é uma plataforma multibanco que
              atua como correspondente Bancário para facilitar o processo de
              contratação de crédito. Seguimos as diretrizes da Resolução nº
              3.954, de 24 de fevereiro de 2011 e Resolução CMN Nº 4.935, DE
              29 DE JULHO DE 2021.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed">
              Somos correspondentes bancários das seguintes instituições:
              BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S/A (CNPJ sob o n°
              00.556.603/0001-74), BANCO DE DESENVOLVIMENTO DE MINAS GERAIS
              S.A. – BDMG (CNPJ sob nº 38.486.817/0001-94), CASHME SOLUÇÕES
              FINANCEIRA LTDA (CNPJ/ME sob o n° 34.175.529/0001-68), COMPANHIA
              HIPOTECÁRIA PIRATINI – CHP ("CNPJ/MF" sob o n°
              18.282.093/0001-50) CREDITAS SOCIEDADE DE CREDITO DIRETO S.A.
              (CNPJ/ME sob o n° 32.997.490/0001-39), BANCO DAYCOVAL S.A.
              (CNPJ/ME sob o n° 62.232.889/0001-90), BANCO INTERMEDIUM S.A.
              (CNPJ sob o n° 00.416.968/0001-01), BANCO PAULISTA S.A. (CNPJ/ME
              sob o n° 61.820.817/0001-09), GALLERIA SOCIEDADE DE CREDITO
              DIRETO S.A. (CNPJ sob o n° sob o n° 51.604.356/0001-75), PONTTE
              SOLUCOES FINANCEIRAS LTDA (CNPJ/MF 33.296.599/0001-01), BANCO
              SEMEAR S.A (CNPJ sob o n° 00.795.423/0001-45), WIMO FUNDO DE
              INVESTIMENTOS EM DIREITOS CREDITÓRIOS (CNPJ sob o n°
              32.969.565/0001-78) e WIZ SOLUÇÕES E CORRETAGEM DE SEGUROS S.A.
              (CNPJ sob o n° 42.278.473/0019-242).
            </p>

            <p className="text-xs sm:text-sm leading-relaxed">
              OMNIA GROUP SOLUCOES FINANCEIRAS LTDA, CNPJ 35.606.860/0001-58,
              com sede na Rua Pernambuco, 353, sala 1109, Edifício Goeldi,
              Bairro Funcionários, Belo Horizonte (MG), CEP 30.130-151.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-end mb-8 pb-8 border-t border-border pt-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/39d56505aa34de88bb430dd9a0c699a1eb5f7a1f?width=254"
            alt="Certification 1"
            className="h-20 w-20 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e4e423e8954778e401c48247558c92bb306efe84?width=256"
            alt="Certification 2"
            className="h-20 w-20 object-contain"
          />
          <div className="flex-1" />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/75d8cc2af60a2a7cf73e5764af05917a854f02d0?width=437"
            alt="Banco Central"
            className="h-12 sm:h-16 object-contain"
          />
        </div>

        <div className="text-center text-xs text-muted-foreground pt-4">
          <p>© 2024 OMNIA GROUP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
