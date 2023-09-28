import { FilterProps } from "@/types";

export const getCars = async (filters: FilterProps) => {
  const { manufacturer, year, model, limit, fuel } = filters

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const headers = {
    "X-RapidAPI-Key": `${API_KEY}`,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(url, { headers: headers });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
