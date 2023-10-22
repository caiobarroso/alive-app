import { useState, useEffect } from "react";
import { getCurrentStockPrice } from "../services/requests"; // Importe a função da API aqui
import { Loader2 } from "lucide-react";
import { TrendUp } from "@phosphor-icons/react";

const ActualPriceCard = () => {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    getCurrentStockPrice()
      .then((data) => {
        setCurrentData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API", error);
      });
  }, []);

  if (!currentData) {
    return <Loader2 className="w-4 h-4 animate-spin" />;
  }

  return (
    <div
      data-testId="actual-price-card"
      className="flex flex-col bg-slate-50 shadow-lg p-6 rounded-lg gap-5 font-normal"
    >
      <div className="flex w-full items-center justify-center">
        <h2
          data-testId="price-title"
          className="text-center text-2xl font-medium text-[#12121A] border-b border-[#12121A] pb-2"
        >
          Preço atual ( VAL )
        </h2>
      </div>

      <div className="flex flex-row items-center gap-4">
        <TrendUp size={28} color="green" weight="fill" />
        <h2 data-testId="current-price" className="font-bold text-[22px]">
          ${currentData.lastPrice}
        </h2>
        <div
          data-testId="price-change"
          className="bg-[#121219] rounded-md text-white px-5 py-1 text-base"
        >
          + 2.86%
        </div>
      </div>
      <p
        data-testId="update-date"
        className="text-xs italic font-light text-[#282828]"
      >
        Atualizado em: {currentData.pricedAt}.
      </p>
    </div>
  );
};

export default ActualPriceCard;
