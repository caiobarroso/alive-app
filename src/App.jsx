import { User2 } from "lucide-react";
import Card from "./components/Card";
import { useState } from "react";
import Chart from "./components/Chart";

function App() {
  const [stockPrice, setStockPrice] = useState({
    name: "VAL",
    lastPrice: 62.83,
    pricedAt: "2022-11-03",
  });

  const [historyPrice, setHistoryPrice] = useState({
    name: "VAL",
    prices: [
      {
        opening: 63.19,
        low: 61,
        high: 64.35,
        closing: 61.63,
        pricedAt: "2022-11-02",
        volume: 1011467,
      },
      {
        opening: 67.89,
        low: 62.631,
        high: 68.87,
        closing: 62.92,
        pricedAt: "2022-11-01",
        volume: 1375669,
      },
    ],
  });

  const [series, setSeries] = useState();

  const categories = historyPrice.prices.map((price) => price.pricedAt);
  const seriesData = historyPrice.prices.map((price) => ({
    x: price.pricedAt,
    y: [price.opening, price.high, price.low, price.closing],
  }));

  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar */}
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4 w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline">
            <span className="text-3xl pl-2">Hiring Frontend Challenge</span>
          </a>
        </div>
      </nav>
      {/* main dashboard */}
      <main className="flex-1 flex-col p-16 grainy">
        <h2 className="text-4xl font-semibold">Seja bem vindo, user!</h2>
        <div className="flex flex-row flex-wrap mt-12 gap-12">
          {/* cards */}
          <Card title="Preço Atual" data={stockPrice} />
        </div>
        <div>
          <Chart />
        </div>
      </main>
    </div>
  );
}

export default App;
