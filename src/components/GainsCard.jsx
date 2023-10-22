import { Receipt } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getEarningsProjection } from "../services/requests";
import { Loader2 } from "lucide-react";

const GainsCard = () => {
  const [currentData, setCurrentData] = useState(null);
  useEffect(() => {
    getEarningsProjection()
      .then((data) => {
        setCurrentData(data);
        console.log(currentData, "pedro");
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
      className="flex flex-col bg-slate-50 shadow-lg p-6 rounded-lg gap-5 font-normal min-w-[360px]"
      data-testid="gains-card"
    >
      <div className="flex w-full items-center justify-center">
        <h2
          className="text-center text-2xl font-medium text-[#12121A] border-b border-[#12121A] pb-2"
          data-testid="gains-card-title"
        >
          Projeção de Ganhos
        </h2>
      </div>

      <div className="flex flex-row justify-between">
        <h2
          className="text-[16px] text-[#12121A] font-semibold"
          data-testid="stock-name"
        >
          {currentData.name}
        </h2>
        <Receipt size={22} color="#4D6CFA" />
      </div>

      <div className="bg-[#E9E9E9] rounded-md text-base font-normal gap-1 px-4 py-2">
        <div className="flex flex-row justify-between">
          <p data-testid="current-price-title">Preço atual</p>
          <p data-testid="current-price-value">$ {currentData.lastPrice}</p>
        </div>
      </div>

      <div className="flex flex-col bg-[#E9E9E9] rounded-md text-base font-normal gap-1 px-4 py-2">
        <div className="flex flex-row justify-between">
          <p data-testid="priced-at-title">Preço na Data de Compra</p>
          <p data-testid="priced-at-value">$ {currentData.priceAtDate}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p data-testid="quantity-title">Quantidade Comprada</p>
          <p data-testid="quantity-value">{currentData.purchasedAt}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p data-testid="variation-title">Variação desde a Compra</p>
          <p data-testid="variation-value">
            {currentData.capitalGains.toFixed(3)} %
          </p>
        </div>
      </div>

      <p
        className="text-xs italic font-light text-[#282828]"
        data-testid="legend"
      >
        Variação de preço em relação à data de compra.
      </p>
    </div>
  );
  // return <div></div>;
};

export default GainsCard;
