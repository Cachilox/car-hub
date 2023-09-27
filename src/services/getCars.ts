export const getCars = async () => {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const API_KEY = process.env.API_KEY
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
