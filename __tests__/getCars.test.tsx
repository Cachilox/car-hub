import { getCars } from "@/services/getCars";
import "@testing-library/jest-dom/extend-expect"

describe("getCars function", () => {
  it("should fetch data from the API and return the result", async () => {
    const mockResponse = [
      {
        city_mpg: 19,
        class: "small pickup truck",
        combination_mpg: 22,
        cylinders: 4,
        displacement: 2.5,
        drive: "rwd",
        fuel_type: "gas",
        highway_mpg: 25,
        make: "chevrolet",
        model: "colorado 2wd",
        transmission: "a",
        year: 2021,
      },
      {
        city_mpg: 19,
        class: "small pickup truck",
        combination_mpg: 21,
        cylinders: 4,
        displacement: 2.5,
        drive: "4wd",
        fuel_type: "gas",
        highway_mpg: 24,
        make: "chevrolet",
        model: "colorado 4wd",
        transmission: "a",
        year: 2021,
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const filters = {
      manufacturer: "chevrolet",
      year: 2021,
      fuel: "Gas",
      limit: 10,
      model: "colorado",
    };

    const results = await getCars(filters);

    expect(results).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=chevrolet&year=2021&model=colorado&limit=10&fuel_type=Gas`,
      {
        headers: {
          "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      }
    );
  });
});
