import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getHistoricStockPrice } from "../services/requests";
import { Loader2 } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoricChart = () => {
  const [historicData, setHistoricData] = useState(null);

  useEffect(() => {
    getHistoricStockPrice()
      .then((data) => {
        setHistoricData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API", error);
      });
  }, []);

  if (!historicData) {
    return <Loader2 className="w-4 h-4 animate-spin" />;
  }

  const labels = historicData.prices.map((price) => price.pricedAt);
  const dataY = historicData.prices.map((price) => price.high);

  const datasets = [
    {
      label: "Histórico de preços por data",
      data: dataY,
      borderColor: "#121219",
      backgroundColor: "#121219",
    },
  ];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const price = historicData.prices[context.dataIndex];
            return [
              `Data: ${labels[context.dataIndex]}`,
              `Abertura: ${price.opening}`,
              `Mínima: ${price.low}`,
              `Máxima: ${price.high}`,
              `Fechamento: ${price.closing}`,
              `Volume: ${price.volume}`,
            ];
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default HistoricChart;
