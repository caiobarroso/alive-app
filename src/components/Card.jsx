import { format, parseISO } from "date-fns";

const Card = ({ title, data }) => {
  const dataObj = parseISO(data.pricedAt);
  const brazilianDate = format(dataObj, "dd/MM/yyyy");
  return (
    <div className="flex flex-col bg-slate-50 shadow-lg py-8  px-16 items-center justify-center rounded-3xl gap-4">
      <h2 className="text-lg font-semibold text-gray-400">
        {title} ( {data.name} )
      </h2>
      <h1 className="text-4xl font-bold">$ {data.lastPrice}</h1>
      <div className="flex flex-col bg-[#E7EDFF] px-3 py-2 rounded-lg">
        <h2 className="text-sm">+ 2140 (2.86%)</h2>
      </div>
      <p className="text-xs text-center text-gray-400 italic">
        Atualizado em: {brazilianDate}
      </p>
    </div>
  );
};

export default Card;
