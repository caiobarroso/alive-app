import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getCurrentStockPrice = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stock/VAL/quote`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getHistoricStockPrice = async () => {
  return axios
    .get(
      `${BASE_URL}/stocks/VAL/history?from=Nov%2002%202022%20GMT-0300&to=Nov%2009%202022%20GMT-0300`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(
        "Ocorreu um erro ao buscar o histórico de preços das ações:",
        error
      );
      throw error;
    });
};

export const getPriceComparison = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/stocks/VAL/compare?stocksToCompare[]=VALE&stocksToCompare[]=V`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getEarningsProjection = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/stocks/VAL/gains?purchasedAt=Nov%2001%202022%20GMT-0300&purchasedAmount=10.5`
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
