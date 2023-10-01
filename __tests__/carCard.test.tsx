import { render, screen } from "@testing-library/react";
import { CarCard } from "@/components";

describe("CardCard component", () => {
  const mockCar = {
    city_mpg: 19,
    class: "minivan",
    combination_mpg: 22,
    cylinders: 6,
    displacement: 3.5,
    drive: "fwd",
    fuel_type: "gas",
    highway_mpg: 28,
    make: "honda",
    model: "odyssey",
    transmission: "a",
    year: 2022,
  };

  it("renders the car detail", () => {
    render(<CarCard car={mockCar} />);

    expect(screen.getByText(/Honda Odyssey/i)).toBeInTheDocument();

    expect(screen.getByAltText("car model")).toBeInTheDocument();

    expect(screen.getByText("Automatic")).toBeInTheDocument();
    expect(screen.getByText("FWD")).toBeInTheDocument();
    expect(screen.getByText("19 MPG")).toBeInTheDocument();
  });
});
