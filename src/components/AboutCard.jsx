import { BarChart3 } from "lucide-react";

const AboutCard = () => {
  return (
    <div
      data-testid="about-card"
      className="flex flex-col bg-slate-50 shadow-lg p-6 rounded-lg gap-5 font-normal min-w-[360px]"
    >
      <div
        data-testid="about-card-title"
        className="flex w-full items-center justify-center"
      >
        <h2 className="text-center text-2xl font-medium text-[#12121A] border-b border-[#12121A] pb-2">
          Sobre
        </h2>
      </div>

      <div data-testid="company-info" className="flex flex-row justify-between">
        <h2 className="text-[16px] text-[#12121A] font-semibold">VAL</h2>
        <BarChart3 size={22} color="#4D6CFA" />
      </div>
      <div
        data-testid="info-details"
        className="bg-[#E9E9E9] rounded-md text-base font-normal gap-1 px-4 py-2"
      >
        <div
          data-testid="company-name"
          className="flex flex-row justify-between"
        >
          <p>Nome</p>
          <p>Valaris Limited (VAL)</p>
        </div>
        <div
          data-testid="company-sector"
          className="flex flex-row justify-between"
        >
          <p>Setor</p>
          <p>Energia</p>
        </div>
        <div
          data-testid="company-industry"
          className="flex flex-row justify-between"
        >
          <p>Indústria</p>
          <p>Serviços de Petróleo e Gás</p>
        </div>
        <div
          data-testid="company-market-cap"
          className="flex flex-row justify-between"
        >
          <p>Market Cap</p>
          <p>5.122B</p>
        </div>
      </div>

      <div data-testid="data-source" className="mt-4">
        <p className="text-sm italic font-light text-[#282828] mt-2">
          Os dados atualizados foram obtidos do site finance.yahoo.com e da API
          da Alpha Vantage, garantindo precisão e atualização de todo esse
          dashboard.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
