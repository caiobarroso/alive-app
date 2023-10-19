import axios from "axios";

const BASE_URL = "http://localhost:3001"

export const getCurrentStockPrice = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/stock/VAL/quote`) 
        return response;
    } catch (e) {
        console.log(e)
    }
}

export const getHistoricStockPrice = async (coinId) => {
    try {
        const response = await axios.get("")
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getPriceComparison = async (coinId) => {
    try {
        const response = await axios.get("")
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getEarningsProjection = async (coinId) => {
    try {
        const response = await axios.get("")
        return response.data
    } catch (e) {
        console.log(e)
    }
}