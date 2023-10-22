import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getPriceComparison } from "../services/requests";
import { Loader2 } from "lucide-react"; // Importe a função da API aqui

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const CompareChart = () => {
  const [comparisonData, setComparisonData] = useState(null);

  useEffect(() => {
    getPriceComparison()
      .then((data) => {
        setComparisonData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API", error);
      });
  }, []);

  if (!comparisonData) {
    return <Loader2 className="w-4 h-4 animate-spin" />;
  }

  const labels = [comparisonData.lastPrices[0].pricedAt];
  const barColors = ["#800000", "#000080", "#121219"];

  const datasets = comparisonData.lastPrices.map((item, i) => ({
    label: item.name,
    data: [item.lastPrice],
    backgroundColor: barColors[i],
  }));

  const data = {
    labels,
    datasets,
  };

  return <Bar options={options} data={data} />;
};

export default CompareChart;
