import ActualPriceCard from "./components/ActualPriceCard";
import HistoricChart from "./components/HistoricChart";
import CompareChart from "./components/CompareChart";
import GainsCard from "./components/GainsCard";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar */}
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4 w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline">
            <span className="text-3xl pl-2 italic">Alive App.</span>
          </a>
        </div>
      </nav>
      {/* main dashboard */}
      <main className="flex-1 flex-col p-10 grainy">
        <h2 className="text-4xl font-semibold mb-12">Dashboard</h2>
        <div className="flex flex-row md:flex-row gap-12">
          <div className="flex flex-col gap-8">
            <div className="max-w-md" data-testid="about-card">
              <AboutCard />
            </div>
            <div className="max-w-md" data-testid="actual-price-card">
              <ActualPriceCard />
            </div>
            <div className="max-w-md" data-testid="gains-card">
              <GainsCard />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col" data-testid="historic-chart">
              <h2 className="font-medium text-lg underline mb-3">
                Preço histórico (VAL):
              </h2>
              <HistoricChart />
            </div>
            <div className="flex flex-col" data-testid="historic-chart">
              <h2 className="font-medium text-lg underline mb-3">
                Preço atual em comparação a outras ações:
              </h2>
              <CompareChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
